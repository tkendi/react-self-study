const express = require("express");
const router = express.Router();
const v = require("voca");

const request = require("request");
const cheerio = require("cheerio");

const regex = /[^0-9]/g;

router.get("/", function(req, res, body) {
  const url =
    "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=";

  request(url, function(error, response, body) {
    $ = cheerio.load(body);
    $colArr = $(".maparea ul");
    $colArr2 = $colArr.children().eq(1);
    $colArr3 = $colArr.children().eq(2);
    $ColArr4 = $colArr.children().eq(3);
    $ColArr5 = $colArr.children().eq(4);
    $ColArr6 = $colArr.children().eq(5);
    $ColArr7 = $colArr.children().eq(6);
    $ColArr8 = $colArr.children().eq(7);
    $ColArr9 = $colArr.children().eq(8);

    $TextArr = $(".timetable p.info");

    //console.log($colArr.html());
    //console.log($colArr.html());
    //console.log($colArr2.html());

    let $num1 = $colArr2.children().eq(0);
    let $num2 = $num1.children().eq(1);

    let $num3 = $num2.children().eq(0);
    let $num4 = $num2.children().eq(2);

    let $num5 = $colArr3.children().eq(0);
    let $num6 = $num5.children().eq(1);

    let $num7 = $num6.children().eq(0);
    let $num8 = $num6.children().eq(2);

    let $num9 = $ColArr4.children().eq(0);
    let $num10 = $num9.children().eq(1);

    let $num11 = $num10.children().eq(0);
    let $num12 = $num10.children().eq(2);

    let $num13 = $ColArr5.children().eq(0);
    let $num14 = $num13.children().eq(1);

    let $num15 = $num14.children().eq(0);
    let $num16 = $num14.children().eq(2);

    let $num17 = $ColArr6.children().eq(0);
    let $num18 = $num17.children().eq(1);

    let $num19 = $num18.children().eq(0);
    let $num20 = $num18.children().eq(2);

    let $num21 = $ColArr7.children().eq(0);
    let $num22 = $num21.children().eq(1);

    let $num23 = $num22.children().eq(0);
    let $num24 = $num22.children().eq(2);

    let $num25 = $ColArr8.children().eq(0);
    let $num26 = $num25.children().eq(1);

    let $num27 = $num26.children().eq(0);
    let $num28 = $num26.children().eq(2);

    let $num29 = $ColArr9.children().eq(0);
    let $num30 = $num29.children().eq(1);

    let $num31 = $num30.children().eq(0);
    let $num32 = $num30.children().eq(2);

    //console.log($num1.html());
    //console.log($num2.html());

    let $Seoul = $num3.text();
    $Seoul = v.replaceAll($Seoul, "\t", "");
    $Seoul = v.replaceAll($Seoul, "\r\n", "");
    $Seoul = v.trim($Seoul);
    $Seoul_num = $Seoul.replace(regex, "");

    let $Seoul_Dead = $num4.text();
    $Seoul_Dead = v.replaceAll($Seoul_Dead, "\t", "");
    $Seoul_Dead = v.replaceAll($Seoul_Dead, "\r\n", "");
    $Seoul_Dead = v.trim($Seoul_Dead);
    $Seoul_Dead_num = $Seoul_Dead.replace(regex, "");

    let $Busan = $num7.text();
    $Busan = v.replaceAll($Busan, "\t", "");
    $Busan = v.replaceAll($Busan, "\r\n", "");
    $Busan = v.trim($Busan);
    $Busan_num = $Busan.replace(regex, "");

    let $Busan_Dead = $num8.text();
    $Busan_Dead = v.replaceAll($Busan_Dead, "\t", "");
    $Busan_Dead = v.replaceAll($Busan_Dead, "\r\n", "");
    $Busan_Dead = v.trim($Busan_Dead);
    $Busan_Dead_num = $Busan_Dead.replace(regex, "");

    let $Daegu = $num11.text();
    $Daegu = v.replaceAll($Daegu, "\t", "");
    $Daegu = v.replaceAll($Daegu, "\r\n", "");
    $Daegu = v.trim($Daegu);
    $Daegu_num = $Daegu.replace(regex, "");

    let $Daegu_Dead = $num12.text();
    $Daegu_Dead = v.replaceAll($Daegu_Dead, "\t", "");
    $Daegu_Dead = v.replaceAll($Daegu_Dead, "\r\n", "");
    $Daegu_Dead = v.trim($Daegu_Dead);
    $Daegu_Dead_num = $Daegu_Dead.replace(regex, "");

    let $Incheon = $num15.text();
    $Incheon = v.replaceAll($Incheon, "\t", "");
    $Incheon = v.replaceAll($Incheon, "\r\n", "");
    $Incheon = v.trim($Incheon);
    $Incheon_num = $Incheon.replace(regex, "");

    let $Incheon_Dead = $num16.text();
    $Incheon_Dead = v.replaceAll($Incheon_Dead, "\t", "");
    $Incheon_Dead = v.replaceAll($Incheon_Dead, "\r\n", "");
    $Incheon_Dead = v.trim($Incheon_Dead);
    $Incheon_Dead_num = $Incheon_Dead.replace(regex, "");

    let $Gwangju = $num19.text();
    $Gwangju = v.replaceAll($Gwangju, "\t", "");
    $Gwangju = v.replaceAll($Gwangju, "\r\n", "");
    $Gwangju = v.trim($Gwangju);
    $Gwangju_num = $Gwangju.replace(regex, "");

    let $Gwangju_Dead = $num20.text();
    $Gwangju_Dead = v.replaceAll($Gwangju_Dead, "\t", "");
    $Gwangju_Dead = v.replaceAll($Gwangju_Dead, "\r\n", "");
    $Gwangju_Dead = v.trim($Gwangju_Dead);
    $Gwangju_Dead_num = $Gwangju_Dead.replace(regex, "");

    let $Daejeon = $num23.text();
    $Daejeon = v.replaceAll($Daejeon, "\t", "");
    $Daejeon = v.replaceAll($Daejeon, "\r\n", "");
    $Daejeon = v.trim($Daejeon);
    $Daejeon_num = $Daejeon.replace(regex, "");

    let $Daejeon_Dead = $num24.text();
    $Daejeon_Dead = v.replaceAll($Daejeon_Dead, "\t", "");
    $Daejeon_Dead = v.replaceAll($Daejeon_Dead, "\r\n", "");
    $Daejeon_Dead = v.trim($Daejeon_Dead);
    $Daejeon_Dead_num = $Daejeon_Dead.replace(regex, "");

    let $Ulsan = $num27.text();
    $Ulsan = v.replaceAll($Ulsan, "\t", "");
    $Ulsan = v.replaceAll($Ulsan, "\r\n", "");
    $Ulsan = v.trim($Ulsan);
    $Ulsan_num = $Ulsan.replace(regex, "");

    let $Ulsan_Dead = $num28.text();
    $Ulsan_Dead = v.replaceAll($Ulsan_Dead, "\t", "");
    $Ulsan_Dead = v.replaceAll($Ulsan_Dead, "\r\n", "");
    $Ulsan_Dead = v.trim($Ulsan_Dead);
    $Ulsan_Dead_num = $Ulsan_Dead.replace(regex, "");

    let $Sejong = $num31.text();
    $Sejong = v.replaceAll($Sejong, "\t", "");
    $Sejong = v.replaceAll($Sejong, "\r\n", "");
    $Sejong = v.trim($Sejong);
    $Sejong_num = $Sejong.replace(regex, "");

    let $Sejong_Dead = $num32.text();
    $Sejong_Dead = v.replaceAll($Sejong_Dead, "\t", "");
    $Sejong_Dead = v.replaceAll($Sejong_Dead, "\r\n", "");
    $Sejong_Dead = v.trim($Sejong);
    $Sejong_Dead_num = $Sejong_Dead.replace(regex, "");

    let $Standard_Time = $TextArr.text();
    $Standard_Time = v.replaceAll($Standard_Time, "\t", "");
    $Standard_Time = v.replaceAll($Standard_Time, "\r\n", "");
    $Standard_Time = v.trim($Standard_Time);

    // console.log($Standard_Time);
    // console.log($Seoul_num);
    // console.log($Seoul_Dead_num);
    // console.log($Busan_num);
    // console.log($Busan_Dead_num);
    // console.log($Daegu_num);
    // console.log($Daegu_Dead_num);
    // console.log($Incheon_num);
    // console.log($Incheon_Dead_num);
    // console.log($Gwangju_num);
    // console.log($Gwangju_Dead_num);
    // console.log($Daegu_Dead_num);
    // console.log($Daejeon_Dead_num);
    // console.log($Ulsan_num);
    // console.log($Ulsan_Dead_num);
    // console.log($Sejong_num);
    // console.log($Sejong_Dead_num);

    // console.log($Seoul);
    // console.log($Seoul_Dead);
    // console.log($Seoul_num);
    // console.log($Seoul_Dead_num);

    res.json([
      {
        Standard_Time: $Standard_Time,
        Seoul_num: $Seoul_num,
        Seoul_Dead_num: $Seoul_Dead_num,
        Busan_num: $Busan_num,
        Busan_Dead_num: $Busan_Dead_num,
        Daegu_num: $Daegu_num,
        Daegu_Dead_num: $Daegu_Dead_num,
        Incheon_num: $Incheon_num,
        Incheon_Dead_num: $Incheon_Dead_num,
        Gwangju_num: $Gwangju_num,
        Gwangju_Dead_num: $Gwangju_Dead_num,
        Daejeon_num: $Daejeon_num,
        Daejeon_Dead_num: $Daejeon_Dead_num,
        Ulsan_num: $Ulsan_num,
        Ulsan_Dead_num: $Ulsan_Dead_num,
        Sejong_num: $Sejong_num,
        Sejong_Dead_num: $Sejong_Dead_num
      }
    ]);
  });
});

module.exports = router;
