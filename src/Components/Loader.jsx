import React from "react";
import { Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
const Loader = () => {
    return (
        <>
            <Grid mt={10}>
                <Skeleton variant="rectangular" width={1800} height={60} sx={{marginTop: '20px'}}/>
                <Skeleton variant="rectangular" width={1800} height={60} sx={{marginTop: '20px'}}/>
                <Skeleton variant="rectangular" width={1800} height={60} sx={{marginTop: '20px'}}/>
                <Skeleton variant="rectangular" width={1800} height={60} sx={{marginTop: '20px'}}/>
            </Grid>
        </>
    );
};

export default Loader;
