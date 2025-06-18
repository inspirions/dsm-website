import { notifications } from "@mantine/notifications";

import { commons } from "@/constants/commons";

const { SUCCESS } = commons;

const notificationStyle = {
  root: {
    backgroundColor: "#333",
  },
  title: {
    color: "white",
  },
  description: {
    color: "#ccc",
  },
  closeButton: {
    color: "white",
  },
};

export const useNotification = () => {
  const showNotification = (code: string, message: string) => {
    notifications.show({
      title: code === SUCCESS ? "Success" : "Error",
      message: message,
      color: code === SUCCESS ? "green" : "red",
      styles: () => notificationStyle,
    });
  };

  const showErrorNotification = () => {
    notifications.show({
      title: "Error",
      message: "An error occured",
      color: "red",
      styles: () => notificationStyle,
    });
  };

  return { showNotification, showErrorNotification };
};
