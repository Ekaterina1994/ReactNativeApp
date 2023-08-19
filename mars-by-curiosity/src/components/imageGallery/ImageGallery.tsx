import {useState, useEffect} from "react";
import {Text, TouchableOpacity, View, FlatList, Image, ScrollView} from "react-native";
import {ImageGalleryStyles} from "src/components/imageGallery/ImageGalleryStyles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImageGallery = (props) => {
  const loadScene = () => {
    // navigation.navigate("ImageScreen");
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch(
      // eslint-disable-next-line max-len
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=wewCSDBu1zmERVz40Kh1oKRaGFsCAD5GaGZqbTmk");
    const datas = await resp.json();
    setData(datas.photos);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = (itemSrc: string, itemId: string) => {
    return (
      <TouchableOpacity
        style={ImageGalleryStyles.imageWrapper}
        onPress={() => props.navigate("ImageScreen", {id: itemId, src: itemSrc})}
      >
        <Image
          style={ImageGalleryStyles.image}
          source={{uri: itemSrc}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={ImageGalleryStyles.container}>
      {loading ?
        <Text>
          Loading...
        </Text> :
        (<FlatList
          contentContainerStyle={ImageGalleryStyles.contentContainer}
          numColumns={3}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (renderItem(item.img_src, item.id))}
        />
        )
      }
    </View>
  );
};