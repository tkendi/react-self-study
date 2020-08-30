import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import styled from "styled-components";
import {Button, makeStyles} from '@material-ui/core'

const EditImage = styled.img`
  position: relative;
  top: 0;
  left: 0;
  float: left;
`

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    button: {
      float: 'left'
    }
  }
}))

const ImageButton = ({urlhandler}) => {
  const [pictures, setPictures] = useState([]);

  const onDrop = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setPictures(imageList);
    urlhandler(imageList)
  };

  const classes = useStyles()

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
          <div className = {classes.root}>
            <Button color = "primary"
              onClick={onImageUpload}
              {...dragProps}
              className = {classes.button}
            >
              Add Image
            </Button>
            &nbsp;
            <Button onClick={onImageRemoveAll} color = "secondary" className = {classes.button} >
              Remove image
            </Button>
            {imageList.map((image, index) => (
              <div key={index}>
                <EditImage src={image.data_url} alt=""  />
                <div>
                  <Button onClick={() => onImageUpdate(index)}>
                    Change Image
                  </Button>
                  &nbsp;
                  <Button onClick={() => onImageRemove(index)}>
                    Remove Image
                  </Button>
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
