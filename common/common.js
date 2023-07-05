(function($) {
  $(function () {
    $('#btn-gnb').on('click', function() {
      $('body').toggleClass('open');
    });
  });
})(jQuery);


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

$(document).ready(function(){

  const galleryItem = document.getElementsByClassName("gallery-item");
  const lightBoxContainer = document.createElement("div");
  const lightBoxContent = document.createElement("div");
  const lightBoxImg = document.createElement("img");
  const lightBoxPrev = document.createElement("div");
  const lightBoxNext = document.createElement("div");
  
  lightBoxContainer.classList.add("lightbox");
  lightBoxContent.classList.add("lightbox-content");
  lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
  lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");
  
  lightBoxContainer.appendChild(lightBoxContent);
  lightBoxContent.appendChild(lightBoxImg);
  lightBoxContent.appendChild(lightBoxPrev);
  lightBoxContent.appendChild(lightBoxNext);
  
  document.body.appendChild(lightBoxContainer);
  
  let index = 1;
  
  function showLightBox(n) {
      if (n > galleryItem.length) {
          index = 1;
      } else if (n < 1) {
          index = galleryItem.length;
      }
      let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
      lightBoxImg.setAttribute("src", imageLocation);
  }
  
  function currentImage() {
      lightBoxContainer.style.display = "block";
  
      let imageIndex = parseInt(this.getAttribute("data-index"));
      showLightBox(index = imageIndex);
  }
  for (let i = 0; i < galleryItem.length; i++) {
      galleryItem[i].addEventListener("click", currentImage);
  }
  
  function slideImage(n) {
      showLightBox(index += n);
  }
  function prevImage() {
      slideImage(-1);
  }
  function nextImage() {
      slideImage(1);
  }
  lightBoxPrev.addEventListener("click", prevImage);
  lightBoxNext.addEventListener("click", nextImage);
  
  function closeLightBox() {
      if (this === event.target) {
          lightBoxContainer.style.display = "none";
      }
  }
  lightBoxContainer.addEventListener("click", closeLightBox);

});