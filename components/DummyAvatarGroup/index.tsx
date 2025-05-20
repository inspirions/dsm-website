import { Avatar } from "@mantine/core";

const AVATAR_LIST = [
  {
    id: 1,
    name: "Jane Doe",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300",
    radius: "xl",
    size: "56px",
    style: { zIndex: 1 },
  },
  {
    id: 2,
    name: "Amara Johnson",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&h=300",
    radius: "50%",
    size: "72px",
    style: { zIndex: 2 },
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
    radius: "xl",
    size: "56px",
    style: { zIndex: 1 },
  },
];

export const DummyAvatarGroup = () => {
  return (
    <Avatar.Group
      spacing="lg"
      style={{ justifyContent: "center", alignItems: "center", paddingLeft: 0 }}
    >
      {AVATAR_LIST.map(({ id, ...restProps }) => (
        <Avatar key={id} {...restProps} />
      ))}
    </Avatar.Group>
  );
};
