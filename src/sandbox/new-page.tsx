import React from 'react';
import { color, Grid, Flex } from '@stacks/ui';
import { border } from '@common/utils';
import { SideNav } from '@sandbox/components/side-nav';
import { useRecoilValue } from 'recoil';
import { sandboxRouteState } from '@sandbox/store/sandbox';
import { WriteAndDeployView } from '@sandbox/components/screens/write-deploy/view';
import { WriteAndDeployTools } from '@sandbox/components/screens/write-deploy/tools-panel';
import { SandboxHeader } from '@sandbox/components/header';

const View = () => {
  const route = useRecoilValue(sandboxRouteState);

  switch (route) {
    case 'deploy':
      return <WriteAndDeployView />;
  }
};
const ToolsPanel = () => {
  const route = useRecoilValue(sandboxRouteState);

  switch (route) {
    case 'deploy':
      return <WriteAndDeployTools />;
  }
};

export const SandboxPageContent: React.FC = () => {
  return (
    <Flex
      border={border()}
      borderRadius="12px"
      bg={color('bg')}
      flexDirection="column"
      flexGrow={1}
      flexShrink={1}
    >
      <SandboxHeader />
      <Grid
        gridTemplateColumns="72px 350px 1fr"
        minHeight="calc(100vh - 183px)"
        flexGrow={1}
        flexShrink={1}
      >
        <SideNav />
        <ToolsPanel />
        <View />
      </Grid>
    </Flex>
  );
};
