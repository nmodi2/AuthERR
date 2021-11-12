  /*  
    File Name: survey.js
    Group 2: 2BeOrNot2Be
    
     */

const { support } = require('jquery');
let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    name: String,
    q1: String,
    q2: String, 
    q3: String
},
{
    collection: "survey"
});


module.exports = mongoose.model('Survey', surveyModel);