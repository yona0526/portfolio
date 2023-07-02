$(document).ready(function () {					//문서 세팅 되면
  var map = document.getElementById("main_Wrap")	//#map 찾아서 변수에 저장
  var map2 = document.getElementById("gnb")	//#map 찾아서 변수에 저장
  var winHeight = 0;							//윈도우 높이 저장할 변수 초기화

 function setMapSize(){						//#map의 높이 설정할 함수 생성 
   winHeight = window.innerHeight;			//윈도우 높이 구해서 변수에 저장
   map.style.height = winHeight+"px";		//#map 높이를 윈도우 높이로 설정
   map2.style.height = winHeight+"px";		//#map 높이를 윈도우 높이로 설정
 }
  setMapSize();								//함수 실행																//함수 실행
  $(window).resize(setMapSize);				//윈도우창 사이즈 변하면 함수 재실행
});

// $(document).ready(function() {
//   $('#btn-gnb').click(function(){
//     $('#gnb').slideToggle(120);
//   });
  


// });

(function($) {
  $(function () {
    $('#btn-gnb').on('click', function() {
      $('body').toggleClass('open');
    });
  });
})(jQuery);