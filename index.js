// Task 1: External JavaScripy file add

// Task2: Color Chnage of All H2 tag
var x = document.getElementById("main1");
var y = x.getElementsByTagName("h2");
var i;
for (i = 0; i < y.length; i++) {
  y[i].style.color = "blue";
};



// Task 3: Background Color change of Backpack Section
document.getElementById('backpack').style.backgroundColor = "tomato";



// Task 4: Border radious = 30px of each card in Shoes Section
const borderR = document.getElementsByClassName('card');
var i;
for (i = 0; i < borderR.length; i++) {
  borderR[i].style.borderRadius = "20px";
}



// Task 5: Use onclick function on a Button
const button = document.getElementById('sub-btn').addEventListener('click', function () {
  const sub = document.getElementById('sub');
  const p = document.createElement('p');
  p.innerText = 'Thanks for Subscribe';
  sub.appendChild(p);
});



// // Task 6: Remove Button by Click
// var removeButton = getElementsByClassName('rButton').addEventListener('click', function () {
//   var element = document.getElementsByClassName("card-body").remove();
// })




// Task 7: Delete a button by typing 'delete' in a input



// Task 8: Mouse hover pic change



// Task 9: Double Click Background Color Chnage




