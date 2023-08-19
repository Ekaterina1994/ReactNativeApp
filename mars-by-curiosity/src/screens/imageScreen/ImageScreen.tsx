import {useState, useEffect} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import {ImageScreenStyles} from "src/screens/imageScreen/ImageScreenStyles";
import {NavigationProp} from "@react-navigation/native";
import {BackIconWhite} from "src/assets/icons/backWhite";
import {ShareIcon} from "src/assets/icons/share";

interface RouterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any, any>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImageScreen = (props: any, {navigation}: any) => {
  // const {id} = route.params;
  // const ID = `${id}`;
  // const {url} = route.params;

  const loadScene = () => {
    navigation.navigate("CameraScreen");
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch(
      // eslint-disable-next-line max-len
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?id=${props.route.params.id}&api_key=wewCSDBu1zmERVz40Kh1oKRaGFsCAD5GaGZqbTmk`);
    const datas = await resp.json();
    setData(datas.photos);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={ImageScreenStyles.container}>
      <View style={ImageScreenStyles.headerWrapper}>
        <View style={ImageScreenStyles.header}>
          <TouchableOpacity onPress={loadScene}>
            <BackIconWhite />
          </TouchableOpacity>

          <View style={ImageScreenStyles.titleWrapper}>
            <Text style={ImageScreenStyles.title}>
              Photo ID
            </Text>
            <Text style={ImageScreenStyles.text}>
              {props.route.params.id}
            </Text>
          </View>
          <ShareIcon />
        </View>
      </View>
      <View style={ImageScreenStyles.imageWrapper}>
        <Image
          style={ImageScreenStyles.image}
          source={{uri: props.route.params.src}}
        />
      </View>
    </View>
  );
};