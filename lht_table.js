"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author:Nicholas Garcia 
   Date:   

	
*/

var thisDay = new Date("August 30,2018"); //sets date of the page

//inserts this code stored in the variable tableHTML
var tableHTML = "<table id='eventTable'> \
      <caption>Upcoming Events</captions> \
      <tr><th>Date</th><th>Event</th><th>Price</th></tr>";

      //sets the time of End Date to 14 days after the this Day variable
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

//goes through all the dates in  the array and gets the date and event details that day
for(var i = 0; i<eventDates.length; i++){
   var eventDate = new Date(eventDates[i]); //establishes the array details the for loop goes through
   var eventDay = eventDate.toDateString(); //gets the date of the day it is on
   var eventTime = eventDate.toLocaleTimeString(); //gets the time of the array date it is on

   //if this day is less than or equal to event date and event date is less than or equal to endDate then the for loop runs
   if(thisDay <= eventDate && eventDate <= endDate){
      //Stores the following Html code and variables into the TableHTml variable
      tableHTML += "<tr> \
         <td>" + eventDay + "@" + eventTime + "</td> \
         <td>" + eventDescriptions[i] + "</td> \
         <td>" + eventPrices[i] + "</td> \
      </tr>";
   }
}
//closes the table elemnt in code and sitres it into tableHtml
tableHTML += "</table>";
//Places all the code inside the tableHTML variable into code
document.getElementById("eventList").innerHTML = tableHTML;