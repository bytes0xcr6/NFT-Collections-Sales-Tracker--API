require("dotenv").config();
const ethers = require("ethers");
const { ABI } = require("./NFTabi.js");
const rangeOfBlocks = 1000;
const BoredApe = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
const OtherSide = "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${process.env.INFURA_API}`
);

const getSales = async (collection) => {
  const NFT = new ethers.Contract(collection, ABI, provider);
  const blockNumber = await provider.getBlockNumber();
  const transferEvent = await NFT.queryFilter(
    "Transfer",
    blockNumber - rangeOfBlocks,
    blockNumber
  );

  const name = await NFT.name();
  const details = [];
  const values = [];

  try {
    for (let i = 0; i < blockNumber - rangeOfBlocks; i++) {
      const detail = transferEvent[i].args;
      const { value } = await provider.getTransaction(
        transferEvent[i].transactionHash
      );

      if (value > 0) {
        details.push(detail);
        values.push(value);
      }
    }
  } catch (err) {
    console.log(
      `\n- No more sales in the last ${rangeOfBlocks} blocks! ${values.length} sales found in the Collection ${name}`
    );
  }
  return { details, values, name };
};

// getSales(BoredApe);

module.exports = { getSales };
