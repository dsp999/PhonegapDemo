/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var latlong= new google.maps.LatLng(0, 0);
var maxLat = Math.atan(Math.sinh(Math.PI)) * 180 / Math.PI;

var center = new google.maps.LatLng(0, 0);
var sw = new google.maps.LatLng(-maxLat, 180);
var ne = new google.maps.LatLng(maxLat, -180);


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function initialize() {
	// Southwest part of the world
new google.maps.LatLngBounds(sw, center);

// Southeast part of the world
new google.maps.LatLngBounds(center, sw);
        var mapCanvas = document.getElementById('map-canvas');
        
        var mapOptions = {
          center: latlong,
          zoom:8,
    	panControl:true,
    	zoomControl:true,
    	mapTypeControl:true,
    	scaleControl:true,
    	streetViewControl:true,
    	overviewMapControl:true,
    	rotateControl:true,   
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var marker = new google.maps.Marker({
  position: latlong,
  map: map,
 
});
      }
      
      
      google.maps.event.addDomListener(window, 'load', initialize);
      
      
      function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    latlong= new google.maps.LatLng(x[0].value, x[1].value),
    
    
    
    document.getElementById("demo").innerHTML ="Coordinates: "+ latlong;
    initialize();
}
