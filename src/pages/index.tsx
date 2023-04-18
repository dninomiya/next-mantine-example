import { Container } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/avatar-editor">アバター編集モーダル</Link>
    </>
  );
}
