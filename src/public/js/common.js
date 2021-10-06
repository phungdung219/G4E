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

//Chat real-time
var socket = io();
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var named = prompt('Họ và tên của bạn ạ <3')
    const message= input.value;
    if (input.value && named ) {
    socket.emit('chat message', {message, named});
    input.value = '';
    }
});

socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = `${msg.named}:  ${msg.message}`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

