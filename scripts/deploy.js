// contains the deploy script to deploy the contract

async function main() {
  const Hello = await ethers.getContractFactory("Hello");
  const hello = await Hello.deploy("Hello World!"); 
  await hello.deployed(); 
  console.log("Contract deployed to:", hello.address); 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });