
const API_URL = "http://localhost:8080"

//GET THE USER BY YOUR EMAIL AND PASSWORD
export default  function GetUser(email,password) {
    return fetch(`${API_URL}/Users?email=${email}&password=${password}`)
    .then((res) =>res.json())
    .then((up) => {
        return up?up[0]:null
    })
} 

//CHECK IF THE CURRENT PASSWORD THAT THE USER ENTERD  IS SWITABLE TO THE USER PASSWORD IN THE DB_JSON
export const checkPassword = (currentPassword, userPassword) => {
    return (currentPassword.toString() === userPassword.toString())
}