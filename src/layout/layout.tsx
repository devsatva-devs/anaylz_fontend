import React from "react";
import { Outlet, } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Grid } from "@mui/material";
import Header from "../components/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Grid
                display={"flex"}
                flexDirection={"row"}
                sx={{ background: "var(--color-palette-gray-900, #1A202B)" }}
                minHeight={"calc(100vh - 72px)"}
            >
                <Navbar />
                <Grid
                    margin={0}
                    display={"flex"}
                    flexDirection={"column"}
                    minHeight={"calc(100vh - 72px)"}
                    padding={"32px 28px 32px 24px"}
                    width={"100%"}
                    sx={{ background: "var(--color-palette-gray-900, #1A202B)" }}
                    gap={2}
                >
                    <Outlet />
                </Grid>
            </Grid>
        </>

    )
}
export default React.memo(Layout)