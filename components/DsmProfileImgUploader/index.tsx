import { useCallback, useEffect, useRef, useState } from "react";

import { Box, Container, Flex, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import { DsmCustomIcon } from "../DsmCustomIcon";
import { DsmIconButton } from "../DsmIconButton";
import { DsmLightBoxImage } from "../DsmLightBoxImage";

import { PreviewImage } from "./PreviewImage";

import { DsmProfileImgUploaderPropsType, UploadedFileType } from "./types";

import classes from "./index.module.css";
import { uploadFileAPI } from "@/lib/api";

const carouselProps = {
  finite: true,
  preload: 2,
  padding: "16px",
  spacing: "30%",
  imageFit: "contain",
  imageProps: {},
} as const;

export const DsmProfileImgUploader = (
  props: DsmProfileImgUploaderPropsType
) => {
  const {
    value,
    error,
    width = 200,
    height = 200,
    storageFolder,
    wrapperProps = {},
    onChange,
    ...restProps
  } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");

  const openRef = useRef<VoidFunction>(null);

  useEffect(() => {
    if (value && !uploadedFile) {
      setUploadedFile(value.url);
    }
  }, [uploadedFile, value]);

  const handleFileUpload = async (files: File[]) => {
    const formData = new FormData();
    setIsLoading(true);
    formData.append("files", files[0]);

    try {
      const response = await uploadFileAPI(storageFolder, formData);
      console.log(response);
      setIsLoading(false);
      const files = response.data as UploadedFileType[];
      const fileUrl = files[0].url;

      setUploadedFile(fileUrl);

      if (onChange) {
        onChange(files[0]);
      }
    } catch (error) {
      console.log(error);
    }

    // fetch(`${UPLOAD_FILE_API}${storageFolder}`, requestOptions)
    //   .then(handleResponse)
    //   .then((res) => {
    //     setIsLoading(false);
    //     const files = res.data as UploadedFileType[];
    //     const fileUrl = files[0].url;

    //     setUploadedFile(fileUrl);

    //     if (onChange) {
    //       onChange(files[0]);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleRemove = useCallback(() => {
    setUploadedFile("");
    if (onChange) {
      onChange({
        url: "",
        fileName: "",
      });
    }
  }, [onChange]);

  const handlePreview = useCallback(() => {
    setPreviewSrc(uploadedFile);
  }, [uploadedFile]);

  const handleClosePreview = () => {
    setPreviewSrc("");
  };

  const handleOpenFileDialog = () => {
    openRef.current?.();
  };

  return (
    <Container p={0} {...wrapperProps}>
      <Flex direction="column" gap="xs">
        <Box w={width} h={height} pos="relative">
          {uploadedFile && (
            <PreviewImage
              isLoading={isLoading}
              uploadedFile={uploadedFile}
              handlePreview={handlePreview}
              handleRemove={handleRemove}
            />
          )}
          <Dropzone
            w={width}
            h={height}
            maxFiles={1}
            openRef={openRef}
            loading={isLoading}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            classNames={{
              root: classes.dropzoneRoot,
              inner: classes.dropzoneInner,
            }}
            display={uploadedFile ? "none" : "block"}
            onDrop={handleFileUpload}
            {...restProps}
          >
            <Flex className={classes.dropzoneOptWrapper}>
              <Dropzone.Accept>
                <DsmCustomIcon icon="upload" size={42} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <DsmCustomIcon icon="cancel" size={42} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <DsmCustomIcon icon="photo" size={42} />
              </Dropzone.Idle>
              <Text ta={"center"} size="sm" mt="xs">
                Click to upload or drag and drop
              </Text>
            </Flex>
          </Dropzone>

          <Box className={classes.badgeWrapper}>
            <DsmIconButton
              variant="filled"
              iconProps={{ icon: uploadedFile ? "pencil" : "plus", size: 24 }}
              tooltipProps={{
                title: uploadedFile ? "Edit Image" : "Add Image",
              }}
              className={classes.badgeIcon}
              onClick={handleOpenFileDialog}
            />
          </Box>
        </Box>

        {error && (
          <Text c="red" size="xs">
            {error}
          </Text>
        )}
      </Flex>
      <DsmLightBoxImage
        open={!!previewSrc}
        close={handleClosePreview}
        slides={[{ src: previewSrc }]}
        carousel={carouselProps}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </Container>
  );
};
