import { notifications } from "@mantine/notifications";

import { commons } from "@/constants/commons";

const { SUCCESS } = commons;

export const useNotification = () => {
  const showNotification = (code: string, message: string) => {
    notifications.show({
      title: code === SUCCESS ? "Success" : "Error",
      message: message,
      color: code === SUCCESS ? "green" : "red",
    });
  };

  const showErrorNotification = () => {
    notifications.show({
      title: "Error",
      message: "An error occured",
      color: "red",
    });
  };

  return { showNotification, showErrorNotification };
};
