const express = require("express");
const router = express.Router();

const { getQuestions } = require("../modules/questions");

//Get first 100 questions
router.get("/", async (req, res) => {
    try {
        const data = await getQuestions({});

        res.send({
            message: "First 100 questions found.",
            data: data.data.data.problemsetQuestionList,
        })

    } catch(err) {
        console.log(err.message);
        res.status(400).send({
            message: err.message,
            data: [],
        })
    }
})

//Get questions based on range
router.get("/:start([0-9]+)-:end([0-9]+)", async (req, res) => {
    try {
        const data = await getQuestions({
            start: req.params.start,
            end: req.params.end,
        })

        res.send({
            message: `${req.params.end - req.params.start} questions found.`,
            data: data.data.data.problemsetQuestionList,
        });

    } catch(err) {
        console.log(err.message);
        res.status(400).send({
            message: err.message,
            data: [],
        })
    }
})

//Get questions based on difficulty
router.get("/:difficulty", async (req,res) => {
    try {
        const data = await getQuestions({
            difficulty : req.params.difficulty,
        });
        
        res.send({
            message: `100 ${req.params.difficulty} questions found.`,
            data: data.data.data.problemsetQuestionList,
        })

    } catch (err) {
        console.log(err.message);
        res.status(400).send({
            message: err.message,
            data: [],
        })
    }
})

//Get questions based on difficulty and range
router.get("/:difficulty/:start([0-9]+)-:end([0-9]+)", async (req, res) => {
    try {
        const data = await getQuestions({
            difficulty: req.params.difficulty,
            start: req.params.start,
            end: req.params.end,
        })

        res.send({
            message : `${req.params.end - req.params.start} ${req.params.difficulty} questions found.`,
            data: data.data.data.problemsetQuestionList,
        })
    } catch(err) {
        console.log(err.message);
        res.status(400).send({
            message: err.message,
            data: [],
        })
    }
})

module.exports = router;