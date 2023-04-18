import AvatarEditor from 'react-avatar-editor';

import { AspectRatio, Button, Flex, Modal, Slider, Stack } from '@mantine/core';
import { createRef, useState } from 'react';

type Props = {
  opened: boolean;
  close: () => void;
  image: File;
  onCrop: (dataURL: string, file: File) => void;
};

const AvatarEditorModal = ({ opened, close, image, onCrop }: Props) => {
  const editor = createRef<AvatarEditor>();
  const [scale, setScale] = useState(1);

  const handleSave = () => {
    const dataURL = editor.current?.getImage().toDataURL('image/png');

    editor.current?.getImage().toBlob((blob) => {
      const file = new File([blob!], 'image', {
        type: 'image/png',
      });

      onCrop(dataURL!, file);
    });
  };

  return (
    <Modal withCloseButton={false} opened={opened} onClose={close}>
      <Stack spacing="md">
        <AspectRatio ratio={1 / 1}>
          <AvatarEditor
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
            ref={editor}
            image={image}
            border={50}
            color={[0, 0, 0, 0.6]}
            scale={scale}
          />
        </AspectRatio>

        <Slider
          onChange={(e) => setScale(e)}
          min={1}
          label={null}
          max={2}
          step={0.01}
          defaultValue={1}
        />

        <Flex gap="md">
          <Button onClick={close} variant="default" fullWidth>
            キャンセル
          </Button>
          <Button
            onClick={() => {
              handleSave();
              close();
            }}
            fullWidth
          >
            保存
          </Button>
        </Flex>
      </Stack>
    </Modal>
  );
};

export default AvatarEditorModal;
