const API_URL="http://localhost:8080"


//GET THE PRODUCTS FROM THE DB_JSON BY THE categoryId SO THE categoryId IS THE NAME OF DEPARTMENT

export function GetProductList(categoryId){
   return fetch(`${API_URL}/Products?categoryId=${categoryId}`)
    .then((res)=>res.json());
}

