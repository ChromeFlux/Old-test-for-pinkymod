document.addEventListener("DOMContentLoaded", function () {
    var i, i2, i3, i4, i5, i6,
    PHOTC = 0, PGateKeepers = 0, PMythrilSlime = 0,
    PResprites = 0, PRedos = 0, PNewContent = 0,
    PRedosStart = document.getElementById("PRedos").innerHTML,
    PRespritesStart = document.getElementById("PResprites").innerHTML,
    PMythrilSlimeStart = document.getElementById("PMythrilSlime").innerHTML,
    PGateKeepersStart = document.getElementById("PGateKeepers").innerHTML,
    PHOTCStart = document.getElementById("PHOTC").innerHTML,
    PNewContentStart = document.getElementById("PNewContent").innerHTML,
    ElemHOTC = document.getElementById("HOTC"),
    ElemGateKeepers = document.getElementById("GateKeepers"),
    ElemMythrilSlime = document.getElementById("MythrilSlime"),
    ElemResprites = document.getElementById("Resprites"),
    ElemRedos = document.getElementById("Redos"),
    ElemNewContent = document.getElementById("NewContent");
    
    for (i = 0; i < PHOTCStart; i++) {
        setTimeout(function () {
            PHOTC = (PHOTC + 1);
            ElemHOTC.style.width = (100 - PHOTC) + "%"; }, 25 * i);
    }
    for (i2 = 0; i2 < PGateKeepersStart; i2++) {
        setTimeout(function () {
            PGateKeepers = (PGateKeepers + 1);
            ElemGateKeepers.style.width = (100 - PGateKeepers) + "%"; }, 25 * i2);
    }
    for (i3 = 0; i3 < PMythrilSlimeStart; i3++) {
        setTimeout(function () {
            PMythrilSlime = (PMythrilSlime + 1);
            ElemMythrilSlime.style.width = (100 - PMythrilSlime) + "%"; }, 25 * i3);
    }
    for (i4 = 0; i4 < PRespritesStart; i4++) {
        setTimeout(function () {
            PResprites = (PResprites + 1);
            ElemResprites.style.width = (100 - PResprites) + "%"; }, 25 * i4);
    }
    for (i5 = 0; i5 < PRedosStart; i5++) {
        setTimeout(function () {
            PRedos = (PRedos + 1);
            ElemRedos.style.width = (100 - PRedos) + "%"; }, 25 * i5);
    }
    for (i6 = 0; i6 < PNewContentStart; i6++) {
        setTimeout(function () {
            PNewContent = (PNewContent + 1);
            ElemNewContent.style.width = (100 - PNewContent) + "%"; }, 25 * i6);
    }
});