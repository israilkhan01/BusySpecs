import { Application, Router } from "express";
const app = require("express");
const router: Router = app.Router();

// app.post('/profile', passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//         res.send(req.user.profile);
//     }
// );

module.exports =  router;
