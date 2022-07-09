import React from "react";
import { useSelector, useDispatch } from "react-redux";
import extractDomain from "extract-domain";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

import { IoIosCloseCircle } from "react-icons/io";
import {
  ModalItem,
  ModalTitles,
  BookmarkInputs,
  BookmarkInputsContainer,
  BookmarkInputRemove,
  DefaultButton,
  Upload,
  CustomIconPopoverContainer,
  CustomIconPopoverTitles,
} from "../../../style/settings";

export default function Bookmark() {
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.bookmarkLinks);
  const customIcons = useSelector((state) => state.customIcons);

  function correctUrlIndicator(event) {
    !extractDomain(event.target.value, { tld: true })
      ? (event.target.style.outline = "2px solid #e01f5d")
      : (event.target.style.outline = "2px solid #1FE0A2");
  }

  function inputOnChange(event, index) {
    const change = [...bookmark];
    change[index] = event.target.value;
    dispatch({ type: "SET_STATE_ITEM", item: "bookmarkLinks", value: change });
    correctUrlIndicator(event);
  }

  function inputRemove(index) {
    const bookmarkToDispatch = [...bookmark];

    const customIconChange = [...customIcons];
    const domainIndex = customIconChange
      .map((v) => v.domain)
      .indexOf(bookmarkToDispatch[index]);

    if (domainIndex >= 0) {
      customIconChange[domainIndex].icon = "noIcon";
      dispatch({
        type: "SET_STATE_ITEM",
        item: "customIcons",
        value: customIconChange,
      });
    }

    bookmarkToDispatch.splice(index, 1);
    dispatch({
      type: "SET_STATE_ITEM",
      item: "bookmarkLinks",
      value: bookmarkToDispatch,
    });
  }

  function addNewInput() {
    if (bookmark.length >= 6) return null;
    return <DefaultButton onClick={addNewInputOnClick}>Add</DefaultButton>;
  }

  function addNewInputOnClick() {
    const change = [...bookmark, ""];
    dispatch({ type: "SET_STATE_ITEM", item: "bookmarkLinks", value: change });
  }

  function addCustomIconToAUrl(event) {
    if(!urlToCustom) return null
    const file = event.target.files[0];
    if(file.type !== 'image/png' && file.type !== 'image/jpeg'){
      return alert('You can use only png and jpg image formats.');
    } 
    const blobImage = new Blob([file]);

    let customIconsToDispatch;
    if (Array.isArray(customIcons)) customIconsToDispatch = [...customIcons];
    else customIconsToDispatch = [];

    const domainIndex = customIconsToDispatch.map((v) => v.domain).indexOf(urlToCustom);
    if (domainIndex >= 0) customIconsToDispatch[domainIndex].icon = blobImage;
    else customIconsToDispatch.push({ domain: urlToCustom, icon: blobImage });

    dispatch({
      type: "SET_STATE_ITEM",
      item: "customIcons",
      value: customIconsToDispatch,
    });
    handleClose();
  }

  function iconRemove() {
    if (!customIcons || !Array.isArray(customIcons) || !urlToCustom) return null;

    const customIconsToDispatch = [...customIcons];
    const domainIndex = customIconsToDispatch.map((v) => v.domain).indexOf(urlToCustom);

    if (domainIndex < 0) return null;

    customIconsToDispatch[domainIndex].icon = "noIcon";
    dispatch({
      type: "SET_STATE_ITEM",
      item: "customIcons",
      value: customIconsToDispatch,
    });
    handleClose();
  }


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [urlToCustom, seturlToCustom] = React.useState(null)

  const handleClick = (event) => {
    seturlToCustom((event.currentTarget.dataset.url || null))
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    seturlToCustom(null);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <ModalItem>
      <ModalTitles>Bookmark</ModalTitles>
      {bookmark.map((url, index) => {
        return (
          <BookmarkInputsContainer key={index}>
            <BookmarkInputs
              type='url'
              value={url}
              onChange={(event) => inputOnChange(event, index)}
            />
            <Button
              aria-describedby='propoover'
              data-url={url}
              variant='contained'
              onClick={handleClick}
              style={{
                width: '160px',
                height: '22px',
                borderRadius: '2px',
                backgroundColor: '#464649',
                fontFamily: 'roboto',
                fontSize: '13.3px',
                fontWeight: '400',
                padding: '0 10px',
                margin: '0 3px',
                textTransform: 'none',
              }}
            >
              Custom Icon
            </Button>
            <BookmarkInputRemove onClick={() => inputRemove(index)}>
              <IoIosCloseCircle />
            </BookmarkInputRemove>
          </BookmarkInputsContainer>
        );
      })}
      {addNewInput()}

      <Popover
        id='propoover'
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <CustomIconPopoverContainer>
          <CustomIconPopoverTitles>Custom icon</CustomIconPopoverTitles>
          <BookmarkInputsContainer customIconContainer>
            <Upload
              type='file'
              accept='.png, .jpg'
              onChange={addCustomIconToAUrl}
            />
            <BookmarkInputRemove onClick={iconRemove}>
              Remove the custom icon
              <IoIosCloseCircle />
            </BookmarkInputRemove>
          </BookmarkInputsContainer>
        </CustomIconPopoverContainer>
      </Popover>
    </ModalItem>
  );
}
