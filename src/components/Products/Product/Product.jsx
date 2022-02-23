import React from 'react'
import {Card , CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from "./styles";
const Product = ({hambozo}) => {
    const classes = useStyles();
const handleAddToCart = () => onAddToCart(hambozo.id,1);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={hambozo.media.source}
        title={hambozo.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom component="h2">
            {/* {product.price.formatted_with_symbol} */}
            {hambozo.name}
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            ${hambozo.price.formatted}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: hambozo.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {hambozo.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add To Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product