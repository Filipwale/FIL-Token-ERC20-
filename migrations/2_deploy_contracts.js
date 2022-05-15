const Filip = artifacts.require("Filip");

module.exports = function (deployer) {
  deployer.deploy(Filip, 1000000);
}; 
