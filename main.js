import express from "express"
import moviesRoutes from "./routes/movies.route.js "
import connectDB from "./lib/db.js";

// connect DB should import the connectDB
connectDB()

const app = express()

const PORT = 6969;

// in get function that returns req , res
app.get('/', (req, res) => {
    res.json({ msg: "Na tha da Leo Das" })

})

// CRUD functionality of movies
// CLIENT -> MIDDLEWARE -> SERVER
app.use('/movies',moviesRoutes)



app.listen(PORT, () => {
    console.log(`This server is running at http://localhost:${PORT}`);


})