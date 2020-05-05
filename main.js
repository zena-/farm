var mymap = L.map('mapid').setView([55.70926, -3.87980], 10);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);
            L.marker([55.70926, -3.87980]).addTo(mymap)
		    .bindPopup('our farm')
		    .openPopup();
$(window).trigger('resize');    