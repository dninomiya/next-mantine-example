import { AppShell } from '@mantine/core';
import React, { ReactNode } from 'react';
import AppHeader from './AppHeader';

const Shell = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell padding="sm" header={<AppHeader />}>
      {children}
    </AppShell>
  );
};

export default Shell;
