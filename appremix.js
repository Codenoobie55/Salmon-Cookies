'use strict';
//arrays for times each hour until 8 amd each store plus the total
var salesTimes = ['6am', '7am', '8am', '9am', '10am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores = ['store1', 'store2', 'store3', 'store4', 'store5', 'total'];

// list of variables used for
//this will make the stores loop according to the character length
function storeMixer(){
  for(var o = 0; o < stores.length; o++){
    console.log(stores[i]);
  }
}
var CookieSales = function( name, minimumHours, maximumHours, avgHours) {
  this.name = name;
  this.minimumHours = minimumHours;
  this.maximumHours = maximumHours;
  this.avgHours = avgHours;
  this.dailySales = [];
};

CookieSales.prototype.randomGen = function () {
  var random = Math.floor(Math.random() * (this.maximumHours - this.minimumHours + 1) + this.minimumHours);
  return Math.round(random * this.avgHours);

  var mainTable = document.getElementById('main-table');
var cookieListEl = document.getElementById('cookie-list');
var bodyAppendEl = document.getElementById('main-table');

var tableHead = document.createElement('thead');
mainTable.appendChild(tableHead);

// spacer block for thead
var spacerTh = document.createElement('th');
tableHead.appendChild(spacerTh);

for(var h = 0; h < timeDay.length; h++){
  var eHeaderItem = document.createElement('th');
  eHeaderItem.textContent = timeDay[h];
  tableHead.appendChild(eHeaderItem);
}

//
for(var v = 0; v < stores.length; v++){
  var loopTr = document.createElement('tr');
  var storeTr = document.createElement('th');
  bodyAppendEl.appendChild(loopTr);
  storeTr.textContent = stores[v];
  loopTr.appendChild(storeTr);
  for(var h = 0; h < timeDay.length; h++){
    var storeTr = document.createElement('tr');
    var eRowItem = document.createElement('td');
    eRowItem.textContent = aDay(onePike, seaTac, seaCenter, capHill, alki);
    loopTr.appendChild(eRowItem);
  }
}
};
CookieSales.prototype.randomGen = function (){}

var timeHeader = document.createElement('thead');
var tableHead = document.createElement('th');
var tableData = document.createElement('td');

for( var i = 0; i < salesTimes.length; i++) {
  var tableHead = document.createElement('th');
  var tableData = document.createElement('td');
//thead.appendChild
}

var storeFormEl = document.getElementById('new-store-form');
storeFormEl.addEventListener('submit',handleSubmit);
function handleSubmit(event) {

event.preventDefault ();
event.stopPropagation();
var storeName = event.target.cookieStoreName.value;
var minCust = parseInt(event.target.maxCust.value);
var maxCust = parseInt(event.target.minCust.value);
var avgSale = parseFloat(event.target.avgSale.value);

console.log(storeName)
console.log(minCust)
console.log(maxCust)
console.log(avgSale)
console.log('user pressed the submit form')
};

salesTimes;

//math.floor(Math.random() * ((65 - 23) + 1) + 23 );
// constructor variables
var store1 = new CookieSales('firstAndPike', 23, 65, 6.3);
var store2 = new CookieSales('seaTac', 3, 24, 1.2);
var store3 = new CookieSales('seattleCenter',20, 38, 3.7);
var store4 = new CookieSales('capitolHill', 20, 38, 2.3);
var store5 = new CookieSales('alki', 2, 16, 4.6);
var stores = [store1, store2, store3, store4, store5];
for(var i = 0; i < stores.length ; i++){
  for(var j = 0; j < 15; j++){
    stores[i].dailySales.push(stores[i].randomGen());
    var newLi = document.createElement('li');
    var newText = document.createTextNode((i + 8) + ' :00 -- ' + store1.dailySales[i] + ' cookies');
    newLi.appendChild(newText);
    var list = document.getElementById('FirstAndPike');
  //  list.appendChild(newLi);
  }
  console.log(stores[i].dailySales);
}
// console.log(firstAndPike.dailySales);
//
// //loop iteration begins for each hour from 6AM-8pm
// for(var i = 0; i < 15 ; i++){
//   cookieSales = seaTac.randomGen();
//   seaTac.dailySales.push(cookieSales);
// }
//
// console.log(seaTac.dailySales);
//
// // average hours *Randomly generated # will equal the sales for that hour which need to be looped 15 times from the items stored in an array.
// // generates a fake number of customers per hour
// //make a loop for 15 houts using the average hours and random gen. Store this data in an array
//
//
// for(var i = 0; i < 15 ; i++){
//   cookieSales = seattleCenter.randomGen();
//   seattleCenter.dailySales.push(cookieSales);
// }
//
// console.log(seattleCenter.dailySales);
//
//
// for(var i = 0; i < 15 ; i++){
//   cookieSales = capitolHill.randomGen();
//   capitolHill.dailySales.push(cookieSales);
// }
// console.log(capitolHill.dailySales);
//
//
// for(var i = 0; i < 15 ; i++) {
//   cookieSales = alki.randomGen();
//   alki.dailySales.push(cookieSales);
// };
// console.log(alki.dailySales);
//
// for(var i = 0; i < firstAndPike.dailySales.length; i++) {
//
//   var newLi = document.createElement('li');
//   var newText = document.createTextNode((i + 8) + ' :00 -- ' + firstAndPike.dailySales[i] + ' cookies');
//   newLi.appendChild(newText);
//   var list = document.getElementById('FirstAndPike');
//   list.appendChild(newLi);
// }
//
// for(var i = 0; i < seaTac.dailySales.length; i++) {
//
//   var newLi = document.createElement('li');
//   var newText = document.createTextNode((i + 8) + '  :00 --' + seaTac.dailySales[i] + ' cookies' );
//   newLi.appendChild(newText);
//   var list = document.getElementById('seaTac');
//   list.appendChild(newLi);
// }
//
// for(var i = 0; i < seattleCenter.dailySales.length; i++) {
//
//   var newLi = document.createElement('li');
//   var newText = document.createTextNode((i + 8) + '  :00 --' + seattleCenter.dailySales[i] + 'cookies');
//   newLi.appendChild(newText);
//   var list = document.getElementById('seattleCenter');
//   list.appendChild(newLi);
// }
// for(var i = 0; i < capitolHill.dailySales.length; i++) {
//
//   var newLi = document.createElement('li');
//   var newText = document.createTextNode(( i + 8) + '  :00  --' + capitolHill.dailySales[i] + 'cookies');
//   newLi.appendChild(newText);
//   var list = document.getElementById('capitolHill');
//   list.appendChild(newLi);
// }
// for(var i = 0; i < alki.dailySales.length; i++) {
//
//   var newLi = document.createElement('li');
//   var newText = document.createTextNode(( i + 8) + '  :00 --' + alki.dailySales[i] + 'cookies');
//   newLi.appendChild(newText);
//   var list = document.getElementById('alki');
//   list.appendChild(newLi);
// }
//
// cookieSales();
