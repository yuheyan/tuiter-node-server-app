import express from 'express'
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
TuitsController(app);
app.listen(process.env.PORT || 4000);

import mongoose from "mongoose";
console.log(process.env.DB_CONNECTION_STRING);
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter';
// const  CONNECTION_STRING= 'mongodb+srv://yuheyan:YYH9695@cluster0.enqiatw.mongodb.net/?retryWrites=true&w=majority'
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);