const router = require("express").Router();
const uploadAuth = require("../middleware/uploadAuth");
const Email = require("../models/EmailModel");


router.post("/", async (req,res) => {
    try{

        const obj = new Email ({
            email : req.body.email,
        });

        const savedEmail = await obj.save();
        
        res.json(savedEmail);

    } catch(err){
        res.status(500).json({error: err.nessage})
    }
});

router.get("/", uploadAuth, async (req,res) => {
    try{
    const emails = await Email.find();
    res.json(emails);
} catch(err){
    res.status(500).json({error: err.nessage})
}


});

module.exports = router; 