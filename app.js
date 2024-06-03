new Vue({
  el: "#vue-app",
  methods: {
    imgSlider(anything,color) {
      document.querySelector(".starbucks").src = anything;
      this.changeCircleColour(color);
    },
    changeCircleColour(color) {
      const cirlce = document.querySelector(".circle");
      cirlce.style.background = color;
    },
  },
});
