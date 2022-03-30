if ("geolocation" in navigator) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      setCurrentPosition,
      positionError,
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 0,
      }
    );

    function setCurrentPosition(position) {
      //   document.querySelector(".accuracy").innerHTML = position.coords.accuracy;
      //   document.querySelector(".altitude").innerHTML = position.coords.altitude;
      //   document.querySelector(".altitudeAccuracy").innerHTML =
      //     position.coords.altitudeAccuracy;
      //   document.querySelector(".heading").innerHTML = position.coords.heading;
      //   document.querySelector(".latitude").innerHTML = position.coords.latitude;
      //   document.querySelector(".longitude").innerHTML =
      //     position.coords.longitude;
      //   document.querySelector(".speed").innerHTML = position.coords.speed;
      console.log(position);
    }

    function positionError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("User denied the request for Geolocation.");
          break;

        case error.POSITION_UNAVAILABLE:
          console.error("Location information is unavailable.");
          break;

        case error.TIMEOUT:
          console.error("The request to get user location timed out.");
          break;

        case error.UNKNOWN_ERROR:
          console.error("An unknown error occurred.");
          break;
      }
    }
  }
} else {
  console.log("navigation not supported");
}
