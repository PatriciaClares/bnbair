// if you have any suggestion of questions, pleasse feel free to send me an email to chiholiu10@gmail.com


(function () {
    "use strict";

    function Pagination() {

        var request = new XMLHttpRequest()
        request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', false)
        request.send()

        const objJson = JSON.parse(request.responseText)

        let current_page = 1;
        let records_per_page = 6;

        this.init = function () {
            changePage(1);
            pageNumbers();
            clickPage();
        }

        let changePage = function (page) {
            let listingTable = document.getElementById('card-deck');

            if (page < 1) {
                page = 1;
            }
            if (page > (numPages() - 1)) {
                page = numPages();
            }

            listingTable.innerHTML = "";

            for (var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
                listingTable.innerHTML +=
                "<div class='col-5 justify-content-center'>"+
                    "<div class='card text-black' id='click'>" +
                        "<img class='card-img-top' src="+objJson[i].photo+" alt='Imagem de capa do card'>"+
                        "<div class='card-body'>"+
                            "<h5 class='card-title'>"+objJson[i].property_type+"</h5>"+
                            "<p class='card-text'><strong>R$"+objJson[i].price +",00</strong>/dia</p>"+
                        "</div>"+
                    "</div>"
                "</div>"
            }
        }
        let clickPage = function () {
            document.addEventListener('click', function (e) {
                if (e.target.nodeName == "SPAN" && e.target.classList.contains("page-link")) {
                    current_page = e.target.textContent;
                    changePage(current_page);
                }
            });
        }

        let pageNumbers = function () {
            let pageNumber = document.getElementById('pagination');

            pageNumber.innerHTML = ''
            for (let i = 1; i < numPages() + 1; i++) {
            pageNumber.innerHTML += 
                "<span class'page-item>"+
                    "<span class='page-link href='#>"+i+"</span>"+
                "</span>"
            }
        }

        let numPages = function () {
            return Math.ceil(objJson.length / records_per_page);
        }
    }
    let pagination = new Pagination();
    pagination.init();
})();

document.getElementById('click').onclick = function () {
    window.location='./listCards.html'
}

function dateValidation() {
    checkin = new Date(document.getElementById("checkin").value)
     checkout = new Date(document.getElementById("checkout").value)
 
     if (isValid(checkin, checkout)) {
         window.location.assign('listCards.html')
         document.getElementById('data').innerHTML('oi')
     } else {
     document.getElementById('error').style.display = 'block'
     }
 }
 
 function isValid(checkin, checkout) {
     console.log(checkin, checkout);
     return checkin < checkout ? true : false
 }
