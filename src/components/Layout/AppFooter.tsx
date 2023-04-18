import { useTitle } from '@/utils/metas';
import {
  ActionIcon,
  Anchor,
  Breadcrumbs,
  Flex,
  Footer,
  Text,
} from '@mantine/core';
import { IconBrandTwitterFilled } from '@tabler/icons-react';
import Link from 'next/link';

const AppFooter = () => {
  const title = useTitle();

  const items = [
    {
      title: 'NextMantineExample',
      href: '/',
    },
    {
      title,
    },
  ].map((item) => {
    if (item.href) {
      return (
        <Anchor key={item.title} component={Link} href="/">
          {item.title}
        </Anchor>
      );
    } else if (item.title) {
      return <Text key={item.title}>{item.title}</Text>;
    } else {
      return null;
    }
  });

  return (
    <Footer withBorder fixed height={56}>
      <Flex align="center" justify="space-between" h="100%" px="md">
        <Breadcrumbs>{items}</Breadcrumbs>
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
