import { ChainID } from '@stacks/transactions';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const {
  NEXT_PUBLIC_DEFAULT_POLLING_INTERVAL,
  NEXT_PUBLIC_SITE_NOTICE_BANNER_LABEL,
  NEXT_PUBLIC_SITE_NOTICE_BANNER_MESSAGE,
  NEXT_PUBLIC_DEPLOYMENT_URL,
  NEXT_PUBLIC_LEGACY_EXPLORER_API_SERVER,
  NEXT_PUBLIC_CONNECT_AUTH_ORIGIN,
  NEXT_PUBLIC_TESTNET_API_SERVER,
  NEXT_PUBLIC_MAINNET_API_SERVER,
  NEXT_PUBLIC_FATHOM_ID,
} = publicRuntimeConfig;

const getNumber = (query?: string): number | undefined =>
  query && typeof parseInt(query) === 'number' ? parseInt(query) : undefined;

export const DEFAULT_POLLING_INTERVAL =
  getNumber(
    NEXT_PUBLIC_DEFAULT_POLLING_INTERVAL || process.env.NEXT_PUBLIC_DEFAULT_POLLING_INTERVAL
  ) || 10000; // 10 seconds :c

export const TESTNET_CHAIN_ID = ChainID.Testnet;
export const MAINNET_CHAIN_ID = ChainID.Mainnet;

export const IS_DEV = process.env.NODE_ENV !== 'production';
export const IS_BROWSER = typeof document !== 'undefined';

export const STACKS_EXPLORER_APP_ICON =
  'https://blockstack-www.imgix.net/stacks-explorer-icon.png?auto=format&w=72';

export const DEFAULT_STATUS_ENDPOINT = '/extended/v1/status';
export const DEFAULT_V2_INFO_ENDPOINT = '/v2/info';

export const SITE_NOTICE_BANNER_LABEL =
  NEXT_PUBLIC_SITE_NOTICE_BANNER_LABEL || process.env.NEXT_PUBLIC_SITE_NOTICE_BANNER_LABEL;

export const SITE_NOTICE_BANNER_MESSAGE =
  NEXT_PUBLIC_SITE_NOTICE_BANNER_MESSAGE || process.env.NEXT_PUBLIC_SITE_NOTICE_BANNER_MESSAGE;
export const SITE_NOTICE_ENABLED = SITE_NOTICE_BANNER_LABEL && SITE_NOTICE_BANNER_MESSAGE;

export const APP_DETAILS = {
  name: 'Stacks Explorer',
  icon: STACKS_EXPLORER_APP_ICON,
};
export const DEPLOYMENT_URL =
  NEXT_PUBLIC_DEPLOYMENT_URL ||
  process.env.NEXT_PUBLIC_DEPLOYMENT_URL ||
  `https://${process.env.VERCEL_URL}`;

export const LEGACY_EXPLORER_API_SERVER =
  NEXT_PUBLIC_LEGACY_EXPLORER_API_SERVER ||
  process.env.NEXT_PUBLIC_LEGACY_EXPLORER_API_SERVER ||
  'https://explorer-api.legacy.blockstack.org';

export const CONNECT_AUTH_ORIGIN =
  NEXT_PUBLIC_CONNECT_AUTH_ORIGIN ||
  process.env.NEXT_PUBLIC_CONNECT_AUTH_ORIGIN ||
  'https://pr-725.app.stacks.engineering';

export const DEFAULT_TESTNET_SERVER =
  NEXT_PUBLIC_TESTNET_API_SERVER ||
  process.env.NEXT_PUBLIC_TESTNET_API_SERVER ||
  'https://stacks-node-api.xenon.blockstack.org';

export const DEFAULT_MAINNET_SERVER =
  NEXT_PUBLIC_MAINNET_API_SERVER ||
  process.env.NEXT_PUBLIC_MAINNET_API_SERVER ||
  'https://stacks-node-api.stacks.co';

export const NETWORK_LIST_COOKIE = 'STACKS_EXPLORER_NETWORK_LIST';
export const NETWORK_CURRENT_INDEX_COOKIE = 'STACKS_EXPLORER_NETWORK_CURRENT_INDEX';
export const DEFAULT_TESTNET_INDEX = 1;
export const DEFAULT_MAINNET_INDEX = 0;
export const DEFAULT_NETWORK_INDEX = DEFAULT_MAINNET_INDEX;

export const DEFAULT_NETWORK_LIST = [
  {
    label: 'stacks.co',
    url: DEFAULT_MAINNET_SERVER,
  },
  {
    label: 'stacks.co',
    url: DEFAULT_TESTNET_SERVER,
  },
  {
    label: 'localhost',
    url: 'http://localhost:3999',
  },
];

export const FATHOM_ID = 'YAKFSIOZ' || NEXT_PUBLIC_FATHOM_ID || process.env.NEXT_PUBLIC_FATHOM_ID;

export enum MODALS {
  SEARCH = 'modals/search',
  NETWORK = 'modals/add-network',
  DIFFERENT_NETWORK = 'modals/different-network',
  UNLOCKING_SCHEDULE = 'modals/unlocking-schedule',
}

type ReverseMap<T extends Record<keyof T, any>> = {
  [V in T[keyof T]]: {
    [K in keyof T]: T[K] extends V ? K : never;
  }[keyof T];
};

const reverseMap: ReverseMap<typeof MODALS> = Object.entries(MODALS).reduce((rMap, [k, v]) => {
  rMap[v] = k;
  return rMap;
}, {} as any);

export type AllModals = keyof typeof reverseMap;

export const withApiServer = (apiServer: string) => (path?: string) =>
  path ? apiServer + path : apiServer;

export const POX_ADDRESS = 'SP000000000000000000002Q6VF78';
