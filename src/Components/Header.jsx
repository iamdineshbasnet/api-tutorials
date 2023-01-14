import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
    const handleHomePage = () =>{
        navigate("/")
    }
    const handleStudentPage = () =>{
        navigate("/user")
    }
    const handleCreatePage = () =>{
        navigate("/create-user")
    }
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Grid container alignItems="center">
                        <SchoolIcon
                            sx={{ fontSize: "40px", marginRight: "5px" }}
                        />
                        <Typography variant="h4">Learner</Typography>
                    </Grid>
                    <Grid container spacing={8} justifyContent="flex-end" sx={{marginRight: '60px'}}>
                        <Grid item>
                            <Typography variant="h6" sx={{cursor: 'pointer'}} onClick={handleHomePage}>Home</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" sx={{cursor: 'pointer'}} onClick={handleStudentPage}>Students</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" sx={{cursor: 'pointer'}} onClick={handleCreatePage}>Create</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
