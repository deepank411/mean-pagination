var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Page = mongoose.model('Page');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/fulldata", function(req, res, next){
   Page.find(function(err, wars){
      if(err){
         return next(err);
      }
      res.json(wars);
   });
})

router.get("/fetch", function(req, res, next){
   console.log(req.query.pageNum);
   Page.paginate({}, { page: req.query.pageNum, limit: 10 }, function(error, result) {
      if (error) {
         return next(err);
      } else {
         res.json(result);
      }
   });
});

module.exports = router;
