require('dotenv').config();
import axios from 'axios';

const {serviceKey} = process.env

const date = new Date();
date.setHours(date.getHours() - 1);
const startDt = `${date.getFullYear()}${('0' + (date.getMonth() - 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`
const endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`

const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson&serviceKey=${serviceKey}&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`;

console.log(url);

export const koreaData = async(town)