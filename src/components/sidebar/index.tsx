import {
  Sidebar,
  Menu,
  MenuItem,
  menuClasses,
  MenuItemStyles,
  SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import React, { useCallback } from "react";
import { Switch } from "./Switch";
// import { PackageBadges } from './PackageBadges';
// import { Typography } from './Typography';
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";
import DashobardIcon from "../icons/Dashobard";
import AddIcon from "../icons/AddIcon";
import LogoutIcon from "../icons/LogoutIcon";
import { useAuth } from "../../hooks/useAuth";
import ThemeIcon from "../icons/ThemeIcon";
import { useStore } from "../../store";
import { ShoppingCart } from "../icons/ShoppingCart";
// import { Badge } from './Badge';

type Theme = "light" | "dark";

const themes = {
  light: {
    sidebar: {
      // backgroundColor: '#ffffff',
      backgroundColor: "#0b2948",
      // color: '#607489',
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      // backgroundColor: '#0b2948',
      backgroundColor: "#24292d",
      color: "white",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const SidebarComponent = () => {
  const store: any = useStore();
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(true);
  const [theme, setTheme] = React.useState<Theme>(store?.theme);
  const { signOut, user } = useAuth();
  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRtl(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
    store?.setTheme(store?.theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", store?.theme === "dark" ? "light" : "dark");
  };

  // handle on image change event
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasImage(e.target.checked);
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "14px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  const onLogout = useCallback(() => {
     signOut();
  }, [signOut]);
  
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        direction: rtl ? "rtl" : "ltr",
      }}
    >
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        rtl={rtl}
        breakPoint="md"
        backgroundColor={hexToRgba(
          themes[theme].sidebar.backgroundColor,
          hasImage ? 0.9 : 1
        )}
        rootStyles={{
          color: themes[theme].sidebar.color,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <SidebarHeader
            rtl={rtl}
            style={{ marginBottom: "24px", marginTop: "16px" }}
          />
          <div style={{ flex: 1, marginBottom: "32px" }}>
            {/* <div style={{ padding: '0 24px', marginBottom: '8px' }}>
            <Typography
              variant="body2"
              fontWeight={600}
              style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
            >
              General
            </Typography>
          </div> */}

            {/* <Menu menuItemStyles={menuItemStyles}>
            <SubMenu
              label="Charts"
              icon={<ShoppingCart />}   
            >
              <MenuItem icon={<DashobardIcon />} component={<Link to="/" />}>
              Dashboard
            </MenuItem>
            <MenuItem icon={<AddIcon />} component={<Link to="/add-bot" />}>Add Bot</MenuItem>
            
            </SubMenu>
           
          </Menu>  */}

            {/* <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
            <Typography
              variant="body2"
              fontWeight={600}
              style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
            >
              Extra
            </Typography>
          </div> */}

            <Menu menuItemStyles={menuItemStyles}>
              {/* <MenuItem icon={<ThemeIcon />} >
            <Switch
              id="theme"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
              label="Dark theme"
            />
            </MenuItem> */}
              <MenuItem icon={<DashobardIcon />} component={<Link to="/" />}>
                Dashboard
              </MenuItem>
              <MenuItem icon={<AddIcon />} component={<Link to="/add-bot" />}>
                Add Bot
              </MenuItem>

              <MenuItem icon={<LogoutIcon />} onClick={onLogout}>
                Log Out
              </MenuItem>
            </Menu>
          </div>
          <SidebarFooter collapsed={collapsed} />
        </div>
      </Sidebar>

      {/* <main>
      <div style={{ padding: '16px 24px', color: '#44596e' }}>
        <div style={{ marginBottom: '16px' }}>
          {broken && (
            <button className="sb-button" onClick={() => setToggled(!toggled)}>
              Toggle
            </button>
          )}
        </div>
        <div style={{ marginBottom: '48px' }}>
          <Typography variant="h4" fontWeight={600}>
            React Pro Sidebar
          </Typography>
          <Typography variant="body2">
            React Pro Sidebar provides a set of components for creating high level and
            customizable side navigation
          </Typography>
          <PackageBadges />
        </div>

        <div style={{ padding: '0 8px' }}>
          <div style={{ marginBottom: 16 }}>
            <Switch
              id="collapse"
              checked={collapsed}
              onChange={() => setCollapsed(!collapsed)}
              label="Collapse"
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <Switch id="rtl" checked={rtl} onChange={handleRTLChange} label="RTL" />
          </div>

          <div style={{ marginBottom: 16 }}>
            <Switch
              id="theme"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
              label="Dark theme"
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <Switch id="image" checked={hasImage} onChange={handleImageChange} label="Image" />
          </div>
        </div>
      </div>
    </main> */}
    </div>
  );
};

export default SidebarComponent;
