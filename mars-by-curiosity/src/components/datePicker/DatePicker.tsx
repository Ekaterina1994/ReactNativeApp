import {useState} from "react";
import {Text, View, TouchableOpacity, TextInput, Platform} from "react-native";
import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import {DatePickerStyles} from "src/components/datePicker/DatePickerStyles";
import {currentDate, getDate} from "src/utils/getDate";
import {CalendarIcon} from "src/assets/icons/calendar";
import {useDateCamera} from "src/context/Context";

export const DatePickerComponent = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(currentDate);

  const {date, setDate} = useDateCamera();

  const onChange = (event: DateTimePickerEvent, selectDate: Date | undefined) => {
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