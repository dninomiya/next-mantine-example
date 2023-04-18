import AvatarEditorModal from '@/components/AvatarEditorModal';
import { Avatar, Button, FileButton, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRef, useState } from 'react';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>();
  const [opened, { open, close }] = useDisclosure(false);
  const resetRef = useRef<() => void>(null);

  return (
    <>
      <Group>
        <Avatar src={preview} size={80} radius={40} />
        <FileButton
          resetRef={resetRef}
          accept="image/png,image/jpeg"
          onChange={(file) => {
            setFile(file);
            open();
            resetRef.current?.();
          }}
        >
          {(props) => <Button {...props}>画像をアップロード</Button>}
        </FileButton>
        {preview && (
          <Button color="red" onClick={() => setPreview(null)}>
            削除
          </Button>
        )}
      </Group>

      {file && (
        <AvatarEditorModal
          onCrop={(dataURL, file) => {
            setPreview(dataURL);
            console.log(file); // CloudFlareなどのアップロードに使用
          }}
          opened={opened}
          close={close}
          image={file}
        />
      )}
    </>
  );
}
