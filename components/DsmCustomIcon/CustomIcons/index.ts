import { lazy } from "react";

//arrange icons in ascending order by name
const AddressBookIcon = lazy(() => import("./AddressBookIcon"));
const ApplyFilterIcon = lazy(() => import("./ApplyFilterIcon"));
const ArrowLeftIcon = lazy(() => import("./ArrowLeftIcon"));
const ArrowRightIcon = lazy(() => import("./ArrowRightIcon"));
const BarChartIcon = lazy(() => import("./BarChartIcon"));
const BriefcaseIcon = lazy(() => import("./BriefcaseIcon"));
const CalendarIcon = lazy(() => import("./CalendarIcon"));
const CancelIcon = lazy(() => import("./CancelIcon"));
const ClearFilterIcon = lazy(() => import("./ClearFilterIcon"));
const ClockIcon = lazy(() => import("./ClockIcon"));
const CloudUploadIcon = lazy(() => import("./CloudUploadIcon"));
const DeleteIcon = lazy(() => import("./DeleteIcon"));
const DescriptionIcon = lazy(() => import("./DescriptionIcon"));
const FilterIcon = lazy(() => import("./FilterIcon"));
const GridViewIcon = lazy(() => import("./GridViewIcon"));
const HomeCheckIcon = lazy(() => import("./HomeCheckIcon"));
const HomeShareIcon = lazy(() => import("./HomeShareIcon"));
const InfoIcon = lazy(() => import("./InfoIcon"));
const ListViewIcon = lazy(() => import("./ListViewIcon"));
const LogoutIcon = lazy(() => import("./LogoutIcon"));
const MessageIcon = lazy(() => import("./MessageIcon"));
const MessagePlusIcon = lazy(() => import("./MessagePlusIcon"));
const OpenEyeIcon = lazy(() => import("./OpenEyeIcon"));
const OranizationIcon = lazy(() => import("./OranizationIcon"));
const PencilIcon = lazy(() => import("./PencilIcon"));
const PlusIcon = lazy(() => import("./PlusIcon"));
const PointIcon = lazy(() => import("./PointIcon"));
const SearchIcon = lazy(() => import("./SearchIcon"));
const SelectorIcon = lazy(() => import("./SelectorIcon"));
const SettingsIcon = lazy(() => import("./SettingsIcon"));
const SkipIcon = lazy(() => import("./SkipIcon"));
const TeamsIcon = lazy(() => import("./TeamsIcon"));
const TickIcon = lazy(() => import("./TickIcon"));
const TrashIcon = lazy(() => import("./TrashIcon"));
const UserCheckIcon = lazy(() => import("./UserCheckIcon"));
const UserExclamationIcon = lazy(() => import("./UserExclamationIcon"));
const UserGroupIcon = lazy(() => import("./UserGroupIcon"));
const UserIcon = lazy(() => import("./UserIcon"));
const UserPlusIcon = lazy(() => import("./UserPlusIcon"));
const UsersIcon = lazy(() => import("./UsersIcon"));

export const ICON_LIST = {
  addressBook: AddressBookIcon,
  addMessage: MessagePlusIcon,
  applyFilter: ApplyFilterIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  barChart: BarChartIcon,
  briefcase: BriefcaseIcon,
  calendar: CalendarIcon,
  cancel: CancelIcon,
  clearFilter: ClearFilterIcon,
  clock: ClockIcon,
  close: CancelIcon,
  delete: DeleteIcon,
  description: DescriptionIcon,
  filter: FilterIcon,
  grid: GridViewIcon,
  homeCheck: HomeCheckIcon,
  homeShare: HomeShareIcon,
  info: InfoIcon,
  list: ListViewIcon,
  logout: LogoutIcon,
  message: MessageIcon,
  openEye: OpenEyeIcon,
  organization: OranizationIcon,
  pencil: PencilIcon,
  plus: PlusIcon,
  point: PointIcon,
  search: SearchIcon,
  selector: SelectorIcon,
  settings: SettingsIcon,
  skip: SkipIcon,
  teams: TeamsIcon,
  tick: TickIcon,
  trash: TrashIcon,
  upload: CloudUploadIcon,
  user: UserIcon,
  userCheck: UserCheckIcon,
  userExclamation: UserExclamationIcon,
  userGroup: UserGroupIcon,
  userPlus: UserPlusIcon,
  users: UsersIcon,
};
