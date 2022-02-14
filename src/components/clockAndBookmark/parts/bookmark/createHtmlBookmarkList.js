import React from "react";
import { useSelector } from "react-redux";
import { iconsList } from "./tools/iconsList.js";
import extractDomain from "extract-domain";

import {
  CentralDivBookmarkUl,
  CentralDivBookmarkLi,
  NotListedIcon,
} from "../../../../style";

export default function CreateHtmlBookmarkList() {
  const bookmarkLinks = useSelector((state) => state.bookmarkLinks);

  function filterUrl(url) {
    return extractDomain(url, { tld: true });
  }

  function getAListedIcon(url) {
    const domain = filterUrl(url);
    const iconsListReturn = iconsList.find((item) => item[0] === domain);
    return !iconsListReturn ? null : iconsListReturn[1];
  }

  function getAIcon(url) {
    const Icon = getAListedIcon(url);
    const firstLetter = filterUrl(url).slice(0, 1).toUpperCase();
    return !Icon ? <NotListedIcon>{firstLetter}</NotListedIcon> : <Icon />;
  }

  return (
    <CentralDivBookmarkUl>
      {bookmarkLinks.map((url) => {
        if (!filterUrl(url)) return null;
        return (
          <CentralDivBookmarkLi key={url}>
            <a href={url}>{getAIcon(url)}</a>
          </CentralDivBookmarkLi>
        );
      })}
    </CentralDivBookmarkUl>
  );
}
