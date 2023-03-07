# NFT Collections Sales Tracker - API

Users by wallet can store their Favorite NFTs collections in the DB (MySQL). When they use the API passing their wallet as parameter they will get the last sales in the last 1000 Blocks for the NFT collections marked as Favorite.

By now, the wallets in the Data Base are:

- 0x4B229Ed260cc6AA763c17C412162d46f2b4caF52
- 0xA878DA5bec8863eB536D8A740dd3f45a1c6b9284

### Tech Stack used

- Node.js
- Express
- MySQL
- Ethers.js
- Infura
- Railway

### End point usage (GET)

- Base URL

```
https://nft-fav-projects.up.railway.app/
```

- End point

```
/api/likes/<WALLET SET IN THE DB>
```

- Example to test:
  https://nft-fav-projects.up.railway.app/api/likes/0x4B229Ed260cc6AA763c17C412162d46f2b4caF52

- Response:

```
  {
    "collectionName": "BoredApeYachtClub",
    "nftId": {
      "type": "BigNumber",
      "hex": "0x20ba"
    },
    "from": "0xed2ab4948bA6A909a7751DEc4F34f303eB8c7236",
    "to": "0x65249532663D15a76007688A8bFa1B109973AD41",
    "value": "71.42"
  },

  {
    "collectionName": "Otherdeed",
    "nftId": {
      "type": "BigNumber",
      "hex": "0x455b"
    },
    "from": "0x771672B822a9938990e03220833D8AD15624c2bb",
    "to": "0xea144b6F776FE57c1b096D504eC3Ed3D1f955189",
    "value": "1.88"
  }
```

### Installation

```
    # Clone repo
    git clone
```

```
    # Install dependencies
    npm install
```

```
    # Run project
    npm start
```
