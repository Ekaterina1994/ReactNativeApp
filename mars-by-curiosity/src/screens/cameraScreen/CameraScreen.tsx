import {useState, useEffect} from "react";
import {Text, View, Image, TouchableOpacity, FlatList, ScrollView} from "react-native";
import {CameraScreenStyles} from "src/screens/cameraScreen/CameraScreenStyles";
import {NavigationProp} from "@react-navigation/native";
import {BackIcon} from "src/assets/icons/back";
import {useRoverCamera} from "src/context/Context";
import {useDateCamera} from "src/context/Context";
import {getDate} from "src/utils/getDate";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CameraScreen = (props: any) => {
  const {camera} = useRoverCamera();
  const {date} = useDateCamera();

  const dateRover = new Date(date).toISOString().slice(0, 10);
  let cameraRover = "fhaz";

  switch (camera) {
    case "Rear Hazard Avoidance Camera": {
      cameraRover = "rhaz";
      break;
    }
    case "Mast Camera": {
      cameraRover = "mast";
      break;
    }
    case "Chemistry and Camera Complex": {
      cameraRover = "chemcam";
      break;
    }
    case "Mars Hand Lens Imager": {
      cameraRover = "rhaz";
      break;
    }
    case "Mars Descent Imager": {
      cameraRover = "mardi";
      break;
    }
    default: {
      cameraRover = "fhaz";
      break;
    }
  }

  const loadScene = () => {
    props.navigation.navigate("SelectionScreen");
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch(
      // eslint-disable-next-line max-len
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + dateRover + "&camera=" + cameraRover + "&api_key=wewCSDBu1zmERVz40Kh1oKRaGFsCAD5GaGZqbTmk");
      // /photos?&camera=" + camera + "&earth_date=" + date + "&api_key=wewCSDBu1zmERVz40Kh1oKRaGFsCAD5GaGZqbTmk");
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
        style={CameraScreenStyles.imageWrapper}
        onPress={() => props.navigation.navigate("ImageScreen", {id: itemId, src: itemSrc})}
      >
        <Image
          style={CameraScreenStyles.image}
          source={{uri: itemSrc}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {loading ?
        <View style={CameraScreenStyles.container}>
          <Text>
            Loading...
          </Text>
        </View> :

        (<View style={CameraScreenStyles.container}>
          <View style={CameraScreenStyles.header}>
            <TouchableOpacity onPress={loadScene}>
              <BackIcon />
            </TouchableOpacity>

            <View style={CameraScreenStyles.titleWrapper}>
              <Text style={CameraScreenStyles.title}>
                {camera}
              </Text>
              <Text style={CameraScreenStyles.text}>
                {`${getDate(date)}`}
              </Text>
            </View>
          </View>
          <ScrollView>
            <FlatList
              contentContainerStyle={CameraScreenStyles.contentContainer}
              numColumns={3}
              scrollEnabled={false}
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (renderItem(item.img_src, item.id))}
            />
          </ScrollView>
        </View>
        )
      }
    </View>
  );
};