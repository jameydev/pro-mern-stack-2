"use strict";

var continents = ['Africa', 'America', 'Asia', 'Austrailia', 'Europe'];
var helloContinents = Array.from(continents, function (c) {
  return "Hello ".concat(c, "!");
});
var message = helloContinents.join(' ');
var element = /*#__PURE__*/React.createElement("div", {
  title: "Outer Div"
}, /*#__PURE__*/React.createElement("h1", null, message));
ReactDOM.render(element, document.querySelector('#content'));