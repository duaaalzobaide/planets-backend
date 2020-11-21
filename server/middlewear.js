const bodyParser = require('body-parser');



module.exports = (app, express) => {
    //to serve this client side 
    app.use(express.static(__dirname + '/../react-client/dist'));
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }));
}
