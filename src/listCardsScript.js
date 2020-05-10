
var request = new XMLHttpRequest()
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', false)
request.send()

var apiAirbnb = JSON.parse(request.responseText)

request.open('GET', 'http://www.mocky.io/v2/5eb7195f3100006a00c8a115', false)
request.send()

const mockLocation = JSON.parse(request.responseText)

const state = document.getElementById('validationServer04').value

for (let index = 0; index < apiAirbnb.length; index++) {
    apiAirbnb[index].location = mockLocation[index]
}

let cards = document.getElementById('card-deck');

cards.innerHTML = "";


//for (let index = 0; index < apiAirbnb.length; index++) {
//    if(apiAirbnb[index].location.name == state) {
//        cards.innerHTML +=
//        "<div style='width:16rem; height:16rem' id='max-width'>" +
//        "<div class='card'>" +
//        "<img class='card-img-top' id='img' src=" + apiAirbnb[index].photo + " alt='Imagem de capa do card'>" +
//        "<div class='card-body'>" +
//        "<h5 class='card-title'>" + apiAirbnb[index].property_type + "</h5>" +
//        "<p class='card-text'><strong>R$" + apiAirbnb[index].price + ",00</strong>/dia</p>" +
//        "</div>" +
//        "</div>"
//    }
//}

for (let index = 0; index < apiAirbnb.length; index++) {
    cards.innerHTML +=
        "<div style='width:16rem; height:16rem' id='max-width'>" +
        "<div class='card'>" +
        "<img class='card-img-top' id='img' src=" + apiAirbnb[index].photo + " alt='Imagem de capa do card'>" +
        "<div class='card-body'>" +
        "<h5 class='card-title'>" + apiAirbnb[index].property_type + "</h5>" +
        "<p class='card-text'><strong>R$" + apiAirbnb[index].price + ",00</strong>/dia</p>" +
        "</div>" +
        "</div>"
}

function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        //construct map in São Paulo
        center: new google.maps.LatLng(-23.645852, -48.541329),
        zoom: 6
    });

    for (let i = 0; i < mockLocation.length; i++) {
        new google.maps.Marker({
            position: new google.maps.LatLng(apiAirbnb[i].location.position.lat, apiAirbnb[i].location.position.lng),
            map: map
        });
    }
};



