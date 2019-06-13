
//************GLOBAL VARIABLES**************/
const $jobRoleSelector = $('select[id="title"]');
const $jobRoleOther = $('input[id="other-title"]');
let $shirtDesign = $('select[id="design"]');
let $shirtTheme;
const $colors = $('#colors-js-puns');
const $paymentMethod = $('#payment');


$colors.hide();


//************STEP ONE*********************/
//*********Focus on the first field********
//Put the first field in the `focus` state
$( document ).ready(function() {
    $( "#name" ).focus();
  });

//************STEP TWO********************
//**********Job Role Section**************
// "Your job role" text field appears when user 
// selects "Other" from the Job Role menu

//   In your JavaScript file, target the ‘Other’ input field, 
//   and hide it initially, so that it will display if JavaScript 
//   is disabled, but be hidden initially with JS.


//The on() method attaches one or more event handlers for 
//the selected elements and child elements.
//*********EXAMPLE*************************
// //$("p").on("click", function(){
//     alert("The paragraph was clicked.");
//   });

// /////////////Is there a better way to do this?/
$jobRoleSelector.on('change', e => {
	if(e.target.value === "other")
		$jobRoleOther.show();
	else
	$jobRoleOther.hide();
});
$('#other-title').hide();
/////////////////////////////////////////////////



//************STEP THREE******************
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


////////////////////STEP FOUR//////////////////////////////////////////////////
////////////////////ACTIVITY SECTION///////////////////////////////////////////
// Creating an element to display the total activity cost
// Create a DOM element, store it in a global variable and append it to the 
// `.activity` section. You can view the elements tab in the Chrome DevTools 
// to check that your element is in the DOM. Create a global variable to store 
// total activity cost — initially set to 0 — don't use const since you want to
//  update this as needed.
////////////////////////////////////////////////////////////////////////////////
let costOfActivity = 0;
const activity = $('.activities');
const acttivityCostDiv = $(`<div></div>`);
acttivityCostDiv.appendTo(activity);


/////////Listening for changes in the activity section/////////////////////////
// Add a change event listener to the activity section.
//  Inside the listener, it will be helpful to have a few
//   variables handy for referencing values. For example:
// ● The DOM `input` element that was just clicked.
// ● The text content of the above `input` element’s parent `label` element.
// ● NOTE: It is helpful at this point to log out the two variables
//  you just created to double
// check that their values are what you think they are. Remember, 
// you’ll need to click on the checkboxes in the Activity section to
//  run the code in this listener, including your log statements.
//////////////////////////////////////////////////////////////////////////////

activity.on('change', (e) => {  
let clickedActivity = $(e.target); 

console.log("this was just clicked in the activity section")
let textOfParentOfClicked  = clickedActivity.parent().text();
console.log(textOfParentOfClicked);
console.log($(e.target));



let searchTerm = '$';
let indexOfFirst$ = textOfParentOfClicked.indexOf(searchTerm);
console.log(indexOfFirst$);

// let slice = textOfParentOfClicked.slice() 

let sliceOff$ = textOfParentOfClicked.indexOf(searchTerm, (indexOfFirst$ + 1));



console.log(sliceOff$);


// let costOfTheActivityJustClicked = indexOfFirst$.slice(1);
//  console.log(costOfTheActivityJustClicked);




});

// Updating and displaying the total activity cost part 1
// Let’s add a few more more helpful variables in the Activity section’s change listener:
// ● The index of the dollar sign ‘$’ in the label text from the variable (that you declared
// above).
// ● The cost of the activity the was just clicked. Using a method like `.slice()` and the index
// of the dollar sign, you can target the cost at the end of the label string.
// ● NOTE: Again, it’s helpful here, after just a few lines of code, to log out your values to
// ensure that they actually are what you think they are.
// ● Now, you’ll want to take the cost from the variable above, which is currently a string
// type, and turn it into a number type so you can use it in the basic arithmetic needed to
// calculate the total cost of activities.
// ● NOTE: Using the `typeof` operator to log out the type of your last variable can be very
// helpful here.








// Payment Section
// Initially, the credit card section should be selected and displayed in the form,
//  and the other two payment options should be hidden. The user should be able to 
//  change payment options at any time, but shouldn’t be able to select the
// “Select Payment Method” option. So you’ll need to check the currently selected 
// payment option, and hide and show the payment sections in the form accordingly.


$paymentMethod.on('change', () => {
  if ($paymentMethod.val() === 'paypal') {
      $('#credit-card','#bitcoin').hide();
      $('#paypal').show();
} else if ($paymentMethod.val() === 'bitcoin'){
      $('#credit-card','#paypal').hide();
      $('#bitcoin').show();
  } else {
      $('#credit-card').show();
      $('#paypal','#bitcoin').hide();
      }
})

// commit test
// testing 





























