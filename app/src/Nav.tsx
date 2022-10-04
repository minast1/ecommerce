import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

export interface NavListProps {
  title: string;
  Icon: JSX.Element;
  children?: { title: string }[];
}
const navlist: NavListProps[] = [
  {
    title: "Dashboard",
    Icon: <DashboardOutlinedIcon />,
  },
  {
    title: "Catalog",
    Icon: <StorageOutlinedIcon />,
    children: [
      { title: "Products List" },
      { title: "Product" },
      { title: "Categories List" },
      { title: "Category" },
    ],
  },
  {
    title: "Customers",
    Icon: <PeopleAltOutlinedIcon />,
    children: [{ title: "Customer List" }, { title: "Customer" }],
  },
  {
    title: "Orders",
    Icon: <ShoppingCartOutlinedIcon />,
    children: [{ title: "Order List" }, { title: "Order Details" }],
  },
  {
    title: "Store Settings",
    Icon: <SettingsOutlinedIcon />,
  },
  { title: "Profile", Icon: <AdminPanelSettingsOutlinedIcon /> },
];

export default navlist;
