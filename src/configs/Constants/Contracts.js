import { CHAIN_ID } from "."

const { ETH_MAINNET, ETH_TESTNET } = CHAIN_ID

export const contractAddresses = {
  [ETH_MAINNET]: {
    address: "0xbA23800E0247482DEB2e39A11a44720515e748fA",
    explorerUrl:
      "https://etherscan.io/token/0x7b9C9C846a5a9ADaAab0B6cc224f9AF47405F721",
  },
  [ETH_TESTNET]: {
    address: "0x8e5bb9Ffa972D6982125D52F01Da0470D728366b",
    explorerUrl:
      "https://testnet.bscscan.com/address/0x8e5bb9Ffa972D6982125D52F01Da0470D728366b",
  },
}
