import React from "react";
import { useSelector } from "react-redux";
import { BackgroundDiv } from "../style";

export default function Background() {
  const image = useSelector((state) => state.image);

  return <BackgroundDiv image={image} />;
}
