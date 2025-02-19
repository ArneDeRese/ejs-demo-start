const helpers = {
    uppie: function (inp) {
      const upper = inp.toUpperCase();
      return upper;
    },
    highlight: function (inp) {
      return ` <span
      style="background-color: yellow;">
              ${inp}
          </span>`;
    },
    emojify: function (inp) {

    },
    button: function(inp) {
        return `<button class= button>${inp}<button>`
    }
  };
  
  export default helpers;