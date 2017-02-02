# SiriusIQ-Demo
*Demo built for [SiriusIQ Mobile](http://www.siriusiqmobile.com)*
##Link to Demo (In Work) [Demo](http://54.202.62.225)##

## Installation ##

Requirements:
- node.js (nodemon helps)
- npm package manager
- bower package manager
- git

```
Terminal:

$ npm install
$ bower install

// to start

node server.js  // nodemon server.js also fine
```

## To Do: ##
- [ ] Implement actual shopping cart
- [ ] Include Payment service
- [ ] Connect actual User back end to login/signup, add authorization to Routes
- [ ] Re-Do Order Service
- [ ] Re-factor code, improve styling/visual

## Successes and Cool Things: ##
- Implemented CORS middleware to back end
- Implemented JWT-tokens and Server AUTH to User Schema
- Built and deployed in 2 days
- Learned how to resolve dependency version issues (i.e angular 1.6.1 from 1.5.3)

## Lessons Learned: ##
- I'm not convinced MongoDB (or NoSQL in general) is sufficient for an E-commerce app,
I'm sure it could be done but there's definitely limitations.
- Dependency Version: things change, you can inadverdently install a module which requires others
to be updated
- The Openness of Javascript is a doubled edged sword
- Already knew this but the Database/Back end should be pretty robust/the primary concern before the rest is built
