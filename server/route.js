const planetController = require('../database-mongo/planetController');

module.exports = (app) => {
   
    //retrive all planets from the data base
   

    app.get("/planets",  planetController.read);

    
    //retrieve specific planet using id to recognize it 
     

    app.get("/:id/planet", planetController.getPlanetById);


    
    // creates new planet for me following my schema order  
    
    app.post("/create", planetController.create);

    
     //updates certain property on a specific document

    app.patch("/:id/update", planetController.update);

     
    //deletes certain or many planets 
    
    
    app.delete("/delete", planetController.delete);
}



