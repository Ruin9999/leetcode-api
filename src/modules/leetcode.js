const axios = require("axios").default;

module.exports = { get };

/**
 * Function to fetch data from leetcode
 * @param {Object} query Object with data that we want to use to query
 * @returns Request response
 */
async function get(query) {

    const options = {
        //Method is post because we are requesting from graphql
        method: "POST",
        url: "https://leetcode.com/graphql",
        data: query
    }

    //Query for data
    return await axios.request(options);
}