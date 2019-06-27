//************GLOBAL VARIABLES**************/
const $jobRoleSelector = $('select[id="title"]');
const $jobRoleOther = $('input[id="other-title"]');
let $shirtDesign = $('select[id="design"]');
let $shirtTheme;
const $colors = $('#colors-js-puns');
const $paymentMethod = $('#payment');

// hide colors in the t-shirt sections 
$colors.hide();

//*********Focus on the first field********
//Put the first field in the `focus` state
$( document ).ready(function() {
    $( "#name" ).focus();
  });

//**********Job Role Section**************
// "Your job role" text field appears when user 
// selects "Other" from the Job Role menu
//   it is not shown initially, so that it will display if JavaScript 
//   is disabled, but be hidden initially with JS.

//The on() method attaches one or more event handlers for 
//the selected elements and child elements.
//*********EXAMPLE*************************
// //$("p").on("click", function(){
//     alert("The paragraph was clicked.");
//   });
$jobRoleSelector.on('change', e => {
	if(e.target.value === "other")
		$jobRoleOther.show();
	else
	$jobRoleOther.hide();
});
$('#other-title').hide();

//**********T-Shirt Section***************
// Until a theme is selected from the “Design” menu, 
// no color options appear in the “Color” drop down 
// and the “Color” field reads “Please select a T-shirt theme”
// When a new theme is selected from the "Design" menu, the 
// "Color" field and drop down menu is updated

        var shirtSelected = false;
  $('#design').change(function(){
  	if ($('#design option:selected').val() === "js puns") {
  		$('#colors-js-puns').show();
  		$('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
  		shirtSelected = true;
  		return shirtSelected;
  	} else if ($('#design option:selected').val() === "heart js") {
  		$('#colors-js-puns').show();
  		$('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
  		shirtSelected = true;
  		return shirtSelected;
  	} else {
  		$('#colors-js-puns').hide();
  		shirtSelected = false;
  		return shirtSelected;
  	}
  });

 const Puns = $('input[name^="Puns"]');

 console.log(Puns)



////////////////////ACTIVITY SECTION///////////////////////////////////////////

var jsFrameworks = $("input[name='js-frameworks'");
var jsLibraries = $("input[name='js-libs']");
var express = $("input[name='express']");
var nodeJS = $("input[name='node']");

// Create an element to display the total activity cost
// Create a DOM element, which stores it in a global variable and append it to the 
// `.activity` section
//Create a global variable to store total activity cost

const acttivityCostDiv = $(`<div id = "total"></div>`);
const activity = $('.activities');
acttivityCostDiv.appendTo(activity);
let costOfActivity = 0;

/////////Listening for changes in the activity section/////////////////////////

// Updating and displaying the total activity cost 
//The index of the dollar sign ‘$’ in the label text from 
//the variable textOfParentOfClicked
//Using the method  `.slice()` and the index
// of the dollar sign it targets the cost at the end of the label string.
// by using parseInt the string is turned into a number so the total cost
// of activites can be calculated depending on what the user clicks
// activites that are conflicts will then be diabled. 

activity.on('change', (e) => {  
let clickedActivity = $(e.target); 
console.log("this was just clicked in the activity section")
let textOfParentOfClicked  = clickedActivity.parent().text();
console.log(textOfParentOfClicked);
console.log($(e.target));
let searchTerm = '$';
let indexOfFirst$ = textOfParentOfClicked.indexOf(searchTerm);
// console.log(indexOfFirst$);
let slice = textOfParentOfClicked.slice(indexOfFirst$ + 1) 
let numberfyTheSlice = parseInt(slice);
// let sliceOff$ = textOfParentOfClicked.indexOf(searchTerm, (indexOfFirst$ + 1));
//cost = parseFloat(textOfParentOfClicked.slice(-3));
console.log(numberfyTheSlice);
//console.log(cost);
// let costOfTheActivityJustClicked = indexOfFirst$.slice(1);
  //console.log(costOfTheActivityJustClicked);
  if (clickedActivity.is(':checked')){
	costOfActivity = costOfActivity + numberfyTheSlice ;
} else if ($(event.target).not(':checked')){
	costOfActivity = costOfActivity - numberfyTheSlice;
} console.log(costOfActivity);
document.getElementById('total').innerHTML=`Total: $`+`${costOfActivity}`;
if (jsLibraries.is(':checked')){
	nodeJS.attr("disabled", true);
} else if (nodeJS.is(':checked')){
	jsLibraries.attr("disabled", true);
}
else {
	jsLibraries.attr("disabled", false);
	nodeJS.attr("disabled", false);
}
if (jsFrameworks.is(':checked')){
	express.attr("disabled", true);
} else if (express.is(':checked')){
	jsFrameworks.attr("disabled", true);
}
else {
	express.attr("disabled", false);
	jsFrameworks.attr("disabled", false);
	}
});

// ********************Payment Section********************************************
// Initially, the credit card section will displayed in the form,
//  and the other two payment options will be hidden. 

$paymentMethod.on('change', () => {
	if ($paymentMethod.val() === 'paypal') {
		$('#credit-card').hide();
		$('#bitcoin').hide();
		$('#paypal').show();
  } else if ($paymentMethod.val() === 'bitcoin'){
		$('#credit-card').hide();
		$('#paypal').hide();
		$('#bitcoin').show();
	} else {
		$('#credit-card').show();
		$('#paypal').hide();
		$('#bitcoin').hide();
		}
  })




























