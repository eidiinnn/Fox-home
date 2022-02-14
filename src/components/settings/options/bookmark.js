import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
