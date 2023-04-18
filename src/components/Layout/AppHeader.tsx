import { Anchor, Container, Flex, Header } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const AppHeader = () => {
  return (
    <Header height={54}>
      <Flex align="center" h="100%" px="md">
        <Anchor component={Link} href="/">
          NextMantineExample
        </Anchor>
      </Flex>
    </Header>
  );
};

export default AppHeader;
