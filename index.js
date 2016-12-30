(function() {
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);

	function onDeviceReady() {
		document.getElementById("btnLogin").addEventListener("click", function() {
			navigator.geolocation.getCurrentPosition(onSuccess, onError, {
				enableHighAccuracy : true
			});

		});

	};

	var onSuccess = function(position) {
		alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n');
	};

	function onError(error) {
		alert('code:' + error.code + '\n' + 'message' + error.message + '\n');
	};

})();
