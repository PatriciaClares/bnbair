
var request = new XMLHttpRequest()
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', false)
request.send()

var apiAirbnb = JSON.parse(request.responseText)

request.open('GET', 'https://api.jsonbin.io/b/5eb7aa168284f36af7b8a0c1/1', false)
request.setRequestHeader("secret-key", "$2b$10$9VjhdGleV4U/7gW1CATiPOqBr6/AF9L1CFEEK9gpI.TXbA/tCxZBK");
request.send()

const mockLocation = JSON.parse(request.responseText)

for (let index = 0; index < apiAirbnb.length; index++) {
    apiAirbnb[index].location = mockLocation[index]
}

let cards = document.getElementById('card-deck');

cards.innerHTML = "";

var cardsByState = [];
for (let index = 0; index < apiAirbnb.length; index++) {
    days = localStorage.getItem('days')
    state = localStorage.getItem('valueState')

    if(state!='São Paulo' && state!= 'Rio Grande do Sul'){
        cards.innerHTML += "<span>Infelizmente não temos estadias neste local, Procure por São Paulo Ou Rio Grande do Sul"
        break;
    }
    
    if (apiAirbnb[index].location.name === state) {
        cards.innerHTML +=
            "<div style='width:16rem; height:16rem' id='max-width'>" +
            "<div class='card '>" +
            "<img class='card-img-top' id='img' src=" + apiAirbnb[index].photo + " alt='Imagem de capa do card'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + apiAirbnb[index].property_type + "</h5>" +
            "<p class='card-text'><strong>R$" + apiAirbnb[index].price * days + ",00</strong>/TOTAL</p>" +
            "</div>" +
            "</div>"

        cardsByState.push(apiAirbnb[index])
    }
}

function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        //construct map in São Paulo
        center: new google.maps.LatLng(cardsByState[0].location.lat, cardsByState[0].location.lng),
        zoom: 15
    });
    
    for (let i = 0; i < cardsByState.length; i++) {
        new google.maps.Marker({
            position: new google.maps.LatLng(cardsByState[i].location.position.lat, cardsByState[i].location.position.lng),
            map: map
        });
    }
};



