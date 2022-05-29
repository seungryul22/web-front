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



function pome (){
    var text = document.querySelector(".main_article");
    text.innerHTML="<h1><mark>포메라니안</mark></h1> <br> <img class='dog_img' src='pome.jpg'> <br><br><br> <h2>독일 출신</h2> <br><br> <h2>초소형견, 체고 30cm 이하, 무게 3kg 이하</h2> <br><br> <h2>조상이 썰매견 출신이라서 아직도 자기가 대형견인줄 알고 있음</h2> <br><br> <h2>한고집 하는 쉽지 않은 성격, 다리 골격이 약함, 털 잘빠짐</h2> ";
};

function sitchu (){
    var text = document.querySelector(".main_article");
    text.innerHTML="<h1><mark>시츄</mark></h1> <br> <img class='dog_img' src='shihtzu.jpg'> <br><br><br> <h2>티베트 출신</h2> <br><br> <h2>소형견, 체고 30cm 이하, 무게 6kg 이하</h2> <br><br> <h2>무려 중국 왕실에서 키워진 왕실견</h2> <br><br> <h2>영리하고 다정함, 털 관리 잘해줘야함, 눈 주변관리 잘해줘야함</h2>";
};

function coton (){
    var text = document.querySelector(".main_article");
    text.innerHTML="<h1><mark>꼬똥 드 툴레아</mark></h1> <br> <img class='dog_img' src='coton.jpg'> <br><br><br> <h2>마다가스카르 출신</h2> <br><br> <h2>소형견,중형견 다양함, 무게 3~13kg </h2> <br><br> <h2>프랑스 이름</h2> <br><br> <h2>적응력 좋고 친절함, 기름기가 적어 냄새가 잘 안남, 털 잘 빗어줘야함</h2>";
};

function border (){
    var text = document.querySelector(".main_article");
    text.innerHTML="<h1><mark>보더콜리</mark></h1> <br> <img class='dog_img' src='border.jpg'> <br><br><br> <h2>스코틀랜드 출신</h2> <br><br> <h2>대형견, 체고 50cm, 무게 12~20kg </h2> <br><br> <h2>양치기 개 출신</h2> <br><br> <h2>지능이 높음, 작은 동물 잘 무는편, 운동량이 많아 마당 없이 못 키움</h2>";
};
