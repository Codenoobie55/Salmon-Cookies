'use strict';
// list of variables used for
var cookieCounter = 0;
var cookieSales = 0;

//math.floor(Math.random() * ((65 - 23) + 1) + 23 );

var firstAndPike = {
  name: 'First And Pike',
  dailySales: [],
  minimumHours: 23,
  maximumHours: 65,
  avgHours: 6.3,
  randomGen: function () {
    var random = Math.floor(Math.random() * (this.maximumHours - this.minimumHours + 1) + this.minimumHours);
    return Math.round(random * this.avgHours);
  }
};
for(var i = 0; i < 15 ; i++){
  cookieSales = firstAndPike.randomGen();
  firstAndPike.dailySales.push(cookieSales);
}
console.log(firstAndPike.dailySales);

var seaTac = {
  dailySales: [],
  minimumHours: 3,
  maximumHours: 24,
  avgHours: 1.2,
  randomGen: function () {
    var random = Math.floor(Math.random() * (this.maximumHours - this.minimumHours + 1) + this.minimumHours);
    return Math.round(random * this.avgHours);
  }
};
//loop iteration begins for each hour from 6AM-8pm
for(var i = 0; i < 15 ; i++){
  cookieSales = seaTac.randomGen();
  seaTac.dailySales.push(cookieSales);
}

console.log(seaTac.dailySales);

// average hours *Randomly generated # will equal the sales for that hour which need to be looped 15 times from the items stored in an array.
// generates a fake number of customers per hour
//make a loop for 15 houts using the average hours and random gen. Store this data in an array

var seattleCenter = {
  dailySales: [],
  minimumHours: 11,
  maximumHours: 38,
  avgHours: 3.7,
  randomGen: function () {
    var random = Math.floor(Math.random() * (this.maximumHours - this.minimumHours + 1) + this.minimumHours);
    return Math.round(random * this.avgHours);
  }
};
for(var i = 0; i < 15 ; i++){
  cookieSales = seattleCenter.randomGen();
  seattleCenter.dailySales.push(cookieSales);
}

console.log(seattleCenter.dailySales);

var capitolHill = {
  dailySales: [],
  minimumHours: 20,
  maximumHours: 38,
  avgHours: 2.3,
  randomGen: function () {
    var random = Math.floor(Math.random() * (this.maximumHours - this.minimumHours + 1) + this.minimumHours);
    return Math.round(random * this.avgHours);
  }
};
for(var i = 0; i < 15 ; i++){
  cookieSales = capitolHill.randomGen();
  capitolHill.dailySales.push(cookieSales);
}
console.log(capitolHill.dailySales);

var alki = {
  dailySales: [],
  minimumHours: 2,
  maximumHours: 16,
  avgHours: 4.6,
  randomGen: function () {
    var random = Math.floor(Math.random() * (this.maximumHours - this.minimumHours + 1) + this.minimumHours);
    return Math.round(random * this.avgHours);
  }
};
for(var i = 0; i < 15 ; i++) {
  cookieSales = alki.randomGen();
  alki.dailySales.push(cookieSales);
};
console.log(alki.dailySales);

for(var i = 0; i < firstAndPike.dailySales.length; i++) {

  var newLi = document.createElement('li');
  var newText = document.createTextNode((i + 8) + ' :00 -- ' + firstAndPike.dailySales[i] + ' cookies');
  newLi.appendChild(newText);
  var list = document.getElementById('FirstAndPike');
  list.appendChild(newLi);
}

for(var i = 0; i < seaTac.dailySales.length; i++) {

  var newLi = document.createElement('li');
  var newText = document.createTextNode((i + 8) + '  :00 --' + seaTac.dailySales[i] + ' cookies' );
  newLi.appendChild(newText);
  var list = document.getElementById('seaTac');
  list.appendChild(newLi);
}

for(var i = 0; i < seattleCenter.dailySales.length; i++) {

  var newLi = document.createElement('li');
  var newText = document.createTextNode((i + 8) + '  :00 --' + seattleCenter.dailySales[i] + 'cookies');
  newLi.appendChild(newText);
  var list = document.getElementById('seattleCenter');
  list.appendChild(newLi);
}
for(var i = 0; i < capitolHill.dailySales.length; i++) {

  var newLi = document.createElement('li');
  var newText = document.createTextNode(( i + 8) + '  :00  --' + capitolHill.dailySales[i] + 'cookies');
  newLi.appendChild(newText);
  var list = document.getElementById('capitolHill');
  list.appendChild(newLi);
}
for(var i = 0; i < alki.dailySales.length; i++) {

  var newLi = document.createElement('li');
  var newText = document.createTextNode(( i + 8) + '  :00 --' + alki.dailySales[i] + 'cookies');
  newLi.appendChild(newText);
  var list = document.getElementById('alki');
  list.appendChild(newLi);
}
