const monoose = require('mongoose');

const { Schema } = mongoose;

cosnt Post = new Schema({
    title: String,
    body: String,
    tags: [String], //문자열 배열
    publishdDate: {
        type: Date,
        default: new Date()  //현재 날짜를 기본 값으로 지정
    }
});

module.exports = mongoose.model('Post', Post);


