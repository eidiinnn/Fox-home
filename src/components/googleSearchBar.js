import React from "react";
import { Component } from "react";
import { FaGoogle } from "react-icons/fa";

import {
  SearchBarContainer,
  SearchBarGoogleIcon,
  SearchBarInput,
  SearchBarForm,
} from "../style";

export default class GoogleSearchBar extends Component {
  submitEvent = (event) => {
    event.preventDefault();
    window.location.href = `https://www.google.com/search?q=${event.target.search.value}`;
  };

  render() {
    return (
      <SearchBarContainer>
        <SearchBarGoogleIcon>
          <FaGoogle />
        </SearchBarGoogleIcon>
        <SearchBarForm onSubmit={this.submitEvent}>
          <SearchBarInput id="search" placeholder="Search on google" />
        </SearchBarForm>
      </SearchBarContainer>
    );
  }
}
