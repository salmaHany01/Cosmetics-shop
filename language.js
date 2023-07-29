var imgSrc = "en";
var ActiveDic;
var langSel;
if(window.name){
    langSel=window.name;
    }
else{langSel="English";
}

function LangChange(){
langClass = document.getElementsByClassName("dicRef");
var i = langClass.length;
var Start, Stop, idSrc, idDic;
var navText;

switch(langSel){
    case "French":
        langSel="French";
        imgSrc = "en";
        navText="Anglais";
        break;
    case "English":
    case "Anglais":
    default:
        langSel="English";
        imgSrc = "fr";
        navText="French";
        break;
    }
ActiveDic="dic"+langSel;
window.name=langSel;

while(i--){
    idSrc = langClass[i].id;
    Start=idSrc.indexOf("_")+1;
    Stop=idSrc.lastIndexOf("_");
    idDic=idSrc.slice(Start,Stop);
    if(window[ActiveDic][idDic]){
        document.getElementById(idSrc).innerHTML=window[ActiveDic][idDic];}
    else{
        document.getElementById(idSrc).innerHTML="N/A";
    }
}
if(document.getElementById("imgSel")){
    document.getElementById("imgSel").src="../../img/"+imgSrc+".gif";
}
if (document.getElementById("l_SelLang1_1")){
    document.getElementById("l_SelLang1_1").innerHTML=navText;
}
}
