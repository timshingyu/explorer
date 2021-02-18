import React from 'react';
import { Flex, Box, Button } from '@stacks/ui';
import { border } from '@common/utils';

import type { FlexProps } from '@stacks/ui';

export const SandboxHeader: React.FC<FlexProps> = props => (
  <Flex alignItems="center" justifyContent="space-between" borderBottom={border()} {...props}>
    <Box p="base">Stacks Sandbox</Box>
    <Flex px="base">
      <Button size="sm">Sign in</Button>
    </Flex>
  </Flex>
);
