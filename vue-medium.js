Vue.directive('medium', {
  bind: function() {
    this.medium = new Medium({ element: this.el });
  }
});