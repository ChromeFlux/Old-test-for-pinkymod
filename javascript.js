document.addEventListener("DOMContentLoaded", function () {
    var i, i2, i3, i4, i5, i6,
    
    //^^^ Add a new ix where x is the next number that hasn't been used yet, count one for each new section you've added.
    PHOTC = 0, PGateKeepers = 0, PMythrilSlime = 0,
    PResprites = 0, PRedos = 0, PNewContent = 0,
    
    //^^^Here you put in the PLoadingBar variable = 0,
    PRedosStart = document.getElementById("PRedos").innerHTML,
    PRespritesStart = document.getElementById("PResprites").innerHTML,
    PMythrilSlimeStart = document.getElementById("PMythrilSlime").innerHTML,
    PGateKeepersStart = document.getElementById("PGateKeepers").innerHTML,
    PHOTCStart = document.getElementById("PHOTC").innerHTML,
    PNewContentStart = document.getElementById("PNewContent").innerHTML,
    
    //^^^Here you put in the PLoadingBarStart but with the Start at the end
    ElemHOTC = document.getElementById("HOTC"),
    ElemGateKeepers = document.getElementById("GateKeepers"),
    ElemMythrilSlime = document.getElementById("MythrilSlime"),
    ElemResprites = document.getElementById("Resprites"),
    ElemRedos = document.getElementById("Redos"),
    ElemNewContent = document.getElementById("NewContent");
    
    //^^^Here you put in the ElemLoadingBar variable
    
    /*
    Instructions on adding new loading bar animations.
    
    For Each New Section you created two id's, one with the title of the loading bar and another with the P in front of the same id.
    
    Above you need to add 4 lines of code per Loading Bar. Use this skeleton and fill in those 3 variables with the correct id's and variable names. In the skeleton I'll use LoadingBar as placeholder for your Loading Bar Title you've been using. So just copy and paste it where it needs to go and replace LoadingBar with your title.
    
    ix, 
    
    where x is the next number that hasn't been used yet
    
    PLoadingBar = 0,
    
    PLoadingBarStart = document.getElementById("PLoadingBar").innerHTML,
    
    ElemLoadingBar = document.getElementById("LoadingBar"),
    
    On the last one make sure to change the ; to a , and put the last variable in the definitions list to a ; at the end. That way syntax is still correct.
    
    You have a little bit left to go, Just add the skeleton for the animation loop and change LoadingBar to your title and make sure the i has your i's number. they should go up one at a time, so the next one currently is i7.
    
    for (ix = 0; ix < PLoadingBarStart; ix++) {
        setTimeout(function () {
            PLoadingBar = (PLoadingBar + 1);
            ElemLoadingBar.style.width = (100 - PLoadingBar) + "%"; }, 25 * ix);
    }
    
    */
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
    
    //^^^Put your Skeleton for the loop here
});