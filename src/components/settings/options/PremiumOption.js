import React from "react";
import { useSelector } from "react-redux";
import { extpay } from "../../../premium/extpay";
import { ModalItem, ModalTitles, DefaultButton } from "../../../style/settings";

export default function PremiumOption() {
  const userInfo = useSelector((state) => state.extpayUser);

  if (!userInfo) return null;

  function getContent() {
    return !userInfo.paid ? FreeUser() : PremiumUser();
  }

  function PremiumUser() {
    return <>Thanks for get the Premium 🦊</>;
  }
  function FreeUser() {
    return (
      <DefaultButton onClick={extpay.openPaymentPage} noWidthLimit>
        Get the Premium 👑
      </DefaultButton>
    );
  }

  return (
    <ModalItem>
      <ModalTitles small>Premium</ModalTitles>
      {getContent()}
    </ModalItem>
  );
}
