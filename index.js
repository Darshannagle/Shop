const express = require('express')

const app = express()
const port = 1200
const cors = require('cors')
const route_CartItem = require('./routes/route_CartItem')
const route_User = require('./routes/route_User')
const route_Category = require('./routes/route_Category')
const route_SubCategory = require('./routes/route_SubCategory')
const route_Order = require('./routes/route_Order')
const route_Product = require('./routes/route_Product')
const sequlize = require('./config/connection')
const route_OTP = require('./routes/route_OTP')
const route_Admin = require('./routes/route_Admin')

// sequlize.sync({ force: true }).then(() => console.log("done")).catch((e) => { console.error(e); })
app.get('/', (req, res) => res.send('Hello World!'))
console.log(__dirname);
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use('/otp',route_OTP)
app.use('/user', route_User)
app.use('/admin',route_Admin)
app.use('/order', route_Order)
app.use('/cart', route_CartItem)
app.use('/product', route_Product)
app.use('/category', route_Category)
app.use('/subcategory', route_SubCategory)
app.get('/',(req,res)=> res.send("home"))
app.use((err,req,res,next)=>{
    console.log(err.stack);
})
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))