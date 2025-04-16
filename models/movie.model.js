import { model, Schema } from "mongoose";

// Write the Schema

const schema = new Schema({
    title:String,
    desc:String
})

// Create your model
// A Model is a wrapper around the schema that gives you access to MongoDB methods like .find(), .create(), .updateOne(), etc.
const Movie = model("Movie",schema)

export default Movie;