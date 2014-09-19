(function(akt, undefined) {

  $(document).ready(function() {
  
    // Akt on an event and get immediate access to data
    akt.on('the-btn', 'click', function(e, data) {
      alert("NAME: " + data.name + " IDS: " + data.ids);  
    });

  });
  
}(Akt));
