import React from "react";
import { Component } from "react";
import { bookmarkLinks } from "../../../settings.js";

import { CentralDivBookmarkUl, CentralDivBookmarkLi } from "../../../style";

export default class CreateHtmlBookmarkList extends Component {
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
