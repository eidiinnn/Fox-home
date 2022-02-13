import React from "react";
import { Component } from "react";
import { iconsList } from "./tools/iconsList.js";
import extractDomain from "extract-domain";

import {
  CentralDivBookmarkUl,
  CentralDivBookmarkLi,
  NotListedIcon,
} from "../../../../style";

export default class CreateHtmlBookmarkList extends Component {
  componentDidMount = () => {
    const storageBookmark = localStorage.getItem("bookmark");
    !storageBookmark
      ? localStorage.setItem(
          "bookmark",
          JSON.stringify(this.state.bookmarkLinks)
        )
      : this.setState({ bookmarkLinks: JSON.parse(storageBookmark) });
  };

  filterUrl = (url) => extractDomain(url, { tld: true });

  getAListedIcon = (url) => {
    const domain = this.filterUrl(url);
    const iconsListReturn = iconsList.find((item) => item[0] === domain);
    return !iconsListReturn ? null : iconsListReturn[1];
  };

  getAIcon(url) {
    const Icon = this.getAListedIcon(url);
    const FirstLetter = this.filterUrl(url).slice(0, 1).toUpperCase();
    return !Icon ? <NotListedIcon>{FirstLetter}</NotListedIcon> : <Icon />;
  }

  state = {
    bookmarkLinks: [
      "https://discord.com/channels/@me",
      "https://github.com/",
      "https://www.reddit.com/",
      "https://www.linkedin.com/",
      "https://web.whatsapp.com/",
      "https://www.notion.so/",
    ],
  };

  render() {
    return (
      <CentralDivBookmarkUl>
        {this.state.bookmarkLinks.map((url) => {
          if (!this.filterUrl(url)) return null;
          return (
            <CentralDivBookmarkLi key={url}>
              <a href={url}>{this.getAIcon(url)}</a>
            </CentralDivBookmarkLi>
          );
        })}
      </CentralDivBookmarkUl>
    );
  }
}
