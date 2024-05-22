import React from "react";
import {
    DarkModeOutlined,
    LightModeOutlined,
    Menu as MenuItem,
    Search,
    SettingsOutlined
} from "@mui/icons-material";
import { AppBar, Button, IconButton, InputBase, Toolbar, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";


const Navbar = ({
    isSidebarOpen,
    setIsSidebarOpen,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
        sx = {{
            position : "static",
            background : "none",
            boxShadow : "none",
        }}
    >
        <Toolbar sx = {{ justifyContent : "space-between" }} >
        {/* Left Side */}
        <FlexBetween>
            <IconButton onClick = {() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuItem/>
            </IconButton>
            <FlexBetween
                backgroundColor = { theme.palette.background.alt }
                borderRadius = "9px"
                gap = "3rem"
                p = "0.1rem 1.5rem"
            >
                <InputBase placeholder= "Search Here ....." />
                <IconButton>
                    <Search/>
                </IconButton>
            </FlexBetween>
        </FlexBetween>
        {/* Right Side */}
        <FlexBetween gap = '1.5rem'>
            <IconButton
                onClick = {() => dispatch(setMode())}
            >
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlined sx = {{ fontSize : "25px" }} /> 
                ) : (
                    <LightModeOutlined sx = {{ fontSize : "25px"}} /> 
                )}
            </IconButton>
            <IconButton>
                <SettingsOutlined sx = {{ fontSize : "25px" }} />
            </IconButton>
            {/* <FlexBetween
                onClick={handleClick}
                sx = {{
                    display : "flex",
                    justifyContent : "space-between",
                    alignItems : "center",
                    textTransform : "none",
                    gap : "1rem"
                }}
            >
                <Button>
                    <Box>

                    </Box>
                    <Box>

                    </Box>
                </Button>
            </FlexBetween> */}
        </FlexBetween>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
