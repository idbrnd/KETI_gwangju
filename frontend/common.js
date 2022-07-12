const HOST = "14.63.1.173"
const PORT = "8086"
const DB = 'keti'
const COLORS = ['#FFFFFF','#3388FF','#00B050','#FFC000','#FF0000','#A1A1A1']


function s(){
    return 1000;
}

function min(){
    return 60*s();
}

function h(){
    return 60*min();
}

function setCAIColorIndex(khaiValue){
    if(khaiValue == -1) return 5;

    if(khaiValue >= 0 && khaiValue < 51) return 1;
    if(khaiValue >= 51 && khaiValue < 101) return 2;
    if(khaiValue >= 101 && khaiValue < 251) return 3;
    if(khaiValue >= 251) return 4;
}

function setCOcolorIndex(value){
    if(value == -1) return 5;

    if(value < 2) return 1;
    if(value >= 2 && value < 9) return 2;
    if(value >= 9 && value < 15) return 3;
    if(value >= 15) return 4;
}

function setCO2colorIndex(value){
    if(value < 701) return 1;
    if(value >= 701 && value < 1001) return 2;
    if(value >= 1001 && value < 2001) return 3;
    if(value >= 2000) return 4;
}

function setHCHOcolorIndex(value){
    if(value < 100) return 1;
    if(value >= 100 && value < 600) return 2;
    if(value >= 600 && value < 1200) return 3;
    if(value >= 1200) return 4;
}

function setVOCscolorIndex(value){
    if(value < 0.221) return 1;
    if(value >= 0.221 && value < 0.661) return 2;
    if(value >= 0.661 && value < 2.201) return 3;
    if(value >= 2.201) return 4;
}


function setPM10colorIndex(value){
    if(value == -1) return 5;

    if(value < 31) return 1;
    if(value >= 31 && value < 81) return 2;
    if(value >= 81 && value < 151) return 3;
    if(value >= 151) return 4;
}

function setPM25colorIndex(value){
    if(value == -1) return 5;

    if(value < 16) return 1;
    if(value >= 16 && value < 36) return 2;
    if(value >= 36 && value <= 76) return 3;
    if(value > 76) return 4;
}

function setWord(value){
    if(value == -1) return "-";
    return value;
}