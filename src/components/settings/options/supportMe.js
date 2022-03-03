import React from "react";
import { SupportMeLink, SupportMeIcon } from "../../../style";
import { FaSmile } from "react-icons/fa";

export default function SupportMe() {
  return (
    <SupportMeLink href="https://www.paypal.com/donate/?token=7HJDx-g42m657AI__X56Y9Os0ClKmpQ45C18l09h1rLNgjUCDWzMWcsrgswVJqAshDaNbsaiLEjO08To&locale.x=en_BR">
      Support me
      <SupportMeIcon>
        <FaSmile />
      </SupportMeIcon>
    </SupportMeLink>
  );
}
