/**
 THIS  COMPONENT SHOW THE SHOPPING BAG AND THE WHISH LIST BY THE PROPS THAT IT'S GET 
 THE SHOPPING BAG SHOW ALSO THE TOTAL PRICE TO PAY AND PAYPAL MORE THAN WHISH LIST
 */
import React from 'react'
import { GetUserProductCart, DeleteCart } from '../../Services/UserProductService'
import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import ProductInCart from '../ShoppinBag/ProductInCart'
import '../Departments/Product.css'
import Paypal from '../Paypal/Paypal'
import { Link } from 'react-router-dom'
import './ShoppingBag.css'


export default function ShoppingBag(props) {
    //IT STATE OF PRODUCTS 
    const [products, setProducts] = useState([]);
    //IT STATE THAT REFRESH THE PRODUCATS AT ADD OR REMOVE 
    const [reload, setReload] = useState(false);
    //IT STATE OF TOTAL PRICE TO PAY
    const [totalPrice, setTotalPrice] = useState(0);

    //THIS FUNCTION CALL TO GetUserProductCart ,TotalPriceCalc,setTotalPrice ,setProducts FUNCTIONS  
    useEffect(() => {
        //THIS FUNCTION RETURN THE USER PRODUCT CART BY THE USER AND 
        //categoryId =IF 1 TO SHOPPING BAG AND IF 2 TO WHISH LIST
        GetUserProductCart(props.user, props.categoryId).then(res => {
            //THIS FUNCTION CALCULATE THE TOTAL TO PRICE
            const total = res ? TotalPriceCalc(res) : 0
            //THIS FUNCTION UPDATE THE STATE
            setTotalPrice(total)
            //THIS FUNCTION UPDATE THE STATE
            return res && setProducts(res)

        })
    }, [reload, props.categoryId, props.user])



    //THIS FUNCTION CALCULATE THE TOTAL TO PRICE
    const TotalPriceCalc = (products) => {
        let totalToPrice = 0
        products.map(p =>
            totalToPrice += p.productCount * p.price
        )
        return Number(totalToPrice).toFixed(2)
    }

    return (
        //RETURN THE SHOPPIN BAG OF WHISH LIST  PAGE BY THE PROPS 
        <>
            <div className="ProductName">{props.header}
                {/* //THIS FUNCTION DELETE THE CART OF WHISH LIST OF USER BY THE CATEGORY */}
                <Link className="resetCart" onClick={() => { DeleteCart(props.user, props.categoryId).then(() => { setReload(!reload) }) }} >reset {props.header}</Link>
                {/* //IF IS PAY SHOW THE TOTAL PRICE AND isPay=TRUE IN SHOPPING BAG */}

                {
                    props.isPay && <b><p className="floating totalPrice">Total to pay :  {totalPrice} ₪</p></b>
                }
                {/* //IF IS PAY SHOW THE PAYPAL BOUTTON AND isPay=TRUE IN SHOPPING BAG */}
                <div className="floating">
                    {

                        props.isPay && <Paypal totalPrice={totalPrice} categoryId={props.categoryId} user={props.user} setReload={() => setReload(!reload)} />
                    }
                </div>
            </div>
            {/* //IF NO PRODUCT SHOW THAT CART OR WHISH LIST IS EMPTY */}
            {

                products.length === 0 && <p className="emptyCart"><b> {props.header} is empty</b></p>
            }
            {/* //SHOW THE PRODUCT IN CART OR WHISH LIST */}
            <Grid container-spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="flex-start">
                        {
                            products?.map(p => <ProductInCart key={p._id} product={p} totalPrice={totalPrice} isCart={props.isPay} setReload={() => setReload(!reload)} />)
                        }

                    </Grid>
                </Grid>
            </Grid>
            <div className="Footer" />
        </>
    )
}