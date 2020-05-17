const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const config = require("./config/key");

const { auth } = require("./middleware/auth");
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Conntected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.post("/api/users/register", (req, res, next) => {
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //db에 저장한다

  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/api/users//login", (req, res) => {
  //요청된 이메일을 데이터베이스 있는지 찾는다
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다",
      });
    }

    //요청된 이메일이 데이터 베이스 있다면 비밀번호가 맞는 비밀번호인지 확인

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다",
        });
      }

      //비밀번호가 맞다면 토큰까지 생성하기
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        //토큰을 저장한다 => 로컬 스토리지 or 쿠키

        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, user_id: user._id });
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {
  //미들웨어를 통과했음 => Authentication이 true라는 의미
  res.status(200).json({
    _id: req.user.user._id,
    isAdmin: req.user.role == 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
