$(document).ready(function () {
var firstname1 = $('.firstname1').val();
var firstname2 = $('.firstname2').val();
var firstname3 = $('.firstname3').val();
var firstdish1 = $('.firstdish').val();
var firstdish2 = $('.firstdish2').val();
var firstdish3 = $('.firstdish3').val();
var seconddish1 = $('.seconddish1').val();
var seconddish2 = $('.seconddish1').val();
var seconddish3 = $('.seconddish1').val();
var firstdishcost1 = $('.firstdishcost1').val();
var firstdishcost2 = $('.firstdishcost3').val();
var firstdishcost3 = $('.firstdishcost3').val();
var seconddishcost1 = $('.seconddishcost1').val();
var seconddishcost2 = $('.seconddishcost2').val();
var seconddishcost3 = $('.seconddishcost3').val();
var tax1 = function() {
  (firstdishcost1 + seconddishcost1) * .089
}
var tax2 = function() {
  (firstdishcost2 + seconddishcost2) * .089
}
var tax3 = function() {
  (firstdishcost3 + seconddishcost3) * .089
}
var tip1 = function() {
  (firstdishcost1 + seconddishcost1) * .18
}
var tip2 = function() {
  (firstdishcost2 + seconddishcost2) * .18
}
var tip3 = function() {
  (firstdishcost3 + seconddishcost3) * .18
}
var total1 = function() {
  firstdishcost1 + seconddishcost1 + tax1 + tip1
}
var total2 = function() {
  firstdishcost2 + seconddishcost2 + tax2 + tip2
}
var total3 = function() {
  firstdishcost3 + seconddishcost3 + tax3 + tip3
}
$('.submit').click(function() {
  function Diner(firstname, firstdish, firstdishcost, seconddish, seconddishcost, firstdishcost, tax, tip, total) {
    this.firstname = firstname;
    this.firstdish = firstdish;
    this.firstdishcost = firstdishcost;
    this.seconddish = seconddish;
    this.seconddishcost = seconddishcost;
    this.tax = tax;
    this.tip = tip;
    this.total = total;
  }
  var person1 = new Diner(firstname1, firstdish1, firstdishcost1, seconddish1, seconddishcost1, firstdishcost1, tax1, tip1, total1);
  var person2 = new Diner(firstname2, firstdish2, firstdishcost2, seconddish2, seconddishcost2, firstdishcost2, tax2, tip2, total2);
  var person3 = new Diner(firstname3, firstdish3, firstdishcost3, seconddish3, seconddishcost3, firstdishcost3, tax3, tip3, total3);
  $('.tax1').html("<span class='tax1'>Diner 1 tax:"+tax1+"</span>")
  $('.tax2').html("<span class='tax2'>Diner 2 tax:"+tax2+"</span>")
  $('.tax3').html("<span class='tax3'>Diner 3 tax:"+tax3+"</span>")
  $('.tip1').html("<span class='tip1'>Diner 1 tip:"+tip1+"</span>")
  $('.tip2').html("<span class='tip2'>Diner 2 tip:"+tip2+"</span>")
  $('.tip3').html("<span class='tip3'>Diner 3 tip:"+tip3+"</span>")
  $('.total1').html("<span class='total1'>Diner 1 total:"+total1+"</span>")
  $('.total2').html("<span class='total2'>Diner 2 total:"+total2+"</span>")
  $('.total3').html("<span class='total3'>Diner 3 total:"+total3+"</span>")
});
});
