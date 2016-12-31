(function() {
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);

	function onDeviceReady() {
		document.getElementById("btnPhonebook").addEventListener("click", function() {
			navigator.contactsPhoneNumbers.list(function(contacts) {
				// console.log(contacts.length + ' contacts found');
				$("#displayPhonebookLength").html(contacts.length + ' contacts found');
				for (var i = 0; i < contacts.length; i++) {
					console.log(contacts[i].id + " - " + contacts[i].displayName);
					for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
						var phone = contacts[i].phoneNumbers[j];
						// console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber + ")");
						$("#displayPhonebook").html("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber + ")");
					}
				}
			}, function(error) {
				console.error(error);
			});
		});
	};

})();
