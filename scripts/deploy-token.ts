import { ethers } from "hardhat";

async function main() {
  const tokenContract = await ethers.getContractFactory("FriggToken");

  const TOKEN_MULTISIG = process.env.TOKEN_MULTISIG!;
  const ROUTER_ADDRESS = process.env.ROUTER_ADDRESS!;
  const NAME = process.env.NAME!;
  const SYMBOL = process.env.SYMBOL!;
  const AMOUNT = process.env.AMOUNT!;
  const TERMS = process.env.TERMS!;

  const friggToken = await tokenContract.deploy(
    TOKEN_MULTISIG,
    ROUTER_ADDRESS,
    NAME,
    SYMBOL,
    AMOUNT,
    TERMS
  );

  await friggToken.deployed();

  console.log(`Frigg Token deployed: ${process.env.ETHERSCAN_URL}address/${friggToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
