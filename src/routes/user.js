const express = require("express");
const router = express.Router();

const { get } = require("../modules/leetcode.js");

//Create routes
router.get("/:username", async (req, res) => {
    const username = req.params.username;
    
    //Get only the data part that we want
    let data = await GetUserData(username);
    data = data.data;
    if(!data) res.send("No Data");
    else res.send(data);
});

async function GetUserData(username) {
  console.log(username);
  const options = {
      query : `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
              username
              profile {
                  aboutMe
                  ranking
                  starRating
                  userAvatar
              }
              submitStats: submitStatsGlobal {
                  acSubmissionNum {
                      difficulty
                      count
                      submissions
                      }
                  }
              }
          }
      `,
      variables : {username}
    }
    
    return await get(options);
}

module.exports = router;