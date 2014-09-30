// JavaScript Document


var salesA = $('.show1');
var salesB = $('.show2');
 
var salesDetailsA = $('.info1');
var salesDetailsB = $('.info2');

var salesClickA = function () {
	
	var isActive = salesDetailsA.attr('data-state');
	
	if (isActive == 'active') {
		salesDetailsA.attr('data-state', 'inactive');
	} else {
		salesDetailsA.attr('data-state', 'active');
	}
};

var salesClickB = function () {
	
	var isActive = salesDetailsB.attr('data-state');
	
	if (isActive == 'active') {
		salesDetailsB.attr('data-state', 'inactive');
	} else {
		salesDetailsB.attr('data-state', 'active');
	}
};

salesA.on('click', salesClickA);
salesB.on('click', salesClickB);