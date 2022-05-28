function searchBar (){

   var search = document.querySelector("#search_bar");
   var value = search.getAttribute("value");
    // 함수 기능 
    if(value == "on"){
        search.innerHTML="<div class='x'><input type='text' placeholder='여기에 입력하세요'><input type='button' value='닫기'</div>";       

    }
};
