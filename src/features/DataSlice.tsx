import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { dataGateways, dataDevices } from "../utils/dummy";

type Props = {
  gateways: {
    id: string;
    name: string;
    ipv4: string;
    sinc: string;
  }[];
  devices: {
    samsung: device[];
    iphone: device[];
    xiaomi: device[];
  };
  activeGateway: "samsung" | "iphone" | "xiaomi" | undefined;
  sinc: {
    sincSamsung: device[];
    sincIphone: device[];
    sincXiaomi: device[];
  };
  showModal: boolean;
};

const initialState: Props = {
  gateways: dataGateways,
  devices: dataDevices,
  activeGateway: undefined,
  sinc: {
    sincSamsung: [],
    sincIphone: [],
    sincXiaomi: [],
  },
  showModal: false,
};

type ActionSincSamsung = {
  payload: {
    type: "add" | "remove";
    gateway: "samsung" | "iphone" | "xiaomi" | string;
    item: device;
  };
};

export const allData = createSlice({
  name: "allData",
  initialState,
  reducers: {
    setActiveGateway: (state, action) => {
      state.activeGateway = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    handleSincSamsung: (state, action: ActionSincSamsung) => {
      const dataIn = action.payload;
      if (
        state.activeGateway === "samsung" &&
        dataIn.gateway === "samsung" &&
        dataIn.type === "add" &&
        state.sinc.sincSamsung.length < 10
      ) {
        state.sinc.sincSamsung.push(dataIn.item);
      } else if (dataIn.gateway === "samsung" && dataIn.type === "remove") {
        const temp = state.sinc.sincSamsung;
        const itemToRemove = temp.find((item) => item.id === dataIn.item.id);
        itemToRemove && temp.splice(temp.indexOf(itemToRemove), 1);
      }
      if (
        state.activeGateway === "iphone" &&
        dataIn.gateway === "iphone" &&
        dataIn.type === "add" &&
        state.sinc.sincIphone.length < 10
      ) {
        state.sinc.sincIphone.push(dataIn.item);
      } else if (dataIn.gateway === "iphone" && dataIn.type === "remove") {
        const temp = state.sinc.sincIphone;
        const itemToRemove = temp.find((item) => item.id === dataIn.item.id);
        itemToRemove && temp.splice(temp.indexOf(itemToRemove), 1);
      }
      if (
        state.activeGateway === "xiaomi" &&
        dataIn.gateway === "xiaomi" &&
        dataIn.type === "add" &&
        state.sinc.sincXiaomi.length < 10
      ) {
        state.sinc.sincXiaomi.push(dataIn.item);
      } else if (dataIn.gateway === "xiaomi" && dataIn.type === "remove") {
        const temp = state.sinc.sincXiaomi;
        const itemToRemove = temp.find((item) => item.id === dataIn.item.id);
        itemToRemove && temp.splice(temp.indexOf(itemToRemove), 1);
      }
    },
    removeAllDevice: (state) => {
      if (state.activeGateway === "samsung")
        state.sinc.sincSamsung = initialState.sinc.sincSamsung;
      if (state.activeGateway === "iphone")
        state.sinc.sincIphone = initialState.sinc.sincIphone;
      if (state.activeGateway === "xiaomi")
        state.sinc.sincXiaomi = initialState.sinc.sincXiaomi;
    },
  },
});
export const {
  setActiveGateway,
  setShowModal,
  handleSincSamsung,
  removeAllDevice,
} = allData.actions;
export const selectGateways = (state: RootState) => state.allData.gateways;
export const selectDevices = (state: RootState) => state.allData.devices;
export const selectActiveGateway = (state: RootState) =>
  state.allData.activeGateway;
export const selectSincronizate = (state: RootState) => state.allData.sinc;
export const selectShowModal = (state: RootState) => state.allData.showModal;
