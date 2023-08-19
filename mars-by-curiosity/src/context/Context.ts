import React, {createContext, useContext} from "react";

const STUB_FUNCTION = () => undefined;
const STUB_CAMERA_VALUE = "";
const STUB_DATE_VALUE = new Date();

export type RoverCamera = {
  camera: string,
  setCamera: (camera: string) => void,
}

export const RoverCameraContext: React.Context<RoverCamera> = createContext<RoverCamera>({
  camera: STUB_CAMERA_VALUE,
  setCamera: STUB_FUNCTION,
});

export const useRoverCamera = () => useContext(RoverCameraContext);


export type DateCamera = {
  date: Date,
  setDate: (date: Date) => void,
}

export const DateCameraContext: React.Context<DateCamera> = createContext<DateCamera>({
  date: STUB_DATE_VALUE,
  setDate: STUB_FUNCTION,
});

export const useDateCamera = () => useContext(DateCameraContext);