var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IBM',content:"Welcome to my portfolio website! \n Mission Statement \n I am a Software Engineering Technician student at Centennial College, and my mission is to showcase my skills and growth in software engineering. Through this portfolio, I aim to demonstrate my ability to develop innovative and efficient software solutions. Join me on this exciting journey as we explore the world of software engineering together." });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',content:"Welcome to my portfolio website! \n Mission Statement \n I am a Software Engineering Technician student at Centennial College, and my mission is to showcase my skills and growth in software engineering. Through this portfolio, I aim to demonstrate my ability to develop innovative and efficient software solutions. Join me on this exciting journey as we explore the world of software engineering together." });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', content:" My name is Gwenn dela Victoria. ",imgSrc: "profilepix.jpg", resume:"resume_2022_gdv.pdf" });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', content: " Email: victoriagwenn@gmail.com, Phone: 416-1234-5678 " });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project', content: "List of simple projects",imgSrc:"realestateProject.png", estate: "https://gwennybird28.github.io/comp213finalproject/"});
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service', content:"Objectives:" });
});

module.exports = router;
