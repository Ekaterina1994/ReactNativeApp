import {useState} from "react";
import {Text, View, TouchableOpacity, TextInput, Platform} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {DatePickerStyles} from "src/components/datePicker/DatePickerStyles";
import {currentDate, getDate} from "src/utils/getDate";
import {CalendarIcon} from "src/assets/icons/calendar";

export const DatePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState(currentDate);

  const onChange = (event, selectDate) => {
    const selectedDate = selectDate || date;
    setShow(Platform.OS === "ios");
    setDate(selectedDate);

    const formattedDate = getDate(selectedDate);
    setText(formattedDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <View style={DatePickerStyles.container}>
      <Text style={DatePickerStyles.label}>
        Date
      </Text>
      <View style={DatePickerStyles.inputWrapper}>
        <TouchableOpacity
          style={DatePickerStyles.inputWrapper}
          onPress={() => showMode()}
        >
          <TextInput
            style={DatePickerStyles.input}
            placeholder={currentDate}
            value={text}
            editable={false}
          />
          <View style={DatePickerStyles.icon}>
            <CalendarIcon />
          </View>
        </TouchableOpacity>
      </View>
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