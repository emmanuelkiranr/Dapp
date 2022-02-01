// // test for the Hello.sol contract

const { expect } = require("chai");
// const { ethers } = require("ethers")

describe("Hello Contract", function() {
  let Hello, hello;
  
  beforeEach(async function() {
    Hello = await ethers.getContractFactory("Hello");
    hello = await Hello.deploy("Unit testing");
    await hello.deployed();
  });

  describe("Unit testing Hello.sol", function() {
    it("The message should be same", async function() {
      expect (await hello.getMessage()).to.equal("Unit testing");
    });

    it("Should update the value", async function() {
      await hello.setMessage("Message updated");
      expect(await hello.getMessage()).to.equal("Message updated");
    });

    it("Should initialize with the value in setter method", async function(){
      await hello.setter();
      expect(await hello.getMessage()).to.equal("My first smart contract");
    });
  });
});
