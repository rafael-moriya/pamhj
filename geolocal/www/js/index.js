document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    alert("vamos obter a geolocalização agora...");
    alert(navigator.geolocation);


 //   navigator.geolocation.getCurrentPosition(
 //       onGeolocationSucess,
 //       onGeolocationError,
 //       geolocationOptions,
 //   );
        window.watchId = navigator.geolocation.watchPosition(geolocationSuccess,
            [geolocationError],
            [geolocationOptions]);


}

function onGeolocationSucess(position){
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');

          document.getElementById("latitude").value=position.coords.latitude
          document.getElementById("longitude").value=position.coords.longitude
          document.getElementById("altitude").value=position.coords.altitude
          document.getElementById("accuracy").value=position.coords.accuracy
          document.getElementById("altitudeaccuracy").value=position.coords.altitudeaccuracy
          document.getElementById("heading").value=position.coords.heading
          document.getElementById("speed").value=position.coords.speed
          document.getElementById().value=position.coords.timestamp
}

function stopWatchLoc(watchId){
    navigator.geolocation.clearWatch(window.watchID);
}

function onGeolocationError(Error){
    alert('code:' + error.code + '\n' +
    'message:' + error.message + '\n');

}

geolocationOptions = {
    maximumAge: 3000,
    timeout: 5000,
    enableHighAccuracy: true
}