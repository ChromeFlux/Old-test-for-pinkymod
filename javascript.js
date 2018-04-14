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
    
    function addCategory(){
        var TitleName = prompt("What is the TitleName for the New Section?", "LoadingBar");
        var Percentage;
        var WrapperDiv;
        var ClassWrapper = "Wrapper";
        var CategoryDiv;
        var LoadingBarDiv;
        var TitleText;
        var TitleTextNode;
        var TitleSpaceParenthesis;
        var TitlePercentagePer;
        var TitlePercentage;
        var TitlePercentageParenthesis;
        var ContentParagraph;
        var content;
        var ContentArray = [];
        
        if (TitleName == null || TitleName == "") {
            if (alert("New Section was Canceled.")) {

            } else {
                return false;
                TitleName = "";
            };
        } else {
            
            Percentage = prompt("Put in a Percentage, or leave blank for none.");
            
            if (Percentage == null) {
                alert("New Section was Canceled.");
                TitleName = "";
                Percentage = "";
            } else {
                
                if (Percentage == "") {
                Percentage = "???";
                }
                
                //Creating Elements and Text Nodes for New Section
                WrapperDiv = document.createElement("div");
                WrapperDiv.className = ClassWrapper;
                CategoryDiv = document.createElement("div");
                CategoryDiv.className = "Category";
                LoadingBarDiv = document.createElement("div");
                LoadingBarDiv.className = "LoadingBar";
                LoadingBarDiv.id = TitleName;
                TitleText = prompt("Put your title in. Cancel or Nothing to exit. You won't have another chance to undo this.");
                TitleTextNode = document.createTextNode(TitleText);

                if (TitleText == null || TitleText == "") {

                    alert("New Section was Canceled.");
                    TitleName = "";
                    Percentage = "";
                    return false;
                    
                } else {

                    TitleSpaceParenthesis = document.createTextNode(" (");
                    TitlePercentagePer = document.createElement("per");
                    TitlePercentagePer.className = "P";
                    TitlePercentagePer.id = "P" + TitleName;
                    TitlePercentage = document.createTextNode(Percentage);
                    TitlePercentageParenthesis = document.createTextNode("%)");
                    ContentParagraph = document.createElement("p");
                    ContentParagraph.className = "Content";

                    //Appending Elements and Text Nodes to create New Section
                    document.body.appendChild(WrapperDiv);
                    WrapperDiv.appendChild(CategoryDiv);
                    CategoryDiv.appendChild(LoadingBarDiv);
                    CategoryDiv.appendChild(TitleTextNode);
                    CategoryDiv.appendChild(TitleSpaceParenthesis);
                    CategoryDiv.appendChild(TitlePercentagePer);
                    TitlePercentagePer.appendChild(TitlePercentage);
                    CategoryDiv.appendChild(TitlePercentageParenthesis);
                    WrapperDiv.appendChild(ContentParagraph);

                    do {
                        content = prompt("Put in your content, press OK after one line. Cancel or nothing to finalize.");
                        ContentArray.push(content);
                        if (content != null) {
                            ContentParagraph.appendChild(document.createTextNode(content));
                            ContentParagraph.appendChild(document.createElement("br"));
                        }
                    } while (content);
                    
                    ContentParagraph.removeChild(ContentParagraph.childNodes[ContentParagraph.childNodes.length - 1]);

                    return false;
                }
            }
            
        };
    }
    document.getElementById("AddCategory").onclick = addCategory;
});