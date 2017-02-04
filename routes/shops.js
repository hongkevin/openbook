var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 예약상점 리스트
router.get('/', function(req, res, next) {
  var array = [];
  var fakeData = {
    "shop_id" : 1,
    "shop_name" : "로컬리 커피",
    "address" : "서울시 강남구 34-2",
    "image_url" : "http://cfile28.uf.tistory.com/image/2574F033569762CF2882E1"
  };

  for (var i = 0; i < 10; i++) {
    array.push(fakeData);
  };

  res.json({
    "success" : 1,
    "message" : "예약가능한 상점 목록입니다.",
    "result" : {
      shops : array
    }
  });
});

// 예약상점 디테일
router.get('/:shop_id', function(req, res, next) {
  var shop_id = req.params.shop_id;
  var fakeData = {
    "shop_id" : 1,
    "shop_name" : "로컬리 커피",
    "address" : "서울시 강남구 34-2",
    "image_url" : "http://cfile28.uf.tistory.com/image/2574F033569762CF2882E1"
  };

  res.json({
    "success" : 1,
    "message" : "예약상세입니다.",
    "result" : {
      shop : fakeData
    }
  });
});

// 예약상점 등록
router.post('/', function(req, res, next) {
  var shop_name = req.body.shop_name;
  var address = req.body.address;

  res.json({
    "success" : 1,
    "message" : "예약이 정상적으로 등록되었습니다.",
    "result" : {
      message: "상점이 정상적으로 등록되었습니다"
    }
  })
});

module.exports = router;
