import { ContainerProps } from '@mantine/core';
import { DropzoneProps } from '@mantine/dropzone';

export interface UploadedFileType {
  url: string;
  fileName: string;
}

export interface DsmProfileImgUploaderPropsType
  extends Omit<Partial<DropzoneProps>, 'onChange'> {
  storageFolder: string;
  error?: string;
  width?: number;
  height?: number;
  value?: UploadedFileType;
  wrapperProps?: ContainerProps;
  onChange?: (file: UploadedFileType) => void;
}
