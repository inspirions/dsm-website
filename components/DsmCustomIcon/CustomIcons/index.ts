import { lazy } from "react";

//arrange icons in ascending order by name
const AddressBookIcon = lazy(() => import("./AddressBookIcon"));
const ApplyFilterIcon = lazy(() => import("./ApplyFilterIcon"));
const ArrowRightIcon = lazy(() => import("./ArrowRightIcon"));
const BriefcaseIcon = lazy(() => import("./BriefcaseIcon"));
const CancelIcon = lazy(() => import("./CancelIcon"));
const ClockIcon = lazy(() => import("./ClockIcon"));
const ClearFilterIcon = lazy(() => import("./ClearFilterIcon"));
const CloudUploadIcon = lazy(() => import("./CloudUploadIcon"));
const DeleteIcon = lazy(() => import("./DeleteIcon"));
const DescriptionIcon = lazy(() => import("./DescriptionIcon"));
const GridViewIcon = lazy(() => import("./GridViewIcon"));
const HomeCheckIcon = lazy(() => import("./HomeCheckIcon"));
const HomeShareIcon = lazy(() => import("./HomeShareIcon"));
const InfoIcon = lazy(() => import("./InfoIcon"));
const ListViewIcon = lazy(() => import("./ListViewIcon"));
const LogoutIcon = lazy(() => import("./LogoutIcon"));
const FilterIcon = lazy(() => import("./FilterIcon"));
const MessagePlusIcon = lazy(() => import("./MessagePlusIcon"));
const OpenEyeIcon = lazy(() => import("./OpenEyeIcon"));
const PencilIcon = lazy(() => import("./PencilIcon"));
const PlusIcon = lazy(() => import("./PlusIcon"));
const PointIcon = lazy(() => import("./PointIcon"));
const SearchIcon = lazy(() => import("./SearchIcon"));
const SelectorIcon = lazy(() => import("./SelectorIcon"));
const SettingsIcon = lazy(() => import("./SettingsIcon"));
const TeamsIcon = lazy(() => import("./TeamsIcon"));
const TickIcon = lazy(() => import("./TickIcon"));
const UserCheckIcon = lazy(() => import("./UserCheckIcon"));
const UserIcon = lazy(() => import("./UserIcon"));
const UserGroupIcon = lazy(() => import("./UserGroupIcon"));
const UserExclamationIcon = lazy(() => import("./UserExclamationIcon"));
const UserPlusIcon = lazy(() => import("./UserPlusIcon"));
const CalendarIcon = lazy(() => import("./CalendarIcon"));
const OranizationIcon = lazy(() => import("./OranizationIcon"));

export const ICON_LIST = {
  addressBook: AddressBookIcon,
  applyFilter: ApplyFilterIcon,
  arrowRight: ArrowRightIcon,
  briefcase: BriefcaseIcon,
  cancel: CancelIcon,
  clock: ClockIcon,
  close: CancelIcon,
  delete: DeleteIcon,
  description: DescriptionIcon,
  grid: GridViewIcon,
  homeCheck: HomeCheckIcon,
  homeShare: HomeShareIcon,
  info: InfoIcon,
  addMessage: MessagePlusIcon,
  list: ListViewIcon,
  logout: LogoutIcon,
  filter: FilterIcon,
  openEye: OpenEyeIcon,
  organization: OranizationIcon,
  pencil: PencilIcon,
  plus: PlusIcon,
  point: PointIcon,
  clearFilter: ClearFilterIcon,
  search: SearchIcon,
  selector: SelectorIcon,
  settings: SettingsIcon,
  teams: TeamsIcon,
  tick: TickIcon,
  upload: CloudUploadIcon,
  user: UserIcon,
  userCheck: UserCheckIcon,
  userExclamation: UserExclamationIcon,
  userGroup: UserGroupIcon,
  userPlus: UserPlusIcon,
  calendar: CalendarIcon,
};
