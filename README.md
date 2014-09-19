akt.js
------

Akt is a small library that simplifies the task of passing data from views to
event handlers. Its aim is to experiment with the concept of "event selectors"
and to make data transfer (from HTML attributes to JS) intuitive. It makes use
of Michael Best's JavaScript Object Literal Parser
(https://github.com/mbest/js-object-literal-parse) and has a jQuery dependency.

### Usage

Include the `akt.js` script in your project.
    ...
    <script src="vendor/jquery.min.js"></script>
    <script src="js/akt.js"></script>
    ...

Use the `data-akt-s` attribute to specify an event selector and the
`data-akt-d` attribute to specify the data you'd like to pass to associated
event handlers.

    ...
    <button data-akt-s="the-btn" data-akt-d="name: 'george', num: 22">
    ...

Use Akt's on method to bind an event handler to a selector-event pair.

    $(document).ready(function() {
    
      Akt.on('the-btn', 'click', function(e, data) {
        alert("NAME: " + data.name); 
        alert("NUMBER: " + data.num); 
      });

    });

You have access to both the associated `event` and `data` within the callback
function.
