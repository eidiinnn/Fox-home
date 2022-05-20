import ExtPay from "extpay/dist/ExtPay.module";
import store from "../redux/store";

export const extpay = ExtPay("fox-home");

export function getExtpayUser() {
  extpay.getUser().then((userInfo) => {
    store.dispatch({
      type: "SET_STATE_ITEM",
      item: "extpayUser",
      value: userInfo,
    });
  });
}
