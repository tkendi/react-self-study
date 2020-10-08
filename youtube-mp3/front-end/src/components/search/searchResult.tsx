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
import { toJS } from "mobx";
// import styles from '../../styles/searchResult.module.css'
import smapleImg from "../../test/img/sample.png";

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
      <div>
        {toJS(store).searching.data.thumb.map((res: any, index: any) => {
          return (
            <Card style={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={res}
                  title={toJS(store).searching.data.title[index]}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {toJS(store).searching.data.title[index]}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {toJS(store).searching.data.}
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
        })}
      </div>
    );
  }
}

export default searchResult;
