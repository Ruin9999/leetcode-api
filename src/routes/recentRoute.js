const express = require("express");
const router = express.Router();

const { getRecentSubmissions, getRecentTopics } = require("../modules/recent");

//Get Recent submissions and topics
router.get("/", async (req, res) => {
    try {
        const submissions = await getRecentSubmissions(res.locals.username);
        const topics = await getRecentTopics(res.locals.username);

        //Check if user exists
        if(submissions.data.errors) {
            res.status(404).send({
                message: data.data.errors[0].message,
                data: [],
            })
        } else {
            res.send({
                message: "Recent submissions and topics found.",
                data: {
                    topics: topics.data.data.userRecentTopics,
                    submissions: submissions.data.data.recentSubmissionList,
                }
            });
        }

    } catch(err) {
        console.log(err);
        res.status(400).send({
            message: err.message,
            data: [],
        })
    }
})

//Get recent 20 submissions
router.get("/submissions", async (req, res) => {
    try {
        const data = await getRecentSubmissions(res.locals.username);
        
         //Check if user exists
        if(data.data.errors) {
            res.status(404).send({
                message: data.data.errors[0].message,
                data: [],
            })
        } else {
            res.send({
                message: "Recent submissions found.",
                data: data.data.data.recentSubmissionList,
            });
        }

    } catch(err) {
        console.log(err);
        res.status(400).send({
            message: err.message,
            data: [],
        })
    }
})

//Get recent topics
router.get("/topics", async (req, res) => {
    try {
        const data = await getRecentTopics(res.locals.username);
        
        //Check if user exists
        if(data.data.errors) {
            res.status(404).send({
                message: data.data.errors[0].message,
                data: [],
            })
        } else {
            res.send({
                message: "Topics found.",
                data: data.data.data.userRecentTopics,
            })
        }
        
    } catch (err) {
        console.log(err);
        res.status(400).send({
            message: err.message,
            data: [],
        })
    }
})

module.exports = router;
