const config = require("hardhat/config")

const LockJ = require("../artifacts/contracts/Lock.sol/Lock_eth.json")
const upgradeJ = require("../artifacts/contracts/ProxyAdmin.sol/ProxyAdmin.json")
config.task("test", "test", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
    const sing = await hre.ethers.getSigner();
    for (const account of accounts) {
        console.log(account.address);
    }
    //调用未升级的合约
    const Contract = new hre.ethers.Contract("0x0Fc1ce0D028A490f850F24226BF74d20899F055D", LockJ.abi, sing)
    let balance = await Contract.balance()
    console.log("balance", balance.toString());
            //初始化一次init
    // const init = await Contract.init()
    // console.log("init", init);
    // balance = await Contract.balance()
    // console.log("balance", balance.toString());
    // const deposit = await Contract.deposit(996)
    // console.log("deposit", deposit);
    // balance = await Contract.balance()
    // console.log("balance", balance.toString());
    // const withdraw = await Contract.withdraw()
    // console.log("withdraw", withdraw);
    // balance = await Contract.balance()
    // console.log("balance", balance.toString());

    //合约升级

    const Contract2 = new hre.ethers.Contract("0xf7C90A2a25dF162FCC26Aa6bf342877a81065dfc", upgradeJ.abi, sing)
    const upgrade = await Contract2.upgrade("0x0Fc1ce0D028A490f850F24226BF74d20899F055D", "0xe9d5558e2b3E705795A0a0eaE106FEdb48DC620e")
    console.log("upgrade", upgrade);

    //调用升级的合约
    const Contract3 = new hre.ethers.Contract("0x0Fc1ce0D028A490f850F24226BF74d20899F055D", LockJ.abi, sing)
    const balance1 = await Contract3.balance()
    console.log("balance 1", balance1.toString());

    const deposit2 = await Contract3.deposit(996)
    console.log("deposit2", 0);
    const balance22 = await Contract3.balance()
    console.log("balance  2", balance22.toString());
    const withdraw2 = await Contract3.withdraw()
    console.log("withdraw2", 0);
    const balance3 = await Contract3.balance()
    console.log("balance  3", balance3.toString());
    console.log("end");
});