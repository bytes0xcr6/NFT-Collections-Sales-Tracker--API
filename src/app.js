require("dotenv").config();
const ethers = require("ethers");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { connector } = require("./mysql.js");
const { getSales } = require("./ethersFunctions.js");

app.get("/", (req, res) => {
  res.send("Welcome to my Server!");
});

app.get("/api/users", (req, res) => {
  connector.query("SELECT * FROM users", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.get("/api/likes/:wallet", (req, res) => {
  const wallet = req.params.wallet;

  connector.query(
    `SELECT NFT FROM NFTsLiked WHERE wallet = "${wallet}"`,
    async (err, result) => {
      if (err) {
        throw err;
      }
      console.log(
        `- Searching for the last sales of your Fav NFT collections in the last 1K Blocks...`
      );
      const results = [];

      for (let i = 0; i < result.length; i++) {
        const { details, values, name } = await getSales(result[i].NFT);

        for (let i = 0; i < values.length; i++) {
          const sale = {
            collectionName: name,
            nftId: details[i].tokenId,
            from: details[i].from,
            to: details[i].to,
            value: ethers.utils.formatEther(values[i]),
          };

          results.push(sale);
        }
      }
      res.json(results);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
