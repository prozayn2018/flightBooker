

myArray=[];

$(function() {

//doing it more concise; multiple chaining selector
//and using event target to target object in dom; much more concise code


$('#sf, #ny, #par').click(function(event){
    if(event.target.id == 'sf'){
      $('#frombtn').html('San francisco');
    }else if(event.target.id == 'ny'){
      $('#frombtn').html('New York');
    } else{
      $('#frombtn').html('Paris');
    }
    return false;
});
  //code for 'todropdown'

  $('#ap1, #ap2, #ap3').click(function(event){
      if(event.target.id == 'ap1'){
        $('#deparbtn').html('April 1st');
      }else if(event.target.id == 'ap2'){
        $('#deparbtn').html('April 2nd');
      } else{
        $('#deparbtn').html('April 3rd');
      }
      return false;
  });

// code for depart dropdown
  $('#sfto, #nyto, #parto').click(function(event){
      if(event.target.id == 'sfto'){
        $('#tobtn').html('San francisco');
      }else if(event.target.id == 'nyto'){
        $('#tobtn').html('New York');
      } else{
        $('#tobtn').html('Paris');
      }
      return false;
  });

  //hides/toggles div under search on flights/flight
  $('#search').click(function(event){
    event.preventDefault();
    $('#flightpick').toggle();
     flightpick();
  });

  // logic when #search is clicked; needs to collect from, depart, and date user has entered.

  function flightpick(){
    //textcontent to get html inside button; jquery wasn't working after many tries.
    var x = document.getElementById('tobtn').textContent;
    var y = document.getElementById('frombtn').textContent;
    var z = document.getElementById('deparbtn').textContent;

    // not sure why I had to chain selectors instead of having
    //only one id selected since they are all city1, city 2.

    $('#city2, #city2').html(x);
    $('#city1, #city1').html(y);
    $('#date, #date').html(z);
  };

// re-routing to new page when clicked via JS instead of rails.

  $('#pick1, #pick2, #pick3').click(function(event){

    if(event.target.id == 'pick1'){
      myArray = [];
      let city1 = $('#city1').html();
      let city2 = $('#tobtn').html();
      let price = $('#price1').html();
      let time = $('#time').html();
      myArray.push(city1, city2, price, time);

      let key = myArray;
      window.localStorage.setItem('key',JSON.stringify(key));
      window.location.assign('http://localhost:3000/flights/passengerInfo');
    }else if(event.target.id == 'pick2'){
      window.location.assign('http://localhost:3000/flights/passengerInfo');
    }else if(event.target.id =='pick3'){
      window.location.assign('http://localhost:3000/flights/passengerInfo');
    }
    return false;
  });

  // passing div values from flights to passengerInfo.html using localstorage

  function divValue(){

  console.log(myArray);
  let data1 = JSON.parse(localStorage.getItem('key'));
  console.log(data1);
  $('#citypass1').html(data1[0]);
  $('#citypass2').html(data1[1]);
  $('#pricepass').html(data1[2]);
  $('#timepass').html(data1[3]);
 };

divValue();

  $('#submit').click(function(event){
    //get value inside form
    var getValue = document.getElementById('email1').value;
    console.log(getValue);
    var getValue2 = document.getElementById('name').value;
    console.log(getValue2);
    window.location.assign('http://localhost:3000/flights/itinerary');
    return false;
  });



});
