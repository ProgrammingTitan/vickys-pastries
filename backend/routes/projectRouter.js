const router = require("express").Router();
const uploadAuth = require("../middleware/uploadAuth");
const Project = require("../models/projectModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var fs = require('fs');
var path = require('path');
var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

router.post("/", uploadAuth, async (req,res) => {
    try{
        

        const obj = new Project ({
            title: req.body.title,
            description: req.body.description,
            type: req.body.type,
            ocassion: req.body.ocassion,
            imageData: req.body.imageURL
        });

        


        // Project.create(obj, (err, item) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     // else {
        //     //     // item.save();
        //     //     // res.redirect('/');
        //     // }
        // });

        
        // const savedProject = await newProject.save();
        
        // res.json(savedProject);


        const savedProject = await obj.save();
        
        res.json(savedProject);

    } catch(err){
        res.status(500).json({error: err.nessage})
    }
});

router.get("/", async (req,res) => {
    const projects = await Project.find();
    res.json(projects);


});

module.exports = router; 