const app = document.getElementById('carousel')


var request = new XMLHttpRequest()
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', false)
request.send()

const data = JSON.parse(request.responseText)

if (request.status >= 200 && request.status < 400) {
  
    for (let index = 0; index <= 3; index++) {
      const api = data[index];

      const carouselItem = document.createElement('div')

      if (index === 0) {
        carouselItem.setAttribute('class', 'carousel-item active')
      } else {
        carouselItem.setAttribute('class', 'carousel-item')
      }

      const img = document.createElement('img')
      img.src = api.photo
      img.setAttribute('class', 'd-block w-100')
      img.alt = '...'
      img.style.height = "500px"

      const div = document.createElement('div')
      div.setAttribute('class', 'carousel-caption d-none d-md-block')

      const h5 = document.createElement('h5')
      h5.textContent = `${api.property_type}`

      const p = document.createElement('p')
      p.textContent = `${api.name}`

      app.appendChild(carouselItem)
      carouselItem.appendChild(img)
      carouselItem.appendChild(div)
      div.appendChild(h5)
    div.appendChild(p)
    }

  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
