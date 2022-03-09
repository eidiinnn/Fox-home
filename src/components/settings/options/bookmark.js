import React from "react";
import { useSelector, useDispatch } from "react-redux";
import extractDomain from "extract-domain";

import { FaRegTimesCircle } from "react-icons/fa";
import {
  ModalItem,
  ModalTitles,
  BookmarkInputs,
  BookmarkInputsContainer,
  BookmarkInputRemove,
  BookmarkAddInput,
} from "../../../style/settings";

export default function Bookmark() {
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.bookmarkLinks);

  function inputOnChange(event, index) {
    const change = [...bookmark];
    change[index] = event.target.value;
    dispatch({ type: "BOOKMARK_CHANGE", bookmarkLinks: change });
    correctUrlIndicator(event);
  }

  function correctUrlIndicator(event) {
    !extractDomain(event.target.value, { tld: true })
      ? (event.target.style.backgroundColor = "#e01f5d")
      : (event.target.style.backgroundColor = "#1FE0A2");
  }

  function inputRemove(index) {
    const change = [...bookmark];
    change.splice(index, 1);
    dispatch({ type: "BOOKMARK_CHANGE", bookmarkLinks: change });
  }

  function addNewInput() {
    if (bookmark.length >= 6) return null;
    return <BookmarkAddInput onClick={addNewInputAction}>Add</BookmarkAddInput>;
  }

  function addNewInputAction() {
    const change = [...bookmark, ""];
    dispatch({ type: "BOOKMARK_CHANGE", bookmarkLinks: change });
  }

  return (
    <ModalItem>
      <ModalTitles>Bookmark</ModalTitles>
      {bookmark.map((url, index) => {
        return (
          <BookmarkInputsContainer>
            <BookmarkInputs
              type="url"
              value={url}
              onChange={(event) => inputOnChange(event, index)}
            />
            <BookmarkInputRemove onClick={() => inputRemove(index)}>
              <FaRegTimesCircle />
            </BookmarkInputRemove>
          </BookmarkInputsContainer>
        );
      })}
      {addNewInput()}
    </ModalItem>
  );
}
