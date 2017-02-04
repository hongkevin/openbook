var express = require('express');
var router = express.Router();

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

  var image_url = "http://cfile28.uf.tistory.com/image/2574F033569762CF2882E1";
  var array = [];
  for (var i = 0; i < 10; i++) {
    array.push(image_url);
  }

  var fakeData = {
    "shop_id" : 1,
    "shop_name" : "로컬리 커피",
    "address" : "서울시 강남구 34-2",
    "phone" : "010-3043-1714",
    "open_time" : "09:00:00",
    "close_time" : "21:00:00",
    "images" : array
    // 예약 현황 이런 정보도 알아야하지 않을까? - 초록, 노랑, 빨강 과 같이 시각화로 정보 제공
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
  var user_id = req.body.user_id;
  var shop_name = req.body.shop_name;
  var address = req.body.address;
  var phone = req.body.phone;
  var open_time = req.body.open_time;
  var close_time = req.body.close_time;
  // var images
  // var book_price - 노쇼를 방지하기 위한 금액(혹은 최소 이용금액)

  res.json({
    "success" : 1,
    "message" : "예약이 정상적으로 등록되었습니다.",
    "result" : {
      message: "상점이 정상적으로 등록되었습니다"
    }
  })
});

module.exports = router;
