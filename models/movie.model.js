import { model, Schema } from "mongoose";

// Write the Schema
// Requirement of the title other wise it will not update in database
const schema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    }
})

// Create your model
// A Model is a wrapper around the schema that gives you access to MongoDB methods like .find(), .create(), .updateOne(), etc.
const Movie = model("Movie",schema)

export default Movie;