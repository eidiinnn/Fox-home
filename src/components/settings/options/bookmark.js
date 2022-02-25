import React from "react";
import { useSelector, useDispatch } from "react-redux";
import extractDomain from "extract-domain";

import { FaRegTimesCircle } from "react-icons/fa";
import {
  SettingsModalItems,
  SettingsModalTitles,
  BookmarkInputs,
  BookmarkInputsContainer,
  BookmarkInputsCloseIcon,
  BookmarkAddInput,
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
  }

  function inputRemove(index) {
    const change = [...bookmark];
    change.splice(index, 1);
    dispatch({ type: "BOOKMARK_CHANGE", bookmarkLinks: change });
  }

  function addButton() {
    if (bookmark.length >= 6) return null;
    return (
      <BookmarkAddInput onClick={addButtonOnChange}>
        Add new link
      </BookmarkAddInput>
    );
  }

  function addButtonOnChange() {
    const change = [...bookmark];
    change.push("");
    dispatch({ type: "BOOKMARK_CHANGE", bookmarkLinks: change });
  }

  return (
    <SettingsModalItems>
      <SettingsModalTitles>Bookmark</SettingsModalTitles>
      {bookmark.map((url, index) => {
        return (
          <BookmarkInputsContainer>
            <BookmarkInputs
              type="url"
              value={url}
              onChange={(event) => inputOnChange(event, index)}
            />
            <BookmarkInputsCloseIcon onClick={() => inputRemove(index)}>
              <FaRegTimesCircle />
            </BookmarkInputsCloseIcon>
          </BookmarkInputsContainer>
        );
      })}
      {addButton()}
    </SettingsModalItems>
  );
}
