

let path = require("path");
// let express = require("express");
// let router = express.Router();
let Schools = require("../models/Schools");

module.exports = function(app) {

  app.route("/schools").get(function(req, res) {
  	Schools.find({}, function(err, data) {
  		if (err) console.log(err);
  		if(data) {
        res.json(data);
  		} else {
  			console.log("Schools undefined");
  		}
  	});
  });

  app.route("/schools/:school").get((req, res) => {
    Schools.find({
      name: req.params.school
    }, (err, data) => {

      if (err) console.log(err);
      if (data) {
        res.json(data);
      };
    })
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });


};
