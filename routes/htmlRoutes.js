const path = require('path');

//ROUTING HTMLS
module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //defaults to home if no matching route exists
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

}