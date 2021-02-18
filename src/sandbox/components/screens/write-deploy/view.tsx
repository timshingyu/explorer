import React, { useRef } from 'react';
import { Box, Flex } from '@stacks/ui';

import { ClarityCodeEditor } from '@sandbox/components/clarity-editor';
import { WasmComponent } from '@sandbox/components/clarity-repl';
import { Global, css } from '@emotion/react';

import { useClarityRepl } from '@sandbox/hooks/use-clarity-repl';
import { useCodeEditor } from '@sandbox/components/code-editor/code-editor';

export const WriteAndDeployView: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { handleValidate } = useClarityRepl();
  const [codeBody] = useCodeEditor();
  return (
    <>
      <WasmComponent />
      <Global
        styles={css`
          .clarity-editor-wrapper {
            position: absolute !important;
          }
        `}
      />
      <Flex flexDirection="column" bg="ink" flexGrow={1} flexShrink={1}>
        <Flex>
          <Flex>untitled-contract.clar</Flex>
        </Flex>
        <Box size="100%" ref={ref} position="relative">
          <ClarityCodeEditor />
        </Box>
      </Flex>
    </>
  );
};
