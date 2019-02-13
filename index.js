const express = require("express");
const session = require('express-session');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const fs = require('fs');
// const postcss = require('postcss');
// const autoprefixer = require('autoprefixer');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

var routes = require('./app/routes/app.js');

// require('./app/config/passport.js')(passport);

let app = express();

let corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));
app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(session({
//   secret: 'votingApp',
//   resave: true,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

routes(app);

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/tether', express.static('../../node_modules/tether/dist/js'));
app.use('/popper', express.static('../../node_modules/popper.js/dist/umd')); 
app.use('/bootstrap', express.static('../../node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/jquery', express.static('../../node_modules/jquery/dist')); // redirect JS jQuery

// fs.readFile('client/src/sass/main.css', function (err, css) { 
//   if (err) {
//       console.log(err);
//   }
//   postcss([ autoprefixer ]).process(css).then(function (result) {
//       result.warnings().forEach(function (warn) {
//           console.warn(warn.toString());
//       });
//       // console.log(result.css);
//       fs.writeFile("client/public/css/styles.css", result.css, function(err) {
//           if (err) {
//               console.log(err);
//           }
//           console.log("The file was saved!");
//       }); 
//   });
// });

app.listen(process.env.PORT || 3001, function() {
	console.log("Working");
});
