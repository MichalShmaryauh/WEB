/**
    THIS PAYPAL COMPONENT THAT RESET THE CART ON SUCCESS AND SHOW THE PRICE 
     
 */
import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { DeleteCart } from '../../Services/UserProductService'


export default function Paypal(props) {

    const onSuccess = (payment) => {
        console.log("The payment was succeeded!", payment);
        DeleteCart(props.user, props.categoryId).then(() => { props.setReload() })//REASET THE CART ON SUCCSES


    }

    const onCancel = (data) => {
        console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
        console.log("Error!", err);

    }

    let env = 'sandbox';
    let currency = 'ILS';
    let total = props.totalPrice;//THE PRICE FROM THE PROPS
    const client = {
        sandbox: 'Abv6DSLq39rKb45qYTPsYDzGErdHuwpcUISVD6J5kO52E7m1rSdXtr8a5GDmfMqiRSdfECnPrzXX2Jhv',
        production: 'YOUR-PRODUCTION-APP-ID',
    }
    return (
        <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
    );

}