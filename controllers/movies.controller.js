export const MovieIndex = (req, res) => {
    res.send('Get all the movies')

}

export const MovieCreate = (req, res) => {
    // id, title,desc
    //    create the movie info
    console.log(req.body);

   return res.json(req.body)
    

}

export const MovieUpadte = (req, res) => {
    res.send('Update movies')

}

export const MovieDelete = (req, res) => {
    res.send('Delete movies')

}