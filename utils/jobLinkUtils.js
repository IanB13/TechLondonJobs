const mongodb = require("./mongodb");

const mongodbFunction = require('./mongodb');
const updateDB = require('../services/updateDB');

const TEST  = async () =>{
    const test = await updateDB();
    await mongodbFunction.updateJobLinks(test);

}
module.exports = {TEST}