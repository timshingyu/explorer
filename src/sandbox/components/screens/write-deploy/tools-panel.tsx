import React from 'react';
import { Flex, Button } from '@stacks/ui';
import { ContractName } from '@sandbox/components/views/deploy/contract-name';
import { Caption } from '@components/typography';

export const WriteAndDeployTools: React.FC = props => (
  <Flex flexDirection="column" flexGrow={1} p="base" {...props}>
    <Caption mb="tight">Contract name</Caption>
    <ContractName />
    <Button width="100%" mt="auto">
      Deploy
    </Button>
  </Flex>
);
