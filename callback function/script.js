function getUser(email , pass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            if (pass == 1234) {
                resolve(email)
            }else{    
                reject("email is not valid!")
            }
    },3000)
})
}
function showCourse(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["course 1", "course 2"])
    },2000)
})
}
function coursesDetail(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("course title is react.js")
    },1000)
})
}

// ------------ callback function
// function displayDom(sum) {
//     document.querySelector("body").innerHTML = sum;
// }
// function numbers(num1,num2,callback) {
//     let sum = num1 + num2;
//     callback(sum)
// }
// numbers(5,5,displayDom)

// ----------- promise
getUser("erfans@gmail.com", 1234)
    .then((user) => showCourse(user))
    .then((course) => coursesDetail(course[0]))
    .then((title) => console.log(title))
    .catch((err) => console.log(err));

//---------- async await
async function displayeCoursesDetail() {
    const user = await getUser("erfans@gmail.com", 1234)
    console.log(user);
    const courses = await showCourse(user.email);
    console.log(courses[0]);
    const detail = await coursesDetail(courses)
    console.log(detail);    
}
// displayeCoursesDetail()
