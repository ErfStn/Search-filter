const getBtn = document.querySelector(".get")
const postBtn = document.querySelector(".post")

function getData() {
    // fetch("https://jsonplaceholder.typicode.com/users/", { method: "GET" })
    //     .then((response) => {
    //     return response.json()
    //     }).then((data) => {
    //     console.log(data);
   // })
    axios.get("https://jsonplaceholder.typicode.com/users/")
        .then((response) => {console.log(response.data);})
}
function postData() {
    const userData = {
        id: 10,
        name: 'Erfan Soltani',
        username: 'ErfStn',
        phone: "98-938-125-7830",
        email:"erfstn@gmail.com"
    }
//     fetch("https://jsonplaceholder.typicode.com/users/", {
//         method: "POST",
//         body: JSON.stringify(userData),
//         headers: { "content-Type": "application/json" }
//     })
//     .then((response) => {
//     return response.json()
//     }).then((data) => {
//     console.log(data);
// })
    axios.delete("https://jsonplaceholder.typicode.com/users/9")
    .then((res)=>console.log(res.data))
}

getBtn.addEventListener('click',getData)
postBtn.addEventListener('click',postData)