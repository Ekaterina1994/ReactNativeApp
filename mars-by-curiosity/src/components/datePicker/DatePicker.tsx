import {useState} from "react";
import {Text, View, Image, Button, TouchableOpacity, Pressable, TextInput, Platform} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {DatePickerStyles} from "src/components/datePicker/DatePickerStyles";
import {getCurrentDate} from "src/utils/getDate";
import {SvgUri} from "react-native-svg";

export const DatePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState(getCurrentDate);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    const tempDate = new Date(currentDate);
    const fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
    setText(fDate);
  };

  const showMode = () => {
    setShow(true);
  };


  return (
    <View style={DatePickerStyles.container}>
      <Text style={DatePickerStyles.label}>
        Date
      </Text>
      <TouchableOpacity onPress={() => showMode()}>
        <TextInput
          style={DatePickerStyles.input}
          placeholder={getCurrentDate}
          value={text}
          editable={false}
        />
        <SvgUri
          width="24"
          height="24"
          uri="assets/icons/calendar.svg"
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={onChange}
          display="spinner"
        />
      )}
    </View>
  );
};