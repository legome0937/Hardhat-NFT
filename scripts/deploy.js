async function main() {
  const MechaShibasNFT = await ethers.getContractFactory("MechaShibasNFT");

  // Start deployment, returning a promise that resolves to a contract object
  //0x5A6951E960d6ef43e71A2441C2966D2ff187EFCA
  // 0xfDe8193fC010901b2f047B38a3F27b8db00f5bDD
  //0x15D1080159e30982450a51B0bE48c87aeFB409EC

  //https://rinkeby.etherscan.io/address/0xfDe8193fC010901b2f047B38a3F27b8db00f5bDD#code
  //https://rinkeby.etherscan.io/address/0x15D1080159e30982450a51B0bE48c87aeFB409EC#code
  const myNFT = await MechaShibasNFT.deploy("MechaShibasNFT", "MSNFT", "", "");
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
