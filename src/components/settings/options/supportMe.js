import React from "react";
import { SupportMeLink, SupportMeIcon } from "../../../style";
import { FaSmile } from "react-icons/fa";

export default function SupportMe() {
  return (
    <SupportMeLink href="https://www.paypal.com/donate/?business=TBTX6CF5LDFEJ&no_recurring=1&currency_code=USD">
      Support me
      <SupportMeIcon>
        <FaSmile />
      </SupportMeIcon>
    </SupportMeLink>
  );
}
