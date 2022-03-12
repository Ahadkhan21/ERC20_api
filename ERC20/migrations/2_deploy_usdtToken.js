const usdtToken = artifacts.require("StoreContract");
module.exports = function(deployer) {
    deployer.deploy(usdtToken);
};