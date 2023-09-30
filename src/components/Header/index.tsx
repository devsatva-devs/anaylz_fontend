import React from 'react'
import { Grid } from "@mui/material";

const Header = () => {
    return (
        <Grid
            sx={{ background: "var(--color-palette-gray-900, #1A202B)" }}
            height={"72px"}
        >

        </Grid>
    )

}
export default React.memo(Header)