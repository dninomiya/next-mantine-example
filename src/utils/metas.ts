import { useRouter } from 'next/router';

export const useTitle = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  return metas[currentPath]?.title;
};

const metas: {
  [key: string]: {
    title: string;
  };
} = {
  '/avatar-editor': {
    title: 'アバターエディター',
  },
};
