/**
    THIS COMPONENT SHOW ONE OF PRODUCT IN THE DEPARTMENTS AND IF THE USER DIDN'T
    CONECTED THE BOUTTON IS DISABELED 
    ELSE THE USER CAN ADD THE PRODUCTS TO THE CART OR WHISH LIST
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { UpdateUserCart } from '../../Services/UserProductService'
import { AddShoppingCart, RemoveShoppingCart } from '@material-ui/icons';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Product.css'
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 280,
    objectFit: 'fill',
  }
});

export default function Product(props) {
  const [noUser, setNoUser] = useState(true)
  const classes = useStyles();

  //THIS FUNCTION  CHECK IF THE USER CONECTED BY USE WHITH THE USER_ID IN THE
  // LOCAL STOREGE FOR SECURITY REASONS
  useEffect(() => {
    setNoUser(!localStorage.getItem("userId"))
  }, [])

  //THIS FUNCTION ACTIVED  AT ON_CLICK IN THE BOUTTON OF THE PRODUCTS 
  // THIS FUNCTION GETS TWO PARAMETERS THE FIRST IS THE COUNT TO ADD AND 
  //THIS PARAMETER CAN BE POSITIVE OR NEGATIV THE SECOND PARAMETER INDICETED WHERE THE PRODUCT  
  //ADD TO THE CART IF categoryId=1 OR TO WHISH LIST IF categoryId=2 
  //TO WHIS LISH THE USER CAN ONLIY TO ADD AND IF HE WAND TO REMOVE HE CAN DO IT IN THE WHISH LIST
  const UpdateCart = (countAdd, categoryId) => {
    //THIS FUNCTION READ FROM THE JSON THE USER PRODUCTS 
    //BY THE USER_ID IN LOCAL STORAGE AND THE PROPS OF PRODUCT 
    UpdateUserCart(localStorage.getItem("userId"), props.product._id, categoryId, countAdd)
    .then(props.setReload);
  }


  return (
    <div className="card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.product.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {props.product.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">

              Price: {props.product.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
              Catalog Number:{props.product.proId}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={() => { UpdateCart(1, 1) }} disabled={noUser}>
            <AddShoppingCart style={{ fill: !noUser ? 'rgb(4, 24, 63)' : 'gray' }} />
          </Button>
          <Button onClick={() => { UpdateCart(-1, 1) }} disabled={noUser}>
            <RemoveShoppingCart style={{ fill: !noUser ? 'rgb(4, 24, 63)' : 'gray' }} />
          </Button>
          <Button onClick={() => { UpdateCart(1, 2) }} disabled={noUser}>
            <FavoriteBorderIcon style={{ fill: !noUser ? 'red' : 'gray' }} />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

