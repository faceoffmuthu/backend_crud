import express from "express"
import { MovieCreate, MovieDelete, MovieDetail, MovieIndex, MovieUpadte } from "../controllers/movies.controller.js"

// Express provides a simple and flexible way to define routes for your application.
//  Routes are used to determine how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.).
const router = express.Router()

// CRUD functionality of movies

// R - For reading movies
router.get('/', MovieIndex)

// Single movie info
router.get("/:id",MovieDetail)

// C- For creating movies
router.post('/',MovieCreate )

// U- For Updating movie
router.put('/:id',MovieUpadte )

// D- For Deleting movies
router.delete('/:id',MovieDelete)

export default router;