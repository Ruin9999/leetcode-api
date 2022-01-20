const axios = require("axios").default;

module.exports = {
    /**
     * Function to fetch data from leetcode
     * @param {Object} query Object with data that we want to use to query
     */
    async get(query) {

        const options = {
            //Method is post because we are requesting from graphql
            method: "POST",
            url: "https://leetcode.com/graphql",
            data: query
        }

        //Query for data
        return await axios.request(options);
    },
}