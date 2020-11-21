
//exported the planet model object and required it here 
const { Planet } = require('./planetModel');

//i exported the helpers function as an object so i can access it like one
const { handleErrorResponse, handleSuccessResponse } = require('../utils/helpers.js');

exports.read = async (req, res) => {
    try {
        const result = await Planet.find({});
        res.json(handleSuccessResponse(result));
    } catch (error) {
        res.json(error);
    }
};

exports.create = async (req, res) => {
    try {
        const newPlanet = new Planet({...req.body})
        const result = await newPlanet.save();

        res.json(handleSuccessResponse(result));
    } catch (error) {
        res.json(handleErrorResponse(error));
    }
};

/*
* Methods
* @handleErrorResponse 
* @Params: err 
* Desc: ....
*/ 
exports.update = async(req, res) => {
    try {
        const id = req.params.id;
        // const obj = req.body;
        const planetUpdated = await Planet.findByIdAndUpdate(id, {...req.body});
        res.json(handleSuccessResponse(planetUpdated));
    } catch (error) {
        res.json(handleErrorResponse(error));
    }
};

/*
* Methods
* @handleErrorResponse 
* @Params: err 
* Desc: ....
*/ 
exports.delete = async(req, res) => {
    try {
    const deletedPlanet = await Planet.deleteMany(
        {
          _id: {
            $in: req.body.ids
          }
        }
    );

    res.json(handleSuccessResponse(deletedPlanet));

    } catch (error) {
        res.json(handleErrorResponse(error));
    }


};

exports.getPlanetById = async (req, res) => {
    try {
        const id = req.params.id;
        const planet = await Planet.findById(id);
        res.json(handleSuccessResponse(planet));
        
    } catch (error) {
        
    }
};