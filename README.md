
# Leetcode API

An unofficial API for interfacing with [leetcode's](https://leetcode.com) graphql database.

## Why 🤔

While working on other projects, I realized that there weren't many easy options for interacting
with the leetcode's grapql api. So when I needed data, I had to reverse engineer the API to get what I needed.

This project was built to solve that problem.

Built with [ExpressJS](https://expressjs.com/).
## Lessons Learnt 📖

- How to build a Backend/API with [ExpressJS](https://expressjs.com/).
- What REST APIs are.
- What HTTP response status codes are.
- How to design APIs.
- How to better handle errors with asyncronous code.
## Resources used 👓
[ExpressJS Documentation](https://expressjs.com/en/5x/api.html)

[How to request a GraphQL API with Axios](https://hasura.io/blog/how-to-request-a-graphql-api-with-fetch-or-axios/)

[RESTful APIs in 100 Seconds](https://www.youtube.com/watch?v=-MTSQjw5DrM&ab_channel=Fireship)

[Designing Quality APIs (Cloud Next'18)](https://www.youtube.com/watch?v=P0a7PwRNLVU&t=729s)

## API Endpoints 🌐

### Base URL

```https
    https://leetcode-api-1d31.herokuapp.com
```

### User

| Parameter | Type     | Required | Description        | 
| :-------- | :------- | :------- | :----------        |
| `username` | `string`| ✔️       | Username to fetch.|

#### Get profile

```https
  GET /api/user/{username}
```

#### Get submissions

```https
  GET /api/user/{username}/submissions
```

#### Get badges

```https
    GET /api/user/{username}/badges
```

#### Get recent data

```https
    GET /api/user/{username}/recent
```

#### Get recent submissions

```https
    GET /api/user/{username}/recent/submissions
```

#### Get recent topics

```https
    GET /api/user/{username}/recent/topics
```

### Questions

#### Get questions

```https
    GET /api/questions/{start}-{end}
```

| Parameter | Type     | Required | Description                   | 
| :-------- | :------- | :------- | :---------------------------- |
| `start`   | `number` | ❌       | Question to start at. |
| `end`     | `number` | ❌       | Question to stop at.  |

#### Get questions by difficulty

```https
    GET /api/questions/{difficulty}/{start}-{end}
```

| Parameter | Type     | Required | Description                   | 
| :-------- | :------- | :------- | :---------------------------- |
| `difficulty` | `string` | ✔️       | Question difficulty. |
| `start`   | `number` | ❌       | Question to start at. |
| `end`     | `number` | ❌       | Question to stop at.  |

## Roadmap 🛣️

- Add ability to GET question by questionID.
- Caching/Storing data to make API calls quicker.


## Feedback ✉️

If you have any feedback/comments/requests please feel free to open an [issue](https://github.com/Ruin9999/leetcode-api/issues) or contact me at b14ktoss@gmail.com 😊.
