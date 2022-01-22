const { get } = require("../modules/leetcode");

module.exports = {
     /**
     * Function to get user recent submissions
     * @param {String} username Username that we want to search up
     * @returns Recent submissions object
     */
      async getRecentSubmissions(username) {
        const options = {
            query : `query getRecentSubmissionList($username: String!, $limit: Int) {
                recentSubmissionList(username: $username, limit: $limit) {
                    title
                    titleSlug
                    timestamp
                    statusDisplay
                    lang
                }
            }`,
            variables : {username}
        }
        
        try {
            return await get(options);
        } catch(err) {
            throw err;
        }
    },

    async getRecentTopics(username) {
        const options = {
            query: `query getRecentPosts($username: String! $limit: Int) {
                userRecentTopics(username: $username, limit: $limit) {
                    id
                    title
                    commentCount
                    post {
                        creationDate
                        voteCount
                    }
                }
            }`,
            variables: {username}
        }

        try {
            return await get(options);
        } catch(err) {
            throw err;
        }
    }
}