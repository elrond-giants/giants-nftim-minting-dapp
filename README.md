# Minting dApp Template

<img src=https://giants.fra1.digitaloceanspaces.com/minting-dapp-template.jpg  width="550px" alt="elrond minting dapp template banner"/>

Made by [Giants](https://elrondgiants.com) & [NF-Tim](https://nf-tim.creative-tim.com/) by [Creative Tim](https://www.creative-tim.com/)

**[Live Demo](https://mint-demo.elrondgiants.com/)**

This is a dApp template based on [erd-next-starter](https://github.com/Elrond-Giants/erd-next-starter) by [Giants](https://elrondgiants.com) & [soft-ui-dashboard-tailwind](https://github.com/creativetimofficial/soft-ui-dashboard-tailwind) by [Creative Tim](https://www.creative-tim.com/).
The Minting Smart contract used in the live demo is [elven-nft-minter-sc](https://github.com/ElvenTools/elven-nft-minter-sc) by [Julian](https://twitter.com/JulianCwirko).

It offers authentication with Maiar App, Web Wallet, Extension, and Ledger. It also includes methods to easily sign and
make
transactions, query smart contracts, and a few utility methods.

This template can be used as a starting point for any minting dApp. It comes with the most common sections like:

- Header
- About us
- NFTs Carousel
- Roadmap
- Team
- FAQ

## Getting Started

#### Clone repository

```bash
git clone https://github.com/Elrond-Giants/giants-nftim-minting-dapp.git
```

#### Install the dependencies

```bash
npm install
```

#### Set the .env file

We have included the .env.development and .env.production files, which contain just elrond-specific environment
variables.

To interact with a minting smart contract, create your .env file and set the `NEXT_PUBLIC_CONTRACT_ADDRESS`
variable.

#### Launch and explore

```bash
npm run dev
```

Open your browser, go to [http://localhost:3000](http://localhost:3000) and start exploring.

## How To's

#### Sign and send transaction

To make a transaction, simply use the hook `useTransction` and everything will be taken care for, from signing the
transaction to
status notifications.

Smart contract call:

```typescript
import { useTransaction } from "../hooks/useTransaction";
import { TransactionPayload } from "@elrondnetwork/erdjs/out";

const { makeTransaction } = useTransaction();
const txData = TransactionPayload.contractCall()
  .setFunction(new ContractFunction("SomeFunction"))
  .addArg(new BigUIntValue(10))
  .build();

await makeTransaction({
  receiver: "erd...",
  data: txData,
  value: 0.01,
});
```

#### Make query

To read data from the Smart Contract, like total number of NFTs, the price per NFT, etc, you can use a query.

```typescript
export const getTotalTokensLeft = async (): Promise<number> => {
  const { data: data } = await querySc(contractAddress, "getTotalTokensLeft", { outputType: "int" });

  return parseInt(data, 10);
};
```

## Deploy

Checkout the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details.

## Reporting Issues

We use GitHub Issues as the official bug tracker for this template. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the template.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Resources

- [Live Preview](https://mint-demo.elrondgiants.com/)
- [License Agreement](https://github.com/Elrond-Giants/giants-nftim-minting-dapp/blob/main/LICENSE)
- [Open Issues](https://github.com/Elrond-Giants/giants-nftim-minting-dapp/issues)
- [soft-ui-dashboard-tailwind](https://github.com/creativetimofficial/soft-ui-dashboard-tailwind)

## License

[GPL-3.0 license](https://github.com/Elrond-Giants/giants-nftim-minting-dapp/blob/main/LICENSE)

## Useful Links

- [Giants Website](https://elrondgiants.com/)
- [Creative Tim Website](https://www.creative-tim.com/)
- [NF-Tim Website](https://nf-tim.creative-tim.com/)
- [Giants Twitter](https://twitter.com/ElrondGiants)
- [NF-Tim Twitter](https://twitter.com/NFTimofficial)
