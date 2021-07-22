import { v4 as uuid } from "uuid"

const API_URL = "http://localhost:8080"
const API_HEADERS = {
    "content-Type": "application/json ",
    Accept: "application/json ",
};

//GET USER PRODUCTS BY ID
export function GetProductsById(userProducts) {
    return fetch(`${API_URL}/Products?${userProducts.map(p => "_id=" + p.productId).join("&")}`)
        .then((res) => res.json())
        .then((products) => products.map(p =>
        ({
            ...p,
            ...userProducts.find(u => u.productId === p._id)
        })
        ));
}

//GET ALL USER CART BY  GetProductsById FUNCTION 
export function GetUserProductCart(userId, categoryId) {
    return fetch(`${API_URL}/UserProducts?userId=${userId}&categoryId=${categoryId}`)
        .then((res) => res.json())
        .then((up) => {
            if (!up.length) return [];
            return GetProductsById(up)
        })
}

//GET SPCIFIC USER PRODUCT BY userId,productId,categoryId
export function GetUserProduct(userId, productId, categoryId) {
    return fetch(`${API_URL}/UserProducts?userId=${userId}&productId=${productId}&categoryId=${categoryId}`)
        .then((res) => res.json())
        .then((up) => {
            return up ? up[0] : null
        })
}

//CREAT USER PRODUCT BY  "POST" METHOD
export function CreateUserProduct(UserProducts) {
    return fetch(`${API_URL}/UserProducts`,
        {
            headers: API_HEADERS,
            method: "POST",
            body: JSON.stringify(UserProducts)

        })
        .then((res) => res.json())
}

//DELETE USER PRODUCT BY PRODUCT ID BY  "DELETE" METHOD
export function DeleteUserProduct(id) {
    return fetch(`${API_URL}/UserProducts/${id}`,
        {
            headers: API_HEADERS,
            method: "DELETE",
        })
        .then((res) => {
             return res.json()})
}

//UPDATE USER PRODUCT BY PRODUCT ID BY  "PUT" METHOD
export function UpdateUserProduct(UserProducts) {
    return fetch(`${API_URL}/UserProducts/${UserProducts.id}`,
        {
            headers: API_HEADERS,
            method: "PUT",
            body: JSON.stringify(UserProducts)

        })
        .then((res) => res.json())
}

//UPDATE USER CART BY THE DeleteUserProduct,UpdateUserProduct,CreateUserProduct FUNCTIONS
export function UpdateUserCart(userId, productId, categoryId, countAdd) {
    return GetUserProduct(userId, productId, categoryId).then(res => {
        //IF THE PRODUCT ALREADY EXIST
        if (res) {
            //IF PRODUCT COUNT <=0
            if (res.productCount + countAdd <= 0) {
                DeleteUserProduct(res._id)
            }
            //IF PRODUCT COUNT >0
            else {
                UpdateUserProduct({ id: res._id, userId: res.userId, productId, categoryId, productCount: res.productCount + countAdd })
            }
        }
        //IF THE PRODUCT IS NOT EXIST
        else {
            if (countAdd > 0) {
                CreateUserProduct({ id: uuid(), userId, productId, categoryId, productCount: 1 })
            }

        }
    })
}

//DELETE ALL CART
export function DeleteCart(userId,categoryId) {
    return GetUserProductCart(userId, categoryId).then(async (up) => {
         if(!up.length) return {}
         for (let i = 0; i < up.length; i++) {
             const p = up[i];
             await DeleteUserProduct(p._id)
         }
         return {}
    })
}

