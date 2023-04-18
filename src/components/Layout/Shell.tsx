import { AppShell, Center } from '@mantine/core';
import React, { ReactNode } from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const Shell = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell padding="none" footer={<AppFooter />}>
      <Center h="calc(100% - 56px)" p="md">
        {children}
      </Center>
    </AppShell>
  );
};

export default Shell;
