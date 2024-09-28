const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())
const helloRoutes = require('./routes/hello.route')
const userRoutes = require('./routes/user.route')
app.use('/api/v1/', helloRoutes)
app.use('/api/v1/user', userRoutes)

// username, email, password, 
// user registration --> username, email, password (user)
// user details --> bio, name, age, gender, phoneNum, enrollmentNum, 
//department, batch, semester, school (school name, percentage marks, city), 
//city, country, hobby, achievements, profilePic  (userdetails)
// 
app.listen(process.env.PORT, ()=>{
    console.log(`Server started at port ${process.env.PORT}`)
})




// // importing the library
// const express = require('express')

// require('dotenv').config() // automatically reads .env file

// // calling the express method (instiating the lib)
// const app = express()

// const helloRoutes = require('./routes/hello.route')
// app.use('/api/v1/',helloRoutes)

// const userRoutes = require

// const person = [
//     {
//         Id: 1,
//         name: "Radhika",
//         email: "radhikaabc@gmail.com"
//     },
//     {
//         Id: 2,
//         name: "deepanshu",
//         email: "deepanshubc@gmail.com"
//     },
//     {
//         Id: 3,
//         name: "Rohit",
//         email: "rohitabc@gmail.com"
//     }
// ]

// // CRUD applications - create, read, update and delete
// // GET(read data), POST(create data), PUT(update data), DELETE (data deletion)

// // added in hello.controller.js
// // get method - two parameters -- routing (path) and callback func (actual implementation of code)
// // app.get('/hello',(req,res)=>{
// //     try{
// //     res.send('Hello')
// //     }catch(err){
// //         res.send('something went wrong')
// //     }
// // })

// app.get('/alluser',(req,res)=>{
//     try{
//     res.send(person)
//     }catch(err){
//         res.send('something went wrong')
//     }
// })

// // app.get('/alluser/:name',(req,res)=>{
// //     try{
// //     let name = req.params.name
// //     res.send(name)
// //     }catch(err){
// //         res.send('something went wrong')
// //     }
// // })

// app.get('/alluser/:name', (req, res) => {
//     try {
//         const name = req.params.name.toLowerCase(); 
//         const user = person.find(p => p.name.toLowerCase() === name); 
//         if (user) {
//             res.send(user); 
//         } else {
//             res.send({ message: "User doesn't exist" }); 
//         }
//     } catch (err) {
//         res.send('Something went wrong');
//     }
// });

// // username, email, password
// // user registration --> username, email, password
// // user details --> bio, name, age, gender, enrollment no, department, batch, semester, 
// //                  school (school name, percentage marks, city), city, country,
// //                  phone no.

// app.listen(process.env.PORT,()=>{
//     console.log('server started at port 3001')
// })

// // PROJECT STRUCTURE :-
// // mvc - model view control 
// // m = models = database structure , c = controller = connecting with model, v = views connect with c
// // also secure as view is making no direct contact with database
// // route = routing based folder calls controller
// // utils = utility folder = functions that we might use thru out 
// // index.js is the starting file