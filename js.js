// Victoria teh code is workign fine except for the selection group I tried to call by id 
//both the group and the activity yet it did not work.
//price or offer is workign fine checked boxes and numbe rof persons
//I checked youtube videos and googled yet i could not solve it.
//please take a look or search for optiongroup maybe you will find something i did not find

// const groups=document.getElementsById('optgroup');
// const selectedvalue=document.getElementsById('optgroup');
// selectedvalue.addEventListener('input',handleselect);
const checkBox = document.getElementById('breakfast');
console.log(checkBox);
const checkBox2 = document.getElementById('guide');
console.log(checkBox2);
const form=document.getElementById('details');
form.addEventListener('submit',getselect);
console.log(form);
function getselect(event){
  event.preventDefault();
  console.log(event);
  const adv=event.target;
  const persons=adv.persons.value;
  const breakfast=adv.breakfast.checked;
  const tguide=adv.guide.checked;
  console.log(breakfast);
  console.log(tguide);
  let Hiking=new Booking('Hiking',persons,breakfast,tguide);
  Hiking.caltotal();
}
// handleselect function for selection group
// function handleselect(event){
//   event.preventDefault();
//   let select=event.target;
//   console.log(select);
// }
// getselect();
function randomValue(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
function Booking (activity,persons,breakfast,tguide){
  this.activity=activity;
  this.persons=persons;
  this.breakfast=breakfast;
  this.tguide=tguide;
  console.log(this);
}
//static values
let baseprice=0;
let totalprice=0;
let pricetguide=0;
let pricebreakfast=0;
let hikingbaseprice=10;
let Relaxingbaseprice=6;
let Exploringbaseprice=20;
//dynamica values
// if user choose activity make this object
// let Hiking=new Booking('Hiking',persons,breakfast,tguide);
// let Relaxing=new Booking('Relaxing',persons,breakfast,tguide);
// let Exploring =new Booking('Exploring',persons,breakfast,tguide);

Booking.prototype.caltotal = function()
{
  if(this.activity==='Exploring')
  {
    baseprice=Exploringbaseprice*this.persons;
    console.log('3price',baseprice);
  }
  if(this.activity==='Hiking')
  {
    baseprice=hikingbaseprice*this.persons;
    console.log('fprice',baseprice);
  }
  if(this.activity==='Relaxing'){
    baseprice=Relaxingbaseprice*this.persons;
    console.log('sprice',baseprice);
  }
  if(this.tguide===true){
    pricetguide=10;
  }
  if(this.breakfast===true){
    pricebreakfast=3*this.persons;
  }
  totalprice=baseprice+pricebreakfast+pricetguide;
  console.log(totalprice);
  if(randomValue(1,3)===1)
  { totalprice=totalprice*.85;
    console.log('Its the 100 anniversry and we have special offer for you 15% ',totalprice);
  }
  else if(randomValue(2,3)===2)
  { totalprice=totalprice*.50;
    console.log('Its the 100 anniversry and we have special offer for you of 50% ',totalprice);
  }
  else {
    totalprice=totalprice*.75;
    console.log('Its the 100 anniversry and we have special offer for you of 25% ',totalprice); 
  }
};






