import React from "react";
import { Component } from "react";
import { bookmarkLinks } from "../../../../settings.js";
import extractDomain from "extract-domain";

import { CentralDivBookmarkUl, CentralDivBookmarkLi } from "../../../../style";

export default class CreateHtmlBookmarkList extends Component {
  filterUrl = (url) => extractDomain(url, { tld: true });

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
        {bookmarkLinks.map((value) => {
          const Icon = value[1];
          return (
            <CentralDivBookmarkLi>
              <a href={value[0]}>
                <Icon />
              </a>
            </CentralDivBookmarkLi>
          );
        })}
      </CentralDivBookmarkUl>
    );
  }
}
