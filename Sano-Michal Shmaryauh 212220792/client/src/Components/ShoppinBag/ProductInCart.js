import React from 'react';
import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
/**
    THIS COMPONENT SHOW ONE OF PRODUCT IN THE CART AND WHISH LIST 
    DIFFRENT BUTTON FROM THE PRODUCT IN DEPARTMENTS
 */

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import '../Departments/Product.css'
import { UpdateUserCart } from '../../Services/UserProductService'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 280,
    objectFit: 'fill',
  }
});

export default function ProductInCart(props) {
  const classes = useStyles();
  const [isCart, setCart] = useState(1)

  //THIS FUNCTION REFRESH THE CART OR WHISH LIST BY THE  PARAMETER OF categoryId=1 OR categoryId=2
  useEffect(() => {
    props.isCart ? setCart(1) : setCart(2) 
  }, [props.isCart])

//THIS FUNCTION UPDETE USER CART AND WHISH LIST  AND TAKE THE USER ID FROM TNE LOCAL SRORAGE AT userId
  const UpdateCart = (countAdd, categoryId) => {
    UpdateUserCart(localStorage.getItem("userId"), props.product.productId, categoryId, countAdd)
      .then(props.setReload)
  }

  return (
    //THE BODY OF THE PRODUCT IN CART AND FAVORITE
    <div className="card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.product.image}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {props.product.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              Price: {props.product.price}
              <br />
              Count:{props.product.productCount}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
              Catalog Number:{props.product.proId}
            </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
          <Button onClick={() => { UpdateCart(1, isCart) }}>
            <AddIcon style={{ fill: 'rgb(4, 24, 63)' }} />
          </Button>
          <Button onClick={() => { UpdateCart(-1, isCart) }}>
            <RemoveIcon style={{ fill: 'rgb(4, 24, 63)' }} />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}



