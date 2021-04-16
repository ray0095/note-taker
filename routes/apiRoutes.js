const noteData = require('../db/db');

//ROUTING
module.exports = (app) => {

    //JSON reponse of Notes array
    app.get('/api/notes', (req, res) => res.json(noteData));

    //Pushes new note submission to noteData array
    app.post('/api/notes', (req, res) => {noteData.push(req.body)} );

    //Clears notes
    app.post('/api/clear', (req,res) => {noteData.length = 0} );

}