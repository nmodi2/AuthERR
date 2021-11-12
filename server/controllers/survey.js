  /*  
    File Name: survey.js
    Group 2: 2BeOrNot2Be
    
     */

let express = require('express');
let router = express.router;
let mongoose = require('mongoose');

let  jwt = require('jsonwebtoken');

// create a reference to the db model
let Survey = require('../models/survey');

module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
            return console.error(err);    
        }
        else
        {
        res.render('survey/list', 
        {title: 'Surveys', 
        surveyList: surveyList, 
        displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', 
    {title: 'Add Survey',
    displayName: req.user ? req.user.displayName : ''})
}

module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "q1": req.body.q1,
        "q2": req.body.q2,
        "q3": req.body.q3
    });

    Survey.create(newSurvey, (err, Survey) => {
        if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                res.redirect('/survey-list');
            }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/edit', 
            {title: 'Edit Survey', 
            survey: surveyToEdit,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = Survey({
        "_id" : id,
        "name": req.body.name,
        "q1": req.body.q1,
        "q2": req.body.q2,
        "q3": req.body.q3
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.render(err);
        }
        else
        {
            //refresh the survey-list
            res.redirect('/survey-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.render(err);
        }
        else
        {
            //refresh the survey-list
            res.redirect('/survey-list');
        }
    });
}

module.exports.displayViewPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToView) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the view page
            res.render('survey/view', 
            {title: 'Survey', 
            survey: surveyToView,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.processViewPage = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = Survey({
        "_id" : id,
        "name": req.body.name,
        "q1": req.body.q1,
        "q2": req.body.q2,
        "q3": req.body.q3
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.render(err);
        }
        else
        {
            //refresh the survey-list
            res.redirect('/survey-list');
        }
    });
}