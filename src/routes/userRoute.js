const express = require("express");
const router = express.Router();

const recentRouter = require("./recentRoute");
const { getProfile, getSubmissions, getBadges } = require("../modules/profile");

//Set username variable so that recentRouter can read it
router.use("/:username", function (req, res, next) {
    res.locals.username = req.params.username;
    next();
})

//Get profile data
router.get("/:username", async (req, res) => {
    try {
        const data = await getProfile(req.params.username);

        //Check if user was found
        if(data.data.errors) {
            res.status(404).send({
                message : data.data.errors[0].message,
                data : [],
            })
        } else {
            res.send({
                message: "User was found.",
                data : data.data.data.matchedUser,
            });
        }   

    } catch (err) { //Request invalid
        console.log(err.message);
        res.status(400).send({
            message: err.message,
            data : [],
        });
    }
})

//Get submissons
router.get("/:username/submissions", async (req, res) => {
    try {
        const data = await getSubmissions(req.params.username);
        
        //Check if user exists
        if(data.data.errors) {
            res.status(404).send({
                message : data.data.errors[0].message,
                data : [],
            });
        } else {
           res.send({
               message: "Submissions found.",
               data : data.data.data.matchedUser.submitStats,
           })
        }

    } catch(err) {
        console.log(err.message);
        res.status(400).send({
            message: err.message,
            data : [],
        });
    }
})

//Get Badges
router.get("/:username/badges", async (req, res) => {
    try {
        const data = await getBadges(req.params.username);

        //Check if user exists
        if(data.data.errors) {
            res.status(404).send({
                message: data.data.errors[0].message,
                data: [],
            })
        } else {
            res.send({
                message: "Badges found.",
                data : data.data.data.matchedUser
            });
        }
    } catch(err) {
        console.log(err.message);
        res.status(400).send({
            message: err.message,
            data: [],
        })
    }
})

router.use("/:username/recent", recentRouter);

module.exports = router;