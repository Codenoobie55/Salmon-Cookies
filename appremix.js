'use strict';
// list of variables used for

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
};

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
    list.appendChild(newLi);
  }
}
console.log(stores[i].dailySales);

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
