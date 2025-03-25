import { ImageProps } from "@mantine/core";

export interface DsmImageProps extends ImageProps {
  imageUrl: string;
  imageAlt?: string;
}
