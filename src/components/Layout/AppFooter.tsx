import {
  ActionIcon,
  Anchor,
  Flex,
  Footer,
  Group,
  Image,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { IconBrandTwitterFilled } from '@tabler/icons-react';

const AppFooter = () => {
  return (
    <Footer withBorder fixed height={56}>
      <Flex align="center" justify="space-between" h="100%" px="md">
        <Anchor component={Link} href="/">
          <Group>
            <Image
              src="/logo.jpeg"
              radius={20}
              width={40}
              height={40}
              alt="logo"
            />
            <Text>NextMantineExample</Text>
          </Group>
        </Anchor>
        <ActionIcon
          component="a"
          href="https://twitter.com/d151005"
          color="#1DA1F2"
          radius={20}
          size={40}
          target="_blank"
        >
          <IconBrandTwitterFilled />
        </ActionIcon>
      </Flex>
    </Footer>
  );
};

export default AppFooter;
