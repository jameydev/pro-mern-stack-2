const continents = ['Africa', 'America', 'Asia', 'Austrailia', 'Europe'];
const helloContinents = Array.from(continents, function (c) {
  return `Hello ${c}!`;
});
const message = helloContinents.join(' ');
const element = /*#__PURE__*/React.createElement("div", {
  title: "Outer Div"
}, /*#__PURE__*/React.createElement("h1", null, message));
ReactDOM.render(element, document.querySelector('#content'));