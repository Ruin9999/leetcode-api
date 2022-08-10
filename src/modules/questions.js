const { get } = require("./leetcode");

module.exports = {
    async getQuestions({difficulty, start, end}) {
        if(parseInt(end) < parseInt(start)) throw {message :"Range cannot be negative."}

        let limit = end - start;
        let categorySlug = "";
        let skip = start;
        let filters = {};

        if(difficulty != undefined) filters.difficulty = difficulty.toUpperCase();

        const options = {
            query : `query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
                problemsetQuestionList: questionList(categorySlug: $categorySlug, limit: $limit, skip: $skip, filters: $filters) {
                    total: totalNum
                    questions: data {
                        acRate
                        difficulty
                        freqBar
                        frontendQuestionId: questionFrontendId
                        isFavor
                        paidOnly: isPaidOnly
                        status
                        title
                        titleSlug
                        topicTags {
                            name
                            id
                            slug
                        }
                        hasSolution
                        hasVideoSolution
                    }
                }
            }`,
            variables : { categorySlug, limit, skip, filters }
        }

        try {
            return await get(options);
        } catch(err) {
            throw err;
        }
    }
}