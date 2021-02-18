import React from 'react';
import { Box, Grid, Stack, StxInline, StackProps, color } from '@stacks/ui';
import { border } from '@common/utils';
import { ClarityIcon } from '@sandbox/components/clarity-icon';
import { Tooltip } from '@components/tooltip';
import FunctionIcon from 'mdi-react/FunctionIcon';
import { DropIcon } from '@components/icons/drop';
import { Routes } from '@sandbox/common/types';

const navigation: {
  label: string;
  slug: Routes;
  icon: any;
}[] = [
  {
    label: 'Write & Deploy Contracts',
    slug: 'deploy',
    icon: <ClarityIcon size="24px" />,
  },
  {
    label: 'Call Functions',
    slug: 'function-call',
    icon: <Box as={FunctionIcon} size="24px" />,
  },
  {
    label: 'STX Transfer',
    slug: 'transfer',
    icon: <Box as={StxInline} size="20px" />,
  },
  {
    label: 'Testnet Faucet',
    slug: 'faucet',
    icon: <Box as={DropIcon} size="24px" />,
  },
];

export const SideNav: React.FC<StackProps> = props => (
  <Stack borderRight={border()} {...props}>
    {navigation.map(nav => (
      <Tooltip label={nav.label} placement="right" key={nav.label}>
        <Grid
          borderBottom={border()}
          size="72px"
          placeItems="center"
          justifyContent="center"
          _hover={{
            cursor: 'pointer',
            bg: color('bg-4'),
          }}
        >
          {nav.icon}
        </Grid>
      </Tooltip>
    ))}
  </Stack>
);
