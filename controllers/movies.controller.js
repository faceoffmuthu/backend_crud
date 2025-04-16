import Movie from "../models/movie.model.js";

export const MovieIndex = (req, res) => {
    res.send('Get all the movies')

}

export const MovieCreate = async(req, res) => {
    // id, title,desc
    //    create the movie info
    // console.log(req.body);
    // return res.json(req.body)

    //    validate your data.
    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    })

    try {
        const movie = await newMovie.save()
        return res.status(201).json(movie)
    } catch (error) {
        return res.status(400).json({message:error.message})
        
    }


}

export const MovieUpadte = (req, res) => {
    res.send('Update movies')

}

export const MovieDelete = (req, res) => {
    res.send('Delete movies')

}