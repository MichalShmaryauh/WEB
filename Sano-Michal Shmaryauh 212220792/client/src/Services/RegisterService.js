const API_URL = "http://localhost:8080"
const API_HEADERS={
   "content-Type":"application/json ",
    Accept:"application/json ",
};

//CREATE NEW USER BY "POST" METHOD TO 
export function CreateUser(User) {
    return fetch(`${API_URL}/Users`,
        {   
            headers:API_HEADERS,
            method: "POST",
            body: JSON.stringify(User)

        })
        .then((res) => res.json())
}

//GET ALL USERS
export function GetUsers() {
    return fetch(`${API_URL}/Users`)
        .then((res) =>res.json())
        .then((up) => {
            return up
        })
}
//CHECK IF EMAIL IS ALREADY EXIST 
export const IfEmailExist = (currentEmail) => {
    return GetUsers().then(res => { return res.find(user => {
        return user.email === currentEmail}
        ) }
    ).then(res => res);
    
}




