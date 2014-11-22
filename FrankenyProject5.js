// JavaScript File
/*
    Filename:  FrankenyProject5.js
    Written by: Steven Frankeny
    Purpose: Learning and Having Fun
    Date: 11 Nov. 2014
    Modification History: None
    Last Modified: N/A
*/
$(document).ready(function(){
	var timer;
	var startTime = 0;
	var pos;
	var marker;
	var map;
	var infoWindow = new google.maps.InfoWindow();
	$("#instructionsScreen").hide();
	$("#gameScreen").hide();
	$("#btnStartGame").bind("click",startGame);
	$("#btnInstructions").bind("click",displayInstructions);
	$("#btnBack").bind("click",showMainMenu);
	

	function startGame(){
		var mapOptions = {
			center: { lat: -34.397, lng: 150.644},
			zoom: 0
		};
		map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
		timer = new Date();
		startTime = timer.getTime();
		$("#menuScreen").hide();
		$("#gameScreen").show();
		$("#btnTryAgain").hide();
		for (x = 0; x < 9; x++){
			pos = new google.maps.LatLng(Math.random()*160-80, Math.random()*360-180);
			marker = new google.maps.Marker({
			position: pos,
			map: map,
			title: "<div style = 'height:60px;width:200px'><b>Santa's not here! Try somewhere else!</b></div>"
			});

			google.maps.event.addListener(marker, "click", function (e) {
				infoWindow.close();
				infoWindow.setContent(this.title);
				infoWindow.open(map, this);
			});
		}
		pos = new google.maps.LatLng(Math.random()*160-80, Math.random()*360-180);
		var marker2 = new google.maps.Marker({
			position: pos,
			map: map,
			title: "<div style = 'height:60px;width:200px'><b>You found Santa! Hurray!<br>"
			});
		google.maps.event.addListener(marker2, "click", function (e) {
				timer = new Date();
				infoWindow.close();
				infoWindow.setContent(marker2.title + "It took you " + (.001*(timer.getTime() - startTime)).toFixed(3) + " seconds to find Santa!</div><button id='btnGoAgain' type='button' onClick='window.location.reload()'>Go Again?</button>");
				infoWindow.open(map, marker2);
			});
	}
	function displayInstructions(){
		$("#menuScreen").hide();
		$("#instructionsScreen").show();
	}
	function showMainMenu(){
		$("#menuScreen").show();
		$("#instructionsScreen").hide();
	}
 
	
});

	