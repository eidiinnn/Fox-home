import React from "react";
import { Component } from "react";

import {
  SettingsModalItems,
  SettingsModalTitles,
  BookmarkInputs,
} from "../../../style";

export default class Bookmark extends Component {
  componentDidMount = () => {
    const interval = setInterval(() => {
      const data = JSON.parse(localStorage.getItem("bookmark"));
      if (!data) return;
      this.setState({ bookmark: data });
      clearInterval(interval);
    }, 2000);
  };

  inputOnChange = (event, index) => {
    const { bookmark } = this.state;
    bookmark[index] = event.target.value;
    this.setState({ bookmark: bookmark });
    this.sendToLocalStorage(bookmark[index]);
  };

  sendToLocalStorage = (bookmarkItem) => {
    const regexp =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    if (regexp.test(bookmarkItem) === true || bookmarkItem === "")
      localStorage.setItem("bookmark", JSON.stringify(this.state.bookmark));
  };

  state = {
    bookmark: [],
  };

  render() {
    const { bookmark } = this.state;
    return (
      <SettingsModalItems>
        <SettingsModalTitles>Bookmark</SettingsModalTitles>
        {bookmark.map((url, index) => {
          return (
            <BookmarkInputs
              type="url"
              value={url}
              onChange={(event) => this.inputOnChange(event, index)}
            />
          );
        })}
      </SettingsModalItems>
    );
  }
}
