$(document).ready(function () {
  var billData = {};
$(".submit").click(function() {
  var dinerName = $('.diner').val();
  var firstDish = $('.firstdish').val();
  var firstDishCost = $('.firstdishcost').val();
  billData.name = dinerName;
  billData.firstDish = firstDish;
  billData.firstDishCost = Number(firstDishCost);
  console.log(billData);
  var total = Number(firstDishCost);
  var tax = Number((total * .089).toFixed(2));
  var tip = Number((total * .18).toFixed(2));
  console.log(total);
  console.log(tax);
  var totalWithTax = ((total + tax).toFixed(2));
  var taxTip = ((total + tax + tip).toFixed(2));
  console.log(tax);
  console.log(totalWithTax);
  $('.diner').val('').focus()
  $('.firstdish').val('')
  $('.firstdishcost').val('')
  $('.bill table tbody').append('<tr><td>'+dinerName+'</td><td>'+firstDish+'</td><td>'+firstDishCost+'</td><td>'+tax+'</td><td>'+totalWithTax+'</td><td>'+tip+'</td><td>'+taxTip+'</td></tr>')
$(".add").click(function () {
  $('.diner').hide();
  $
})
})
});
