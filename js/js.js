function lightMode() {
    alert("기능 미구현");
    let body=document.querySelector("body");
    let whitebody=document.querySelector(".search-box"); /*,"#raceSchedule",".article",".youtube");*/
    let searchTxt=document.querySelector(".search-txt");
    let raceSchedule=document.querySelector("#raceSchedule");
    let article=document.querySelector(".article");
    let youtube=document.querySelector(".youtube");
    if(onoff) {
        onoff=!onoff;
        body.style.backgroundColor="#5383E8";   /* 밝은파란색 */
        whitebody.style.backgroundColor="#fff";
        searchTxt.style.backgroundColor="#fff";
        
        raceSchedule.style.backgroundColor="#fff";
        raceSchedule.style.color="#000";
        
        article.style.backgroundColor="#fff";
        article.style.color="#000";
        youtube.style.backgroundColor="#fff";

    }else {
        onoff=!onoff;
        body.style.backgroundColor="#1c1c1f";
        whitebody.style.backgroundColor="#31313C";
        searchTxt.style.backgroundColor="#31313C";

        raceSchedule.style.backgroundColor="#31313C";
        raceSchedule.style.color="#fff";
        
        article.style.backgroundColor="#31313C";
        article.style.color="#fff";
        youtube.style.backgroundColor="#31313C";
    }
}
