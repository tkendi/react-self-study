var express = require("express");
var router = express.Router();

const request = require("request");
const cheerio = require("cheerio");
const v = require("voca");

const regex = /[^0-9]/g;

const admin = require('firebase-admin');

const serviceAccount = require('../nCov-19.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ncov-19-d22a5.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("/");

/* GET users listing. */
router.get("/", function(req, res, next) {
  const url =
    "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=";

  request(url, function(error, response, body) {
    $ = cheerio.load(body);

    //<tr> parsing
    let $colArr = $(".container div div.content div table.num tbody tr");

    console.log($colArr.html());

    //기준시 파싱
    let $textArr = $("div div.content div")
      .children()
      .eq(3);

    //확진환자 파싱
    let $num1 = $colArr.children().eq(0);
    //확진환자 격리해제 파싱
    let $num2 = $colArr.children().eq(1);
    //사망장 파싱
    let $num3 = $colArr.children().eq(2);
    //검사진행 파싱
    let $num4 = $colArr.children().eq(3);

    //확진 환자 글자만 파싱
    let $Confirm_patient = $num1.text();
    $Confirm_patient = v.replaceAll($Confirm_patient, "\t", "");
    $Confirm_patient = v.replaceAll($Confirm_patient, "\r\n", "");
    $Confirm_patient = v.trim($Confirm_patient);
    $Confirm_patient_num = $Confirm_patient.replace(regex, "");

    //확진환자 격리해제 글자만 파싱
    let $Disassociate_patient = $num2.text();
    $Disassociate_patient = v.replaceAll($Disassociate_patient, "\t", "");
    $Disassociate_patient = v.replaceAll($Disassociate_patient, "\r\n", "");
    $Disassociate_patient = v.trim($Disassociate_patient);
    $Disassociate_patient_num = $Disassociate_patient.replace(regex, "");

    //사망자 글자만 파싱
    let $Dead = $num3.text();
    $Dead = v.replaceAll($Dead, "\t", "");
    $Dead = v.replaceAll($Dead, "\r\n", "");
    $Dead = v.trim($Dead);
    $Dead_num = $Dead.replace(regex, "");

    //검사진행 글자만 파싱
    let $Inspection_progress = $num4.text();
    $Inspection_progress = v.replaceAll($Inspection_progress, "\t", "");
    $Inspection_progress = v.replaceAll($Inspection_progress, "\r\n", "");
    $Inspection_progress = v.trim($Inspection_progress);
    $Inspection_progress_num = $Inspection_progress.replace(regex, "");

    //기준시 글자만 파싱
    let $Standard_Time = $textArr.text();
    $Standard_Time = v.replaceAll($Standard_Time, "\t", "");
    $Standard_Time = v.replaceAll($Standard_Time, "\r\n", "");
    $Standard_Time = v.trim($Standard_Time);

    console.log($Standard_Time);
    console.log($Confirm_patient);
    console.log($Disassociate_patient);
    console.log($Dead);
    console.log($Inspection_progress);

    res.json([
      {
        id: 1,
        title: $Standard_Time,
        Confirm: $Confirm_patient_num,
        Disassociate: $Disassociate_patient_num,
        Quaranines: $Dead_num,
        Dead: $Inspection_progress_num
      }
    ]);

    const korea = ref.child("corona");
    try {
    korea.set({
      Domestic: {
        title: $Standard_Time,
        Confirm: $Confirm_patient_num,
        Disassociate: $Disassociate_patient_num,
        Quaranines: $Dead_num,
        Dead: $Inspection_progress_num
      }
    });
    console.log("Input firebase database");  
  }catch(e) {
    console.log(e);
  } 

    // const json = {
    //     Title: $Standard_Time,
    //     Confirm: $Confirm_patient,
    //     Disassociate: $Disassociate_patient,
    //     Dead: $Dead,
    //     Inspection: $Inspection_progress
    // }

    // res.json({ttie: $Standard_Time, Confirm: $Confirm_patient_num, Disassociate: $Disassociate_patient_num, Dead: $Dead_num, Inspection: $Inspection_progress_num});

    //   res.render("DomesticSituation", {
    //     title: $Standard_Time,
    //     Confirm: $Confirm_patient_num,
    //     Disassociate: $Disassociate_patient_num,
    //     Dead: $Dead_num,
    //     Inspection: $Inspection_progress_num,
    //   });
    // });

    // userRef.set({
    //   title: $Standard_Time,
    //   Confirm: $Confirm_patient_num,
    //   Disassociate: $Disassociate_patient_num,
    //   Dead: $Dead_num,
    //   Inspection: $Inspection_progress_num
    // });
  });
});

module.exports = router;