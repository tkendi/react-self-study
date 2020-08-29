import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import styled from "styled-components";

const StyledButton = styled.button({
  padding: 0,
  margin: 0,
  border: 0,
  width: "10%",
  position: "relative",
});

const ImageButton = () => {
  const [pictures, setPictures] = useState([]);

  const onDrop = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setPictures(imageList);
  };

  return (
    <React.Fragment>
      <ImageUploading
        multiple
        value={pictures}
        onChange={onDrop}
        maxNumber="64"
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <StyledButton
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </StyledButton>
            &nbsp;
            <StyledButton onClick={onImageRemoveAll}>
              Remove all images
            </StyledButton>
            {imageList.map((image, index) => (
              <div key={index} className="imagey-item">
                <img src={image.data_url} alt="" />
                <div className="image-item__btn-wrapper">
                  <StyledButton onClick={() => onImageUpdate(index)}>
                    Update
                  </StyledButton>
                  &nbsp;
                  <StyledButton onClick={() => onImageRemove(index)}>
                    Remove
                  </StyledButton>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </React.Fragment>
  );
};

export default ImageButton;
