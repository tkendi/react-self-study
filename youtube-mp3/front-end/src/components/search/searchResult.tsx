import React from "react";
import {
  Typography,
  Card,
  makeStyles,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { inject, observer } from "mobx-react";
// import { toJS } from "mobx";
// import styles from '../../styles/searchResult.module.css'
import smapleImg from '../../test/img/sample.png'

// const useStyles: any = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

@inject("store")
@observer
class searchResult extends React.Component {
  render() {
    const { store }: any = this.props;
    const classes: any = this.props;
    return (
      <Card style = {{maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component = "img"
            alt = "Contemplative Reptile"
            height = "140"
            image={smapleImg}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Example
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default searchResult;
