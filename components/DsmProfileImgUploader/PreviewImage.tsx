import { Box, LoadingOverlay } from "@mantine/core";

import { DsmIconButton } from "../DsmIconButton";
import { DsmImageWithOverlay } from "../DsmImageWithOverlay";

import classes from "./index.module.css";

export const PreviewImage = (props: {
  isLoading: boolean;
  uploadedFile: string;
  handlePreview: () => void;
  handleRemove: () => void;
}) => {
  const { isLoading, uploadedFile, handlePreview, handleRemove } = props;
  return (
    <Box h={"100%"} pos="relative" display={uploadedFile ? "block" : "none"}>
      <LoadingOverlay
        visible={isLoading}
        zIndex={99}
        overlayProps={{
          radius: "50%",
          blur: 2,
          bg: "var(--mantine-color-gray-3)",
          opacity: 0.4,
        }}
        loaderProps={{ type: "bars" }}
      />
      <DsmImageWithOverlay
        imgIndex={0}
        imageProps={{
          src: uploadedFile,
          alt: "Profile",
          className: classes.imageOverlayImage,
        }}
        wrapperProps={{
          className: classes.imageOverlayWrapper,
        }}
        overlayProps={{
          className: classes.imageOverlay,
        }}
        overlayChildren={
          <>
            <DsmIconButton
              variant="filled"
              iconProps={{ icon: "openEye", size: 44 }}
              tooltipProps={{ label: "Preview" }}
              onClick={handlePreview}
            />
            <DsmIconButton
              variant="filled"
              iconProps={{ icon: "delete", size: 44 }}
              tooltipProps={{ label: "Remove" }}
              onClick={handleRemove}
            />
          </>
        }
      />
    </Box>
  );
};
