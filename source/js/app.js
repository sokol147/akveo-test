
var menuBtn = document.getElementById('menu');

var menuList = document.getElementById('menu-list');

menuBtn.onclick = function(event){
  event.preventDefault();

  menuBtn.classList.toggle('menu-btn--active');

  menuList.classList.toggle('open');

};



function initMap(){
  var uluru = {lat: 37.876240, lng: -122.250098};

  var map = new google.maps.Map(
    document.getElementById('map__wrapper'), {zoom: 15, center: uluru}
  );

  var marker = new google.maps.Marker({
    position: uluru, 
    map: map,
    icon: {
      url: 'templates/images/map-icon.png',
      scaledSize: new google.maps.Size(64,64)
    }
  });

}

window.addEventListener('load',initMap);

