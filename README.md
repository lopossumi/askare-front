# askare-front
React front-end solution for a HY-CS project course TKT21010 (work in progress). The backend can be found at [https://github.com/lopossumi/askare-server] and the application is running at [https://askare.herokuapp.com].

Please note that the application is deployed as a demo on two free Heroku dynos (one for front-end, one for the RESTful server); therefore, the app may at times seem laggy as the dynos fall asleep after a relatively short period of inactivity.

## Technologies
Askare is built with MERN stack: (or MMERSRN, if you want more letters included)
* [MongoDB](https://www.mongodb.com/) (wrapped with [mongoose](http://mongoosejs.com/))
* [Express.js](https://expressjs.com/) as the web application framework
* [React.js](https://reactjs.org/) for front-end (with [Semantic UI](https://react.semantic-ui.com))
* [Redux](https://redux.js.org/) for client-side state container
* [Node.js](https://nodejs.org/) for backend

## Features to be implemented before 1.0 release
* Done! *Searching tasks by content*
* Task status and priority
* Sharing tasks between users
* Kanban-style UI option
