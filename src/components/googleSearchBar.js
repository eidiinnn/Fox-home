import React from "react";
import { Component } from "react";
import { FaGoogle } from "react-icons/fa";

import { SearchBarContainer, SearchBarGoogleIcon } from "../style";

export default class GoogleSearchBar extends Component {
  render() {
    return (
      <SearchBarContainer>
        <SearchBarGoogleIcon>
          <FaGoogle />
        </SearchBarGoogleIcon>
      </SearchBarContainer>
    );
  }
}
