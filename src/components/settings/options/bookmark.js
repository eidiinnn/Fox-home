import React from "react";
import { useSelector, useDispatch } from "react-redux";
import extractDomain from "extract-domain";

import {
  SettingsModalItems,
  SettingsModalTitles,
  BookmarkInputs,
} from "../../../style";

export default function Bookmark() {
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.bookmarkLinks);

  function inputOnChange(event, index) {
    const change = [...bookmark];
    change[index] = event.target.value;

    dispatch({ type: "BOOKMARK_CHANGE", bookmarkLinks: change });

    !extractDomain(event.target.value, { tld: true })
      ? (event.target.style.backgroundColor = "#e01f5d")
      : (event.target.style.backgroundColor = "#1FE0A2");

    if (event.target.value === "") {
      event.target.placeholder = "empty";
      event.target.style.backgroundColor = "white";
    }
  }

  return (
    <SettingsModalItems>
      <SettingsModalTitles>Bookmark</SettingsModalTitles>
      {bookmark.map((url, index) => {
        return (
          <BookmarkInputs
            type="url"
            value={url}
            onChange={(event) => inputOnChange(event, index)}
          />
        );
      })}
    </SettingsModalItems>
  );
}
