var mymap = L.map('mapid').setView([37.7749, -122.4194], 10);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);
            L.marker([37.7749, -122.4194]).addTo(mymap)
		    .bindPopup('our farm')
		    .openPopup();
$(window).trigger('resize');   


  function topFunction() 
  {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  } 