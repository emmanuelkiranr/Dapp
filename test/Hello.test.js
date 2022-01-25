// // test for the Hello.sol contract

const { expect } = require("chai");
// const { ethers } = require("ethers")

describe("Unit testing Hello.sol", function() {
  it("The message should be same", async function() {
    const Hello = await ethers.getContractFactory("Hello");
    const hello = await Hello.deploy("Unit testing");
    await hello.deployed();
    expect (await hello.getMessage()).to.equal("Unit testing");
  });

  it("Should update the value", async function() {
    const Hello = await ethers.getContractFactory("Hello");
    const hello = await Hello.deploy("Unit testing");
    await hello.deployed();

    await hello.setMessage("Message updated");
    expect(await hello.getMessage()).to.equal("Message updated");
  })
});