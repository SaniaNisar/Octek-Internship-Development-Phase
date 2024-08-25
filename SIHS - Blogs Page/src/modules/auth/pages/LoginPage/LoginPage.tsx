import { useTheme } from "@emotion/react";
import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { operators } from "../../dtos/operators";
import { useAuthenticateMutation } from "../../api";
import { v4 as uuidv4 } from "uuid";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

type Props = {

}

const LoginPage: React.FC<Props> = ({ }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [operator, setOperator] = useState("");
    const [mobile, setMobile] = useState("");
    const [authenticate, { isLoading, isSuccess, isError }] = useAuthenticateMutation();
    // const deviceId = uuidv4();
    const deviceId = "abcd";

    useEffect(() => {
        if (isSuccess) {
            navigate(`/auth/verify?mobile=${mobile}&deviceId=${deviceId}`);
        }
    }, [isSuccess]);

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }} >
            <Box
                // flexBasis={{ xs: "100%", md: "35%", sm: "100%" }} 
                sx={{ width: "100%", height: "220px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}
            >
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ textAlign: "left" }}>Select Operator</Typography>
                    <Select
                        placeholder="Select Operator"
                        sx={{ width: "100%", height: "48px" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={operator}
                        onChange={e => setOperator(e.target.value as string)}
                    >
                        {operators.map(operator => <MenuItem value={operator.id}>{operator.title}</MenuItem>)}
                    </Select>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ width: "100%", textAlign: "left" }}>Enter Mobile #</Typography>
                    <TextField
                        sx={{
                            width: "100%",
                            '& .MuiInputBase-root': {
                                height: '48px',
                            },
                            '& .MuiInputBase-input': {
                                height: '100%',
                                padding: '16px',
                                boxSizing: 'border-box',
                            },
                        }}
                        placeholder="Mobile #"
                        value={mobile}
                        onChange={e => setMobile(e.target.value)}
                    />
                </Box>
                <LoadingButton
                    onClick={() => authenticate({ operator, mobile, deviceId })}
                    loading={isLoading}
                    loadingPosition="center"
                    size="large"
                    sx={{
                        width: "100%", height: "48px", color: "white", backgroundColor: "primary.main"
                    }}
                >
                    Login
                </LoadingButton>
            </Box>
        </Box>
    )
}

export default LoginPage;