import { Box, Image, Overlay } from "@mantine/core";
import { useHover } from "@mantine/hooks";

import { FALLBACK_IMAGE_URL } from "@/constants/commons";

import { DsmImageWithOverlayPropsType } from "./types";

import classes from "./index.module.css";

export const DsmImageWithOverlay = (props: DsmImageWithOverlayPropsType) => {
  const {
    imgIndex,
    overlayChildren,
    wrapperProps = {},
    imageProps = {},
    overlayProps = {},
  } = props;

  const { hovered, ref } = useHover();

  return (
    <Box
      ref={ref}
      className={classes.wrapper}
      style={{ borderRadius: imgIndex ? "8px" : "6px" }}
      {...wrapperProps}
    >
      <Image
        radius="md"
        className={classes.image}
        fallbackSrc={FALLBACK_IMAGE_URL}
        {...imageProps}
      />
      {hovered && (
        <Overlay
          color="dark"
          blur={2}
          backgroundOpacity={0.4}
          className={classes.overlay}
          {...overlayProps}
        >
          {overlayChildren}
        </Overlay>
      )}
    </Box>
  );
};
