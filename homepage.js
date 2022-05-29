function searchBar (){

   var search = document.querySelector("#search_bar");
   var value = search.getAttribute("value");
    // 함수 기능 
    if(value == "on"){
        search.innerHTML="<div class='x'><input class='a' type='text' placeholder='검색기능 사용 불가능'></div>";   
        search.setAttribute("value","off");    
    }   

    var x = document.querySelector(".x");


    if(value == "off"){
        x.setAttribute("style","display:none;");
        search.setAttribute("value","on"); 
    }
};

