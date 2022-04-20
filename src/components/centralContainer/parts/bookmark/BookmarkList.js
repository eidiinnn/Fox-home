import React from "react";
import { useSelector } from "react-redux";
import { iconsList } from "./iconsList.js";
import {
  BookmarkUl,
  BookmarkLi,
  IconCreated,
} from "../../../../style/centralContainer";

export default function BookmarkList() {
  const bookmarkLinks = useSelector((state) => state.bookmarkLinks);

  function filterUrl(url) {
    if (url === "") return null;
    return url.match(
      /^(?:https?:\/\/)?(?:[^@\\/\n]+@)?(?:www\.)?([^:\\/\n]+)/im
    )[1];
  }

  function getAListedIcon(url) {
    const domain = filterUrl(url);
    const iconsListReturn = iconsList.find((item) => item[0] === domain);
    return !iconsListReturn ? null : iconsListReturn[1];
  }

  function getAIcon(url) {
    const Icon = getAListedIcon(url);
    const firstLetter = filterUrl(url).slice(0, 1).toUpperCase();
    return !Icon ? <IconCreated>{firstLetter}</IconCreated> : <Icon />;
  }

  return (
    <BookmarkUl>
      {bookmarkLinks.map((url) => {
        if (!filterUrl(url)) return null;
        return (
          <BookmarkLi key={url}>
            <a href={url}>{getAIcon(url)}</a>
          </BookmarkLi>
        );
      })}
    </BookmarkUl>
  );
}
