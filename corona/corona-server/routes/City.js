const express = require("express");
const router = express.Router();
const v = require("voca");

const request = require("request");
const cheerio = require("cheerio");

const admin = require("firebase-admin");

const db = admin.database();
const ref = db.ref("/");

const regex = /[^0-9]/g;

router.get("/", function(req, res, body) {
  const url =
    "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=";

  request(url, function(error, response, body) {
    $ = cheerio.load(body);
    $colArr = $(".content div div.data_table table.num tbody");
    $colArr2 = $colArr.children().eq(1);      //Seoul
    $colArr3 = $colArr.children().eq(2);      //Busan
    $colArr4 = $colArr.children().eq(3);      //Daegu
    $colArr5 = $colArr.children().eq(4);      //Incheon
    $colArr6 = $colArr.children().eq(5);      //Gwangju
    $colArr7 = $colArr.children().eq(6);      //Daejeon
    $colArr8 = $colArr.children().eq(7);      //Ulsan
    $colArr9 = $colArr.children().eq(8);      //Sejong
    $colArr10 = $colArr.children().eq(0);     //NationWide

    // console.log($colArr2.html());

    $TextArr = $(".timetable p.info");

    //Seoul
    let $num1 = $colArr2.children().eq(1);
    let $num2 = $colArr2.children().eq(2);
    let $num3 = $colArr2.children().eq(4);

    //Busan
    let $num4 = $colArr3.children().eq(1);
    let $num5 = $colArr3.children().eq(2);
    let $num6 = $colArr3.children().eq(4);

    //Daegu
    let $num7 = $colArr4.children().eq(1);
    let $num8 = $colArr4.children().eq(2);
    let $num9 = $colArr4.children().eq(4);

    //Incheon
    let $num10 = $colArr5.children().eq(1);
    let $num11 = $colArr5.children().eq(2);
    let $num12 = $colArr5.children().eq(4);

    //Gwangju
    let $num13 = $colArr6.children().eq(1);
    let $num14 = $colArr6.children().eq(2);
    let $num15 = $colArr6.children().eq(4);

    //Daejeon
    let $num16 = $colArr7.children().eq(1);
    let $num17 = $colArr7.children().eq(2);
    let $num18 = $colArr7.children().eq(4);

    //Ulsan
    let $num19 = $colArr8.children().eq(1);
    let $num20 = $colArr8.children().eq(2);
    let $num21 = $colArr8.children().eq(4);

    //Sejong
    let $num22 = $colArr9.children().eq(1);
    let $num23 = $colArr9.children().eq(2);
    let $num24 = $colArr9.children().eq(4);

    //Seoul_Parsing
    let $Seoul = $num2.text();
    $Seoul = v.replaceAll($Seoul, "\t", "");
    $Seoul = v.replaceAll($Seoul, "\r\n", "");
    $Seoul = v.trim($Seoul);
    $Seoul_num = $Seoul.replace(regex, "");

    let $Seoul_Increase = $num1.text();
    $Seoul_Increase = v.replaceAll($Seoul_Increase, "\t", "");
    $Seoul_Increase = v.replaceAll($Seoul_Increase, "\r\n", "");
    $Seoul_Increase = v.trim($Seoul_Increase);
    $Seoul_Increase_num = $Seoul_Increase.replace(regex, "");

    let $Seoul_Dead = $num3.text();
    $Seoul_Dead = v.replaceAll($Seoul_Dead, "\t", "");
    $Seoul_Dead = v.replaceAll($Seoul_Dead, "\r\n", "");
    $Seoul_Dead = v.trim($Seoul_Dead);
    $Seoul_Dead_num = $Seoul_Dead.replace(regex, "");

    //Busan_Parsing
    let $Busan = $num5.text();
    $Busan = v.replaceAll($Busan, "\t", "");
    $Busan = v.replaceAll($Busan, "\r\n", "");
    $Busan = v.trim($Busan);
    $Busan_num = $Busan.replace(regex, "");

    let $Busan_Increase = $num4.text();
    $Busan_Increase = v.replaceAll($Busan_Increase, "\t", "");
    $Busan_Increase = v.replaceAll($Busan_Increase, "\r\n", "");
    $Busan_Increase = v.trim($Busan_Increase);
    $Busan_Increase_num = $Busan_Increase.replace(regex, "");

    let $Busan_Dead = $num6.text();
    $Busan_Dead = v.replaceAll($Busan_Dead, "\t", "");
    $Busan_Dead = v.replaceAll($Busan_Dead, "\r\n", "");
    $Busan_Dead = v.trim($Busan_Dead);
    $Busan_Dead_num = $Busan_Dead.replace(regex, "");

    //Daegu_Parsing
    let $Daegu = $num8.text();
    $Daegu = v.replaceAll($Daegu, "\t", "");
    $Daegu = v.replaceAll($Daegu, "\r\n", "");
    $Daegu = v.trim($Daegu);
    $Daegu_num = $Daegu.replace(regex, "");

    let $Daegu_Increase = $num7.text();
    $Daegu_Increase = v.replaceAll($Daegu_Increase, "\t", "");
    $Daegu_Increase = v.replaceAll($Daegu_Increase, "\r\n", "");
    $Daegu_Increase = v.trim($Daegu_Increase);
    $Daegu_Increase_num = $Daegu_Increase.replace(regex, "");

    let $Daegu_Dead = $num9.text();
    $Daegu_Dead = v.replaceAll($Daegu_Dead, "\t", "");
    $Daegu_Dead = v.replaceAll($Daegu_Dead, "\r\n", "");
    $Daegu_Dead = v.trim($Daegu_Dead);
    $Daegu_Dead_num = $Daegu_Dead.replace(regex, "");

    //Incheon_Parsing
    let $Incheon = $num11.text();
    $Incheon = v.replaceAll($Incheon, "\t", "");
    $Incheon = v.replaceAll($Incheon, "\r\n", "");
    $Incheon = v.trim($Incheon);
    $Incheon_num = $Incheon.replace(regex, "");

    let $Incheon_Increase = $num10.text();
    $Incheon_Increase = v.replaceAll($Incheon_Increase, "\t", "");
    $Incheon_Increase = v.replaceAll($Incheon_Increase, "\r\n", "");
    $Incheon_Increase = v.trim($Incheon_Increase);
    $Incheon_Increase_num = $Incheon_Increase.replace(regex, "");

    let $Incheon_Dead = $num12.text();
    $Incheon_Dead = v.replaceAll($Incheon_Dead, "\t", "");
    $Incheon_Dead = v.replaceAll($Incheon_Dead, "\r\n", "");
    $Incheon_Dead = v.trim($Incheon_Dead);
    $Incheon_Dead_num = $Incheon_Dead.replace(regex, "");

    //Gwangju_Parsing
    let $Gwangju = $num14.text();
    $Gwangju = v.replaceAll($Gwangju, "\t", "");
    $Gwangju = v.replaceAll($Gwangju, "\r\n", "");
    $Gwangju = v.trim($Gwangju);
    $Gwangju_num = $Gwangju.replace(regex, "");

    let $Gwangju_Increase = $num13.text();
    $Gwangju_Increase = v.replaceAll($Gwangju_Increase, "\t", "");
    $Gwangju_Increase = v.replaceAll($Gwangju_Increase, "\r\n", "");
    $Gwangju_Increase = v.trim($Gwangju_Increase);
    $Gwangju_Increase_num = $Gwangju_Increase.replace(regex, "");

    let $Gwangju_Dead = $num15.text();
    $Gwangju_Dead = v.replaceAll($Gwangju_Dead, "\t", "");
    $Gwangju_Dead = v.replaceAll($Gwangju_Dead, "\r\n", "");
    $Gwangju_Dead = v.trim($Gwangju_Dead);
    $Gwangju_Dead_num = $Gwangju_Dead.replace(regex, "");

    //Daejeon_Parsing
    let $Daejeon = $num17.text();
    $Daejeon = v.replaceAll($Daejeon, "\t", "");
    $Daejeon = v.replaceAll($Daejeon, "\r\n", "");
    $Daejeon = v.trim($Daejeon);
    $Daejeon_num = $Daejeon.replace(regex, "");

    let $Daejeon_Increase = $num16.text();
    $Daejeon_Increase = v.replaceAll($Daejeon_Increase, "\t", "");
    $Daejeon_Increase = v.replaceAll($Daejeon_Increase, "\r\n", "");
    $Daejeon_Increase = v.trim($Daejeon_Increase);
    $Daejeon_Increase_num = $Daejeon_Increase.replace(regex, "");

    let $Daejeon_Dead = $num18.text();
    $Daejeon_Dead = v.replaceAll($Daejeon_Dead, "\t", "");
    $Daejeon_Dead = v.replaceAll($Daejeon_Dead, "\r\n", "");
    $Daejeon_Dead = v.trim($Daejeon_Dead);
    $Daejeon_Dead_num = $Daejeon_Dead.replace(regex, "");

    //Ulsan_Parsing
    let $Ulsan = $num20.text();
    $Ulsan = v.replaceAll($Ulsan, "\t", "");
    $Ulsan = v.replaceAll($Ulsan, "\r\n", "");
    $Ulsan = v.trim($Ulsan);
    $Ulsan_num = $Ulsan.replace(regex, "");

    let $Ulsan_Increase = $num19.text();
    $Ulsan_Increase = v.replaceAll($Ulsan_Increase, "\t", "");
    $Ulsan_Increase = v.replaceAll($Ulsan_Increase, "\r\n", "");
    $Ulsan_Increase = v.trim($Ulsan_Increase);
    $Ulsan_Increase_num = $Ulsan_Increase.replace(regex, "");

    let $Ulsan_Dead = $num21.text();
    $Ulsan_Dead = v.replaceAll($Ulsan_Dead, "\t", "");
    $Ulsan_Dead = v.replaceAll($Ulsan_Dead, "\r\n", "");
    $Ulsan_Dead = v.trim($Ulsan_Dead);
    $Ulsan_Dead_num = $Ulsan_Dead.replace(regex, "");

    //Sejong_Parsing
    let $Sejong = $num23.text();
    $Sejong = v.replaceAll($Sejong, "\t", "");
    $Sejong = v.replaceAll($Sejong, "\r\n", "");
    $Sejong = v.trim($Sejong);
    $Sejong_num = $Sejong.replace(regex, "");

    let $Sejong_Increase = $num22.text();
    $Sejong_Increase = v.replaceAll($Sejong_Increase, "\t", "");
    $Sejong_Increase = v.replaceAll($Sejong_Increase, "\r\n", "");
    $Sejong_Increase = v.trim($Sejong_Increase);
    $Sejong_Increase_num = $Sejong_Increase.replace(regex, "");

    let $Sejong_Dead = $num24.text();
    $Sejong_Dead = v.replaceAll($Sejong_Dead, "\t", "");
    $Sejong_Dead = v.replaceAll($Sejong_Dead, "\r\n", "");
    $Sejong_Dead = v.trim($Sejong_Dead);
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

    res.json([
      {
        // Standard_Time: $Standard_Time,
        // Seoul: [
        //   {
        //     Seoul_num: $Seoul_num,
        //     Seoul_Increase_num: $Seoul_Increase_num,
        //     Seoul_Dead_num: $Seoul_Dead_num
        //   }
        // ],
        // Busan: [
        //   {
        //     Busan_num: $Busan_num,
        //     Busan_Increase_num: $Busan_Increase_num,
        //     Busan_Dead_num: $Busan_Dead_num
        //   }
        // ],
        // Daegu: [
        //   {
        //     Daegu_num: $Daegu_num,
        //     Daegu_Increase_num: $Daegu_Increase_num,
        //     Daegu_Dead_num: $Daegu_Dead_num
        //   }
        // ],
        // Incheon: [
        //   {
        //     Incheon_num: $Incheon_num,
        //     Incheon_Increase_num: $Incheon_Increase_num,
        //     Incheon_Dead_num: $Incheon_Dead_num
        //   }
        // ],
        // Gwangju: [
        //   {
        //     Gwangju_num: $Gwangju_num,
        //     Gwangju_Increase_num: $Gwangju_Increase_num,
        //     Gwangju_Dead_num: $Gwangju_Dead_num
        //   }
        // ],
        // Daejeon: [
        //   {
        //     Daejeon_num: $Daejeon_num,
        //     Daejeon_Increase_num: $Daejeon_Increase_num,
        //     Daejeon_Dead_num: $Daejeon_Dead_num
        //   }
        // ],
        // Ulsan: [
        //   {
        //     Ulsan_num: $Ulsan_num,
        //     Ulsan_Increase_num: $Ulsan_Increase_num,
        //     Ulsan_Dead_num: $Ulsan_Dead_num
        //   }
        // ],
        // Sejong: [
        //   {
        //     Sejong_num: $Sejong_num,
        //     Sejong_Increase_num: $Sejong_Increase_num,
        //     Sejong_Dead_num: $Sejong_Dead_num
        //   }
        // ]
        Standard_Time: $Standard_Time,
        Seoul: {
          Seoul_num: $Seoul_num,
          Seoul_Increase_num: $Seoul_Increase_num,
          Seoul_Dead_num: $Seoul_Dead_num
        },
        Busan: {
          Busan_num: $Busan_num,
          Busan_Increase_num: $Busan_Increase_num,
          Busan_Dead_num: $Busan_Dead_num
        },
        Daegu: {
          Daegu_num: $Daegu_num,
          Daegu_Increase_num: $Daegu_Increase_num,
          Daegu_Dead_num: $Daegu_Dead_num
        },
        Incheon: {
          Incheon_num: $Incheon_num,
          Incheon_Increase_num: $Incheon_Increase_num,
          Incheon_Dead_num: $Incheon_Dead_num
        },
        Gwangju: {
          Gwangju_num: $Gwangju_num,
          Gwangju_Increase_num: $Gwangju_Increase_num,
          Gwangju_Dead_num: $Gwangju_Dead_num
        },
        Daejeon: {
          Daejeon_num: $Daejeon_num,
          Daejeon_Increase_num: $Daejeon_Increase_num,
          Daejeon_Dead_num: $Daejeon_Dead_num
        },
        Ulsan: {
          Ulsan_num: $Ulsan_num,
          Ulsan_Increase_num: $Ulsan_Increase_num,
          Ulsan_Dead_num: $Ulsan_Dead_num
        },
        Sejong: {
          Sejong_num: $Sejong_num,
          Sejong_Increase_num: $Sejong_Increase_num,
          Sejong_Dead_num: $Sejong_Dead_num
        }
      }
    ]);

    const statusRef = ref.child("city");
    try {
      statusRef.set({
        City: {
          Standard_Time: $Standard_Time,
          Seoul: {
            Seoul_num: $Seoul_num,
            Seoul_Increase_num: $Seoul_Increase_num,
            Seoul_Dead_num: $Seoul_Dead_num
          },
          Busan: {
            Busan_num: $Busan_num,
            Busan_Increase_num: $Busan_Increase_num,
            Busan_Dead_num: $Busan_Dead_num
          },
          Daegu: {
            Daegu_num: $Daegu_num,
            Daegu_Increase_num: $Daegu_Increase_num,
            Daegu_Dead_num: $Daegu_Dead_num
          },
          Incheon: {
            Incheon_num: $Incheon_num,
            Incheon_Increase_num: $Incheon_Increase_num,
            Incheon_Dead_num: $Incheon_Dead_num
          },
          Gwangju: {
            Gwangju_num: $Gwangju_num,
            Gwangju_Increase_num: $Gwangju_Increase_num,
            Gwangju_Dead_num: $Gwangju_Dead_num
          },
          Daejeon: {
            Daejeon_num: $Daejeon_num,
            Daejeon_Increase_num: $Daejeon_Increase_num,
            Daejeon_Dead_num: $Daejeon_Dead_num
          },
          Ulsan: {
            Ulsan_num: $Ulsan_num,
            Ulsan_Increase_num: $Ulsan_Increase_num,
            Ulsan_Dead_num: $Ulsan_Dead_num
          },
          Sejong: {
            Sejong_num: $Sejong_num,
            Sejong_Increase_num: $Sejong_Increase_num,
            Sejong_Dead_num: $Sejong_Dead_num
          }
        }
      });
      console.log("Input firebase database");
    } catch (e) {
      console.log(e);
    }
  });
});

module.exports = router;
