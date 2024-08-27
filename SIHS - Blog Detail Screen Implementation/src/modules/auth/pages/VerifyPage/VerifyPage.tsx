import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { OTPInputComponent } from "../../components";
import { useState } from "react";
import { useVerifyMutation } from "../../api";
import { useSearchParams } from "react-router-dom";

type Props = {}

const VerifyPage: React.FC<Props> = ({ }) => {
    const [searchParams] = useSearchParams();
    const mobile = searchParams.get("mobile") ?? "";
    const deviceId = searchParams.get("deviceId") ?? "";
    const pushToken = "s";
    const [otp, setOtp] = useState("");
    const [verify, { isLoading, isSuccess, isError }] = useVerifyMutation();

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }} >
            <Box
                sx={{ width: "100%", height: "130px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}
            >
                <Box sx={{ width: "100%" }}>
                    <OTPInputComponent onChange={o => setOtp(o)} />
                </Box>
                <LoadingButton
                    onClick={() => verify({ mobile, deviceId, otp, pushToken })}
                    loading={isLoading}
                    disabled={mobile === "" || deviceId === "" || otp === ""}
                    loadingPosition="center"
                    size="large"
                    sx={{
                        width: "100%", height: "48px", color: "white", backgroundColor: "primary.main"
                    }}
                >
                    Verify
                </LoadingButton>
            </Box>
        </Box>
    )
}

export default VerifyPage;