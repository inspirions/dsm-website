import { lazy } from "react";

//arrange icons in ascending order by name
const AddressBookIcon = lazy(() => import("./AddressBookIcon"));
const AiIcon = lazy(() => import("./AiIcon"));
const ApplyFilterIcon = lazy(() => import("./ApplyFilterIcon"));
const ArrowLeftIcon = lazy(() => import("./ArrowLeftIcon"));
const ArrowRightIcon = lazy(() => import("./ArrowRightIcon"));
const ArrowUpIcon = lazy(() => import("./ArrowUpIcon"));
const BarChartIcon = lazy(() => import("./BarChartIcon"));
const BriefcaseIcon = lazy(() => import("./BriefcaseIcon"));
const CalendarIcon = lazy(() => import("./CalendarIcon"));
const CancelIcon = lazy(() => import("./CancelIcon"));
const ChevronUpIcon = lazy(() => import("./ChevronUpIcon"));
const ChevronRightIcon = lazy(() => import("./ChevronRightIcon"));
const ClearFilterIcon = lazy(() => import("./ClearFilterIcon"));
const ClockIcon = lazy(() => import("./ClockIcon"));
const CloudUploadIcon = lazy(() => import("./CloudUploadIcon"));
const DeleteIcon = lazy(() => import("./DeleteIcon"));
const DescriptionIcon = lazy(() => import("./DescriptionIcon"));
const EmailIcon = lazy(() => import("./EmailIcon"));
const FilterIcon = lazy(() => import("./FilterIcon"));
const GridViewIcon = lazy(() => import("./GridViewIcon"));
const HandShakeIcon = lazy(() => import("./HandShakeIcon"));
const HomeCheckIcon = lazy(() => import("./HomeCheckIcon"));
const HomeShareIcon = lazy(() => import("./HomeShareIcon"));
const HourGlassIcon = lazy(() => import("./HourGlassIcon"));
const InfoIcon = lazy(() => import("./InfoIcon"));
const LinkIcon = lazy(() => import("./LinkIcon"));
const ListViewIcon = lazy(() => import("./ListViewIcon"));
const LogoutIcon = lazy(() => import("./LogoutIcon"));
const MapMarkerIcon = lazy(() => import("./MapMarkerIcon"));
const Menu2Icon = lazy(() => import("./Menu2Icon"));
const MessageIcon = lazy(() => import("./MessageIcon"));
const MessagePlusIcon = lazy(() => import("./MessagePlusIcon"));
const NoteIcon = lazy(() => import("./NoteIcon"));
const OpenEyeIcon = lazy(() => import("./OpenEyeIcon"));
const OranizationIcon = lazy(() => import("./OranizationIcon"));
const PencilIcon = lazy(() => import("./PencilIcon"));
const PhotoIcon = lazy(() => import("./PhotoIcon"));
const PhoneIcon = lazy(() => import("./PhoneIcon"));
const PlusIcon = lazy(() => import("./PlusIcon"));
const PointIcon = lazy(() => import("./PointIcon"));
const SearchIcon = lazy(() => import("./SearchIcon"));
const SelectorIcon = lazy(() => import("./SelectorIcon"));
const SettingsIcon = lazy(() => import("./SettingsIcon"));
const SkipIcon = lazy(() => import("./SkipIcon"));
const StickerIcon = lazy(() => import("./StickerIcon"));
const TeamsIcon = lazy(() => import("./TeamsIcon"));
const TickIcon = lazy(() => import("./TickIcon"));
const TrashIcon = lazy(() => import("./TrashIcon"));
const UserCheckIcon = lazy(() => import("./UserCheckIcon"));
const UserExclamationIcon = lazy(() => import("./UserExclamationIcon"));
const UserGroupIcon = lazy(() => import("./UserGroupIcon"));
const UserIcon = lazy(() => import("./UserIcon"));
const UserPlusIcon = lazy(() => import("./UserPlusIcon"));
const UsersIcon = lazy(() => import("./UsersIcon"));
const XIcon = lazy(() => import("./XIcon"));

export const ICON_LIST = {
  addressBook: AddressBookIcon,
  addMessage: MessagePlusIcon,
  ai: AiIcon,
  applyFilter: ApplyFilterIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowUp: ArrowUpIcon,
  barChart: BarChartIcon,
  briefcase: BriefcaseIcon,
  calendar: CalendarIcon,
  cancel: CancelIcon,
  chevronUp: ChevronUpIcon,
  chevronRight: ChevronRightIcon,
  clearFilter: ClearFilterIcon,
  clock: ClockIcon,
  close: CancelIcon,
  delete: DeleteIcon,
  description: DescriptionIcon,
  email: EmailIcon,
  filter: FilterIcon,
  grid: GridViewIcon,
  handShake: HandShakeIcon,
  homeCheck: HomeCheckIcon,
  homeShare: HomeShareIcon,
  hourGlass: HourGlassIcon,
  info: InfoIcon,
  link: LinkIcon,
  list: ListViewIcon,
  logout: LogoutIcon,
  mapMarker: MapMarkerIcon,
  menu2: Menu2Icon,
  message: MessageIcon,
  note: NoteIcon,
  openEye: OpenEyeIcon,
  organization: OranizationIcon,
  pencil: PencilIcon,
  photo: PhotoIcon,
  phone: PhoneIcon,
  plus: PlusIcon,
  point: PointIcon,
  search: SearchIcon,
  selector: SelectorIcon,
  settings: SettingsIcon,
  skip: SkipIcon,
  sticker: StickerIcon,
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
  x: XIcon,
};
