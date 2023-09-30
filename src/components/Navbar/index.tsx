import Logo from "../../assets/images/logo.svg";
// import {
//   HomeIcon,
//   CreateIcon,
//   FolderIcon,
//   BrandkitIcon,
//   HelpIcon,
//   LayersIcon,
//   LabelIcon,
// } from "../Icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import { ROUTE_PATH_MAP } from "../../utils/enum";
import { Grid, Icon, List, ListItem } from "@mui/material";
import { TypographyBodyDefault } from "../Typography";


export const navbarList = [
  {
    // icon: HomeIcon,
    label: "Home",
    value: ROUTE_PATH_MAP.HOME,
  },
  {
    // icon: CreateIcon,
    label: "Connectors",
    value: ROUTE_PATH_MAP.CONNECTORS,
  },
  
];

function Navbar() {
  const navigate = useNavigate();
  
  const [active, setActive] = useState("");
 
  useEffect(() => {
    setActive(window.location.pathname);
  
  });


  return (
    <Grid
      sx={{
        minWidth: "96px",
        width: "96px",
        zIndex: 5,
      }}
    >
      <Grid
        sx={{
          width: "96px",
          padding: "16px",
          height: "calc(100vh)",
          display: "flex",
          position: "fixed",
          top: "0px",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--color-palette-gray-800, #253042)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          borderRadius: "4px",
          zIndex: 5,
        }}
      >
        <img
          onClick={() => navigate(ROUTE_PATH_MAP.HOME)}
          src={Logo}
          style={{ width: "40px", height: "40px", cursor: "pointer" }}
        />
        <List sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          
          {navbarList.map((page, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  padding: "8px 4px",
                  flexDirection: "column",
                  cursor:'pointer',
                  gap: "4px",
                  background:
                    active === page.value
                      ? "var(--color-palette-gray-700, #394455)"
                      : "transparent",
                  borderRadius: "8px",
                  ":hover": {
                    background: "var(--color-palette-gray-700, #394455)",
                    borderRadius: "8px",
                    "& path": { fill: "white" },
                  },
                }}
                onClick={() => navigate(page.value)}
              >
                <Icon
                  sx={{
                    width: "24px",
                    height: "24px",
                    fontSize: "24px",
                    "& path": {
                      fill: active === page.value ? "white" : "#7D899C",
                    },
                    "& svg": { width: "24px", height: "24px" },
                  }}
                >
                  {/* {page.icon} */}
                </Icon>
                <TypographyBodyDefault
                  sx={{
                    fontWeight: active === page.value ? 600 : 400,
                    letterSpacing: "-0.1px",
                    color:
                      active === page.value
                        ? "var(--color-palette-white, #FFF)"
                        : "var(--color-palette-gray-500, #7D899C)",
                  }}
                >
                  {page.label}
                </TypographyBodyDefault>
              </ListItem>
            );
          })}
        </List>
        <img
          src={Logo}
          style={{ width: "40px", height: "40px", opacity: 0 }}
        />
      </Grid>
    </Grid>
  );
}

export default Navbar;
