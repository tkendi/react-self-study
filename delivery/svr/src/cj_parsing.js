// const axios = require('axios')

// router.get("/delivery", (ctx, next) => {
//   const { number } = ctx.query;

//   const time = {};
//   const location = {};
//   const description = {};
  
//   if (String(number).length >= 11 || String(number).length >= 12) {
//     axios.get(`${URL}/${number}`).then(function (res) {
//       const progresses = res.data.progresses;
//       console.log(res.data.progresses);
//       for (const keys in progresses) {
//         time[keys] = progresses[keys].time;
//         location[keys] = progresses[keys].location;
//         description[keys] = progresses[keys].description;

//         console.log(progresses[keys].time);
//         console.log(progresses[keys].location);
//         console.log(progresses[keys].description);
//       }
//     });
//   } else {
//     console.log("failure");
//   }
//   console.log(number);
// });