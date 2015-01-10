akt.js
------

Akt is a small library that simplifies the task of passing data from views to
event handlers. Its aim is to experiment with the concept of "event selectors"
and to make data transfer (from HTML attributes to JS) intuitive. It makes use
of Michael Best's JavaScript Object Literal Parser
(https://github.com/mbest/js-object-literal-parse) and has no explicit
dependencies.

### Usage

Include the `akt.js` script in your project.

    ...
    <script src="js/akt.js"></script>
    ...

Use the `data-akt-s` attribute to specify an event selector and the
`data-akt-d` attribute to specify the data you'd like to pass to associated
event handlers.

    ...
    <button data-akt-s="the-btn" data-akt-d="name: 'george', num: 22">
    ...

Use Akt's `on` method to bind an event handler to a selector-event pair.

      Akt.on('the-btn', 'click', function(e, data) {
        alert("NAME: " + data.name); 
        alert("NUMBER: " + data.num); 
      });

You have access to both the associated `event` and `data` within the callback
function.

### Event Selector

The HTML `class` and `id` attributes serve many purposes, and this makes them
quite powerful. That said, it also means that they are susceptible to change.
Suppose a team member decides to adopt the BEM philosophy (which requires an
overhaul of `class` attributes application wide). Should such a change mandate
a review of existing handler binding? Probably not. The event selector is one
approach to avoiding this type of conundrum. Rather than using a `class` or
`id` when binding event handlers to the DOM, we use a special data attribute—an
attribute that has a single concern and responsibility.
