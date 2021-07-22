
const API_URL = "http://localhost:8080"
const API_HEADERS = {
    "content-Type": "application/json ",
    Accept: "application/json ",
};

//GET USER BY EMAIL
export function GetUserByEmail(email) {
    return fetch(`${API_URL}/Users?email=${email}`)
        .then((res) => res.json())
        .then((up) => {
            return up ? up[0] : null
        })
}

// UPDATE USER DETALIES BUY "PUT" METHOD 
export function UpdateUserDetalies(User) {
    return fetch(`${API_URL}/Users/${User.id}`,
        {
            headers: API_HEADERS,
            method: "PUT",
            body: JSON.stringify(User)

        })
        .then((res) => res.json())
}
