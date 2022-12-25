function createAppTitle(title) {
  let appTitle = document.createElement('h2')
  appTitle.innerHTML = title
  appTitle.classList.add('hotels-heading')
  return appTitle
}

function createAppList () {
  let list = document.createElement("ul");
  list.classList.add("hotels-list");
  return list;
}

function createAppItem (name, city, starscount, price) {
  let item = document.createElement('li') 
  let btn = document.createElement('button')
  let deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Удалить'
  btn.textContent = 'Написать продавцу'
  btn.classList.add('add-btn')
  item.classList.add('hotels-item')
  deleteBtn.classList.add('delete-btn')
  let itemHeading = document.createElement('h3')
  itemHeading.classList.add('item-heading')
  let itemCity = document.createElement('span')
  itemCity.classList.add('city')
  let stars = document.createElement('ul')
  for (let i = 0; i<starscount;i++) {
    let starsItem = document.createElement('li')
    starsItem.classList.add('star')
    stars.append(starsItem)
  }
  deleteBtn.addEventListener('click',()=> {
    if (confirm("Bы уверены?")) {
      item.remove();
    }
  })

  let itemPrice = document.createElement('p')
  itemPrice.classList.add('price')
  stars.classList.add('stars')
  itemHeading.innerHTML = name 
  itemCity.innerHTML = city
  itemPrice.innerHTML = price + ' в сутки'
  item.append(itemHeading)
  item.append(stars)
  item.append(itemCity)
  item.append(itemPrice)
  item.append(btn)
  item.append(deleteBtn)
  return item
}

function createHotelsApp(container,title) {
  let hotelsAppTitle = createAppTitle(title)
  let hotelsList = createAppList()
  let myBtn = document.getElementById('form-btn')
  let hotelNameForm = document.getElementById('hotelname')
  let hotelCityForm = document.getElementById('city')
  let hotelStarsForm = document.getElementById('namber1')
  let hotelPriceForm = document.getElementById('namber2')
  container.append(hotelsAppTitle)
  container.append(hotelsList)
  myBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let hotelName = hotelNameForm.value
    let hotelCity = hotelCityForm.value
    let hotelStars = hotelStarsForm.value
    let hotelPrice = hotelPriceForm.value

    let hotel = createAppItem(hotelName,hotelCity,hotelStars,hotelPrice)
    hotelsList.append(hotel)
    hotelNameForm.value = ''
    hotelCityForm.value = ''
    hotelStarsForm.value = ''
    hotelPriceForm.value = ''
  })
}
window.createHotelsApp = createHotelsApp;