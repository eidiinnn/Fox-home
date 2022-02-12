import React from "react";
import { Component } from "react";
import { iconsList } from "./tools/iconsList.js";
import extractDomain from "extract-domain";

import { CentralDivBookmarkUl, CentralDivBookmarkLi } from "../../../../style";

export default class CreateHtmlBookmarkList extends Component {
  filterUrl = (url) => extractDomain(url, { tld: true });

  getIconDomain = (url) => {
    const domain = this.filterUrl(url);
    const iconsListReturn = iconsList.find((item) => item[0] === domain);
    return !iconsListReturn ? null : iconsListReturn[1];
  };

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
        {this.state.bookmarkLinks.map((value) => {
          const Icon = this.getIconDomain(value);
          return (
            <CentralDivBookmarkLi key={value}>
              <a href={value}>
                <Icon />
              </a>
            </CentralDivBookmarkLi>
          );
        })}
      </CentralDivBookmarkUl>
    );
  }
}
