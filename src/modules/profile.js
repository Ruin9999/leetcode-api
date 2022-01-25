const { get } = require("./leetcode");

module.exports = {

    /**
     * Function to get user profile data
     * @param {String} username Username that we want to search up
     * @returns User profile object
     */
    async getProfile(username) {
        const options = {
            query : `query getUserProfile($username : String!) {
                matchedUser(username: $username) {
                    username
                    socialAccounts
                    githubUrl
                    profile {
                        realName
                        websites
                        countryName
                        skillTags
                        company
                        school
                        starRating
                        aboutMe
                        userAvatar
                        reputation
                        ranking
                    }
                }
            }`,
            variables : {username}
        }

        try {
            return await get(options);
        } catch (err) {
            throw err;
        }
    },
    
    /**
     * Function to get user submissions
     * @param {String} username Username that we want to search up
     * @returns User submissions object
     */
    async getSubmissions(username) {
        const options = {
            query : `query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                    submitStats : submitStatsGlobal {
                        acSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                        totalSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                    }
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

    /**
     * Function to get user badges
     * @param {String} username Username that we want to search up
     * @returns Badges data object
     */
    async getBadges(username) {
        const options = {
            query: `query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                    badges {
                        id
                        displayName
                        icon
                        creationDate
                        medal {
                            slug
                            config {
                                icon
                                iconGif
                                iconGifBackground
                                iconWearing
                            }
                        }
                    }
                }
            }`,
            variables : {username}
        }
        
        try {
            return await get(options);
        } catch (err) {
            throw err;
        }
    }
}