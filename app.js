const express = require("express");
const logger = require("./middleware/logger");


const app = express();

const PORT =5000

app.use(logger)

app.use(express.static(__dirname + "/public"))
//console log(__dirname+ "/public")

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/first_template', function(req,res){
    res.render('first_view');
})
// Démarrer le serveur
app.listen(PORT, (err) => {
    err ? console.log(err)
        : console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
