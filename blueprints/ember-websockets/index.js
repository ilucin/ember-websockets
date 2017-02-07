module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var installContext = this;

    return this.addPackageToProject('mock-socket');
  }
};
