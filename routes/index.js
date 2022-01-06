var express = require('express');
var router = express.Router();
const dateFormat = require("date-fns/format");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages, dateFormat: dateFormat });
});

/* GET new form page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini Message Board', messages: messages });
});

/* POST new form page. */
router.post('/new', function (req, res) {
  messages.push({
    text: req.body.messageText, 
    user: req.body.name, 
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
