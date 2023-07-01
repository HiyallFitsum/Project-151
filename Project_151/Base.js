// Registering component in log-component.js
AFRAME.registerComponent("base", {
  schema:{
      width: {type: "number", default: 2 },
      depth: { type: "number", default: 7 },
      height: { type: "number", default: 1.5}
  },

  init: function() {
      this.el.setAttribute("geometry", {
          primitive: "box",
          width: this.data.width,
          depth: this.data.depth,
          height: this.data.height
      });
      this.el.setAttribute("material", { color: "#500A0A"});
  }
})
