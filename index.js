import express from 'express'
import 'dotenv/config'
import connectDB from './config/db.js'
import CustomerRouter from './routers/CustomerRouter.js'
import ProductRouter from './routers/ProductRouter.js'
import UserRouter from './routers/UserRouter.js'

const app = express()
app.use(express.json())
app.use(express.static('public'))



app.use("/product", ProductRouter);
app.use("/customer", CustomerRouter);
app.use("/user", UserRouter);

const host = process.env.HOST
const port = process.env.PORT

app.listen(port, host, ()=>{
    connectDB()
    console.log(`Running http://${host}:${port}`)
})