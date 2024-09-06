import { RainbowKitProvider, getDefaultConfig, Chain, } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient, } from "@tanstack/react-query";

const glide = {
  id: 901,
  name: 'Glide Protocol',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Glide', symbol: 'GLXP', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-api.glideprotocol.xyz'] },
  },
  blockExplorers: {
    default: { name: 'Glide Explorer', url: 'https://blockchain-explorer.glideprotocol.xyz' },
  },
  contracts: {
    multicall3: {
      address: '0x505586E69A7aD03f2F96aA05927f104D790E6D41',
      blockCreated: 475955,
    },
  },
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: 'Glide Wallet',
  projectId: 'YOUR_PROJECT_ID',
  chains: [glide],
});
