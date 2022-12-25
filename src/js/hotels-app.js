let listArray = [],
    listName = "";

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

function createAppItem (obj) {
  let name = obj.name
  let city = obj.city
  let starscount = obj.stars
  let price = obj.price
  let item = document.createElement('li') 
  let btn = document.createElement('button')
  let deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Удалить'
  btn.textContent = 'Сделать бронь'
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
  console.log(obj);
  deleteBtn.addEventListener('click',()=> {
    if (confirm("Bы уверены?")) {
      item.remove();
      for (i = 0; i < listArray.length; i++) {
        if (listArray[i].id == obj.id) listArray.splice(i, 1);
      }
      saveList(listArray, listName);
    }
  })
  

  let itemPrice = document.createElement('p')
  itemPrice.classList.add('price')
  stars.classList.add('stars')
  itemHeading.innerHTML = 'Отель: ' + name 
  itemCity.innerHTML = 'Город: ' + city
  itemPrice.innerHTML = price + ' в сутки'
  item.append(itemHeading)
  item.append(stars)
  item.append(itemCity)
  item.append(itemPrice)
  item.append(btn)
  item.append(deleteBtn)
  return item
}

function getNewID(arr) {
  let max = 0;
  for (const item of arr) {
    if (item.id > max) max = item.id;
  }
  return max + 1;
}

function saveList(arr, keyName) {
  localStorage.setItem(keyName, JSON.stringify(arr));
}


function createHotelsApp(container,title,keyName,defArray = []) {
  let hotelsAppTitle = createAppTitle(title)
  let hotelsList = createAppList()
  let myBtn = document.getElementById('form-btn')
  let hotelNameForm = document.getElementById('hotelname')
  let hotelCityForm = document.getElementById('city')
  let hotelStarsForm = document.getElementById('namber1')
  let hotelPriceForm = document.getElementById('namber2')
  listName = keyName;
  listArray = defArray;
  let localData = localStorage.getItem(listName);
  if (localData !== null && localData !== ""){
    listArray = JSON.parse(localData);
  }
  for (const itemList of listArray) {
    let hotelName = itemList.name
    let hotelCity = itemList.city
    let hotelStars = itemList.stars
    let hotelPrice = itemList.price
    let hotelId  = itemList.id
    let newItem = {
      id:hotelId,
      name: hotelName,
      city: hotelCity,
      stars: hotelStars,
      price: hotelPrice,
    };
    let hotel = createAppItem(newItem)
    hotelsList.append(hotel)
  }
  container.append(hotelsAppTitle)
  container.append(hotelsList)
  myBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let hotelName = hotelNameForm.value
    let hotelCity = hotelCityForm.value
    let hotelStars = hotelStarsForm.value
    let hotelPrice = hotelPriceForm.value
    let newItem = {
      id: getNewID(listArray),
      name: hotelName,
      city: hotelCity,
      stars: hotelStars,
      price: hotelPrice,
    };
    let hotel = createAppItem(newItem)
    listArray.push(newItem)
    saveList(listArray, listName);
    hotelsList.append(hotel)
    hotelNameForm.value = ''
    hotelCityForm.value = ''
    hotelStarsForm.value = ''
    hotelPriceForm.value = ''
  })
}
window.createHotelsApp = createHotelsApp;