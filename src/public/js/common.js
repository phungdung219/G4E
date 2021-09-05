//Init Mapp
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.980681, lng: 105.796186 },
        zoom: 15,
    });

    var marker=new google.maps.Marker({
        position:map.center,
        animation:google.maps.Animation.BOUNCE
        });
        marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content:"GV4E~ Everyone can jup viec"
        });
        //bắt sự kiện click marker
        google.maps.event.addListener(marker, 'click', function() {
        //mở infowindow
        infowindow.open(map,marker);
        });
}

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

