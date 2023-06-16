var express = require('express');
var router = express.Router();
var db = require('../db/sql.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getbook', function(req, res) {
  db.query('select * from bookmanage',(err,results)=>{
    if(err) return err
    console.log(results);
    res.send({
      data:{
        results
      }
    })
  })
});
router.get('/deletebook', function(req, res) {
  console.log(req.query);
  db.query('delete from bookmanage where id ='+req.query.id+'',(err,results)=>{
    if(err) return err
    console.log(results);
    res.send('删除成功')
  })
});
router.get('/addbook', function(req, res) {
  console.log(req.query);
  db.query('insert into bookmanage (name,author,classification,describess) values ("'+req.query.name+'","'+req.query.author+'","'+req.query.classification+'","'+req.query.describess+'")',(err,results)=>{
    if(err) return err
    console.log(results);
    res.send('添加成功')
  })
});

module.exports = router;
