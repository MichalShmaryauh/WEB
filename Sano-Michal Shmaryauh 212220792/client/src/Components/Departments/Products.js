/**
    THIS COMPONENT SHOW THE PRODUCTS BY THE DEPARTMENTS THAT PART BY THE CATEGORY_ID PARAMETER
     AND IF THE USER DIDN'T CONECTED THE BOUTTON IS DISABELED 
    ELSE THE USER CAN ADD THE PRODUCTS TO THE CART OR WHISH LIST
 */ 
import React from 'react'
import { Grid } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { GetProductList } from '../../Services/ProductsService'
import Product from './Product'

export default function Products(props) {
//THIS IS STATE OF PRODUCTS  
    const [Products, SetProducts] = useState([]);
//THIS FUNCTION DIVIDE  ALL THE PRODUCTS TO THE DEPARTMENTS
    useEffect(() => {
        GetProductList(props.categoryId).then(res => {
            SetProducts(res)
        })
    }, [props.categoryId])
    return (
        <>
            <h1 className="ProductName">{props.header}</h1>
            <Grid container-spacing={2}>
                <Grid item xs={12}> 
                    <Grid container justify="flex-start">
                        {
                           
                            Products.map(props => <Product key={props._id} product={props}/>)
                        }
 
                    </Grid>
                </Grid>
            </Grid>
            <div className="Footer" />
        </>

    );
}