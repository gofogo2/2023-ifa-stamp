import { atom } from "recoil";

export const MaxLengthState = atom({
  key: "MaxLength",
  default: 5,
});

export const ShowPopupState = atom({
  key: "ShowPopup",
  default: false,
});

export const ReceivedState = atom({
  key: "IsReceived",
  default: false,
});

export const DebugState = atom({
  key: "IsDebug",
  default: false,
});

export const ItemsState = atom({
  key: "Items",
  default: [],
});

export const LoginState = atom({
  key: "IsLogin",
  default: false,
});

export const GuideState = atom({
  key: "IsGuide",
  default: false,
});
