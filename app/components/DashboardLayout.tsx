import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
//import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import theme from "~/src/theme";
import CustomNav from "./CustomNav";
//import { Link } from "@remix-run/react"
import navlist from "~/src/Nav";
import ListItemBody from "./ListItemBody";
import SingleLevelBody from "./SingleLevelBody";
//import MenuItem from "@mui/material/MenuItem";
//import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Search, SearchIconWrapper, StyledInputBase } from "./Search";
import Button from "@mui/material/Button";
import { AppBar, Drawer, DrawerHeader } from "./AppBar";
import { Avatar } from "@mui/material";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "gray" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Button size="small" sx={{ px: 2, py: 0 }} color="inherit">
              Logout
            </Button>

            <Avatar src="/avatar-1.jpg" />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              //onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          height: "100%",

          "& .MuiDrawer-paper": {
            backgroundImage: "url(/drawerbg.jpg)",
            backgroundSize: "cover",
            "&:before": {
              position: "absolute",
              width: "100%",
              minHeight: open ? "120vh" : "100vh", //conditionally set it based on the contents height
              content: '""',
              background: "#000",
              opacity: "0.8",
            },
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <CustomNav
          component="nav"
          sx={{ "& .MuiListItemButton-root": { borderRadius: open ? 2 : 0 } }}
        >
          {navlist.map(({ title, Icon, children }, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", px: open ? 2 : 0, my: 1 }}
            >
              {typeof children != "undefined" ? (
                <ListItemBody
                  title={title}
                  Icon={Icon}
                  parentOpen={open}
                  children={children}
                />
              ) : (
                <SingleLevelBody title={title} Icon={Icon} toggle={open} />
              )}
            </ListItem>
          ))}
        </CustomNav>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
