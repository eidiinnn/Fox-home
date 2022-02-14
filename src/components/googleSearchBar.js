import React from "react";
import { useSelector } from "react-redux";
import { FaGoogle } from "react-icons/fa";

import {
  SearchBarContainer,
  SearchBarGoogleIcon,
  SearchBarInput,
  SearchBarForm,
} from "../style";

export default function GoogleSearchBar() {
  const backgroundColor = useSelector((state) => state.backgroundColor);

  function submitEvent(event) {
    event.preventDefault();
    window.location.href = `https://www.google.com/search?q=${event.target.search.value}`;
  }

  return (
    <SearchBarContainer backgroundColor={backgroundColor}>
      <SearchBarGoogleIcon>
        <FaGoogle />
      </SearchBarGoogleIcon>
      <SearchBarForm onSubmit={submitEvent}>
        <SearchBarInput id="search" placeholder="Search on google" />
      </SearchBarForm>
    </SearchBarContainer>
  );
}
