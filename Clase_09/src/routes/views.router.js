import express from 'express'
const router = express.Router()

let food = [
    { name: "Hamburguesa", price: "100" },
    { name: "Banana", price: "40" },
    { name: "Soda", price: "20" },
    { name: "Ensalada", price: "20" },
    { name: "Pizza", price: "20" }
];

router.get("/food", (req, res) => {
    let userData = {
        name: "Jesus",
        last_name: "Gonzalez",
        role: 'admin'
    }


    res.render('index', {
        user: userData,
        isAdmin: userData.role === 'admin',
        style: 'index.css',
        food
    })
})





export default router