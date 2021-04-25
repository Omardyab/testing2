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
let persons=5;
let breakfast=true;
let tguide=true;
// if user choose activity make this object
let Hiking=new Booking('Hiking',persons,breakfast,tguide);
let Relaxing=new Booking('Relaxing',persons,breakfast,tguide);
let Exploring =new Booking('Exploring',persons,breakfast,tguide);

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
  {
    totalprice=totalprice*.85;
    console.log('you were lucky and your new price is ',totalprice);
  }
};
Hiking.caltotal();
Relaxing.caltotal();
Exploring.caltotal();

