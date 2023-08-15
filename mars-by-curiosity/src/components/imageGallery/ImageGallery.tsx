import {useState, useEffect} from "react";
import {Text, TouchableOpacity, View, FlatList, Image} from "react-native";
import {ListItem} from "react-native-elements";
import {ImageGalleryStyles} from "src/components/imageGallery/ImageGalleryStyles";

const ACTIVE_OPACITY_VALUE = 0.8;

export const ImageGallery = () => {
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
    // const photo = data.photos[0].img_src;
    // alert(`${photo}`);
  }, []);

  const renderItem = (itemSrc: string, itemId: string) => {
    return (
      <View style={ImageGalleryStyles.wrapper}>
        <Image
          style={{flexDirection: "row", width: 100, height: 100}}
          source={{uri: itemSrc}}
        />
        {/* <View>
          <Text>
            {itemId}
          </Text>
        </View> */}
      </View>
    );
  };

  return (
    <View style={ImageGalleryStyles.container}>
      {loading ?
        <Text>
          Loading...
        </Text> :
        (<FlatList
          style={ImageGalleryStyles.wrapper}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (renderItem(item.img_src, item.id))}
        />
        )
      }
    </View>
  );
};