import axios from 'axios'

export default(req, res) => {
    res.setHeader('Content-type', 'application/json');
    const id = req.query.id;
    console.log(`Id: ${id}`);

    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=d416af5d4faee64e25ab001d87aab5c3`)
    .then(results => {
        res.end(JSON.stringify(results.data));
    })
};