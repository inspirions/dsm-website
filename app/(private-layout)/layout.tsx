import { AppBarView } from "./_viewModules/AppBarView";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return <AppBarView>{children}</AppBarView>;
};

export default PrivateLayout;
