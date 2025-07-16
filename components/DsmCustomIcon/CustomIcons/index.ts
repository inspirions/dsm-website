import { lazy } from "react";

//arrange icons in ascending order by name
const AddressBookIcon = lazy(() => import("./AddressBookIcon"));
const AiIcon = lazy(() => import("./AiIcon"));
const ApplyFilterIcon = lazy(() => import("./ApplyFilterIcon"));
const ArrowLeftIcon = lazy(() => import("./ArrowLeftIcon"));
const ArrowRightIcon = lazy(() => import("./ArrowRightIcon"));
const ArrowUpIcon = lazy(() => import("./ArrowUpIcon"));
const BarChartIcon = lazy(() => import("./BarChartIcon"));
const BuildingsIcon = lazy(() => import("./BuildingsIcon"));
const BriefcaseIcon = lazy(() => import("./BriefcaseIcon"));
const CalendarEventIcon = lazy(() => import("./CalendarEventIcon"));
const CalendarIcon = lazy(() => import("./CalendarIcon"));
const CalendarQuestionIcon = lazy(() => import("./CalendarQuestionIcon"));
const CancelIcon = lazy(() => import("./CancelIcon"));
const ChevronUpIcon = lazy(() => import("./ChevronUpIcon"));
const ChevronRightIcon = lazy(() => import("./ChevronRightIcon"));
const CircleCheckIcon = lazy(() => import("./CircleCheckIcon"));
const ClearFilterIcon = lazy(() => import("./ClearFilterIcon"));
const ClockIcon = lazy(() => import("./ClockIcon"));
const CloudUploadIcon = lazy(() => import("./CloudUploadIcon"));
const ContractIcon = lazy(() => import("./ContractIcon"));
const DatabaseCogIcon = lazy(() => import("./DatabaseCogIcon"));
const DataBricksIcon = lazy(() => import("./DataBricksIcon"));
const DashboardIcon = lazy(() => import("./DashboardIcon"));
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
const InventoryIcon = lazy(() => import("./InventoryIcon"));
const LinkIcon = lazy(() => import("./LinkIcon"));
const ListViewIcon = lazy(() => import("./ListViewIcon"));
const LogoutIcon = lazy(() => import("./LogoutIcon"));
const MapMarkerIcon = lazy(() => import("./MapMarkerIcon"));
const Menu2Icon = lazy(() => import("./Menu2Icon"));
const MessageIcon = lazy(() => import("./MessageIcon"));
const MessagePlusIcon = lazy(() => import("./MessagePlusIcon"));
const NewsIcon = lazy(() => import("./NewsIcon"));
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
const StarIcon = lazy(() => import("./StarIcon"));
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
const VerificationIcon = lazy(() => import("./VerificationIcon"));
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
  buildings: BuildingsIcon,
  briefcase: BriefcaseIcon,
  calendar: CalendarIcon,
  calendarEvent: CalendarEventIcon,
  calendarQuestion: CalendarQuestionIcon,
  cancel: CancelIcon,
  chevronUp: ChevronUpIcon,
  chevronRight: ChevronRightIcon,
  circleCheck: CircleCheckIcon,
  clearFilter: ClearFilterIcon,
  clock: ClockIcon,
  close: CancelIcon,
  contract: ContractIcon,
  databaseCog: DatabaseCogIcon,
  dataBricks: DataBricksIcon,
  dashboard: DashboardIcon,
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
  inventory: InventoryIcon,
  link: LinkIcon,
  list: ListViewIcon,
  logout: LogoutIcon,
  mapMarker: MapMarkerIcon,
  menu2: Menu2Icon,
  message: MessageIcon,
  news: NewsIcon,
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
  star: StarIcon,
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
  verification: VerificationIcon,
  x: XIcon,
};
