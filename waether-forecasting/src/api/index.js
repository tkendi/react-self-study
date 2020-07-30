import data from '../data/data.json'

export const RNHStatus = () => {
    const RNH = data.RN1;
    let RNHData = ''
    if(RNH === 0) {RNHData = "0mm 또는 없음"}
    if (RNH === 1) {RNHData = "1mm 미만"}
    if(RNH === 5) {RNHData = "1~4mm"}
    if(RNH === 10) {RNHData = "5~9mm"}
    if(RNH === 20) {RNHData = "10~19mm"}
    if(RNH === 40){RNHData = "20~39mm"}
    if(RNH === 70){RNHData = "40~69mm"}
    if(RNH === 100) {RNHData = "70mm 이상"}

    return RNHData
}