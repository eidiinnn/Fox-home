import React from "react";
import { useSelector } from "react-redux";
import { iconsList } from "./iconsList.js";
import {
  BookmarkLinkContainer,
  BookmarkLink,
  IconCreated,
} from "../../../../style/centralContainer";

export default function BookmarkList() {
  const bookmarkLinks = useSelector((state) => state.bookmarkLinks);
  const customIcons = useSelector((state) => state.customIcons)

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
    if(customIcons && Array.isArray(customIcons)){
      const existCustomIcon = customIcons.find(v => v.domain === url);
      if(existCustomIcon && existCustomIcon.icon !== "noIcon" && existCustomIcon.domain){
        const iconUrl = URL.createObjectURL(existCustomIcon.icon);
        return <IconCreated image={iconUrl} />
      }
    }
    const Icon = getAListedIcon(url);
    const firstLetter = filterUrl(url).slice(0, 1).toUpperCase();
    return !Icon ? <IconCreated>{firstLetter}</IconCreated> : <Icon />;
  }

  return (
    <BookmarkLinkContainer>
      {bookmarkLinks.map((url, index) => {
        if (!filterUrl(url)) return null;
        return (
          <BookmarkLink key={index} href={url}>
            {getAIcon(url)}
          </BookmarkLink>
        );
      })}
    </BookmarkLinkContainer>
  );
}
