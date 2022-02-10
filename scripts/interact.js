const {API_KEY,PRIVATE_KEY,CONTRACT_ADDRESS} = process.env;

// To access the abi
const contract = require("../artifacts/contracts/Hello.sol/Hello.json");

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network = "rinkeby", API_KEY);
// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract instance
const helloContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  const message = await helloContract.message();
  console.log("The message is: " + message);

  console.log("Updating the message...");
  const txn = await helloContract.setMessage("Thank You Jesus");
  await txn.wait();
  const newMessage = await helloContract.getMessage();
  console.log("Updated message: " + newMessage);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });