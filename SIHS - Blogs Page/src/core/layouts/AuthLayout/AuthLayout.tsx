import { Box, Grid, Paper, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import iPhoneImage from "../../../assets/images/iphone.png";
import Logo from "../../../assets/images/logo.png";

const AuthLayout = () => {
    return (
        <Box sx={{ height: "100vh" }}>
            <Grid container spacing={0} display="flex" flex={1}>
                <Grid sx={{  }} item xs={6} sm={6} md={6}>
                    <Box sx={{ padding: "10px", height: "100vh" }}>
                        {/* <img style={{position: "absolute", top: 0 }} src={Logo} width={148} /> */}
                        <Box sx={{ height: "100%"}}  display="flex" alignItems="center" justifyContent="center" flexDirection="row" flex={1}>
                            <Box sx={{
                                width: {
                                    xs: "100%",
                                    sm: "100%",
                                    md: "90%",
                                    lg: "90%",
                                    xl: "50%"
                                }
                            }}>
                                {/* <Paper> */}
                                    <Outlet />
                                {/* </Paper> */}
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Box 
                        sx={{ height: "100%", backgroundColor: 'primary.main' }} 
                        alignItems="center" 
                        justifyContent="space-evenly" 
                        display="flex" 
                        flexDirection="column" 
                        flex={1}
                    >
                        <Typography sx={{ color: "background.default", textAlign: "center", fontWeight: "bold" }} variant="h3">
                            Keep track of your and your family's health in one place.
                        </Typography>
                        <Box 
                            component="img"
                            src={iPhoneImage}
                            sx={{
                                width: {
                                  xs: '100%',   // 100% width on extra-small screens
                                  sm: '75%',    // 75% width on small screens
                                  md: '40%',    // 50% width on medium screens
                                  lg: '40%',    // 40% width on large screens
                                  xl: '40%',    // 30% width on extra-large screens
                                },
                                height: 'auto', // Maintain aspect ratio
                              }}
                        />
                        {/* <img src={iPhoneImage} width={330} />  */}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AuthLayout;