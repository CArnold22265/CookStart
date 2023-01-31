export default (function () {
  const favNum = 23;
  const favColor = "royal blue";
  const name = "Christopher";

  const intro = `Hello world. My name is ${name}, and I like the color ${favColor}. My lucky number is ${favNum}`;

  return {
    favNum,
    name,
    intro,
  };
})();
