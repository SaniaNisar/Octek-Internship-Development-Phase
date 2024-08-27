import { Box, TextField } from "@mui/material"
import { useRef, useState } from "react"

type Props = {
    onChange: (otp: string) => void;
}

const OTPInputComponent: React.FC<Props> = ({ onChange }) => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
    const refs = [
        useRef<HTMLInputElement | null>(null), 
        useRef<HTMLInputElement | null>(null), 
        useRef<HTMLInputElement | null>(null), 
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null), 
        useRef<HTMLInputElement | null>(null)
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const value = e.target.value;
        console.log(value);
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            onChange(newOtp.join(''));
            if (index < 5 && refs[index + 1].current) {
                refs[index + 1]?.current?.focus();
            }
        }
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
        if (e.key === "Backspace" && index > 0) {
            refs[index - 1]?.current?.focus();
        }
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ width: "100%" }}>
            {refs.map((ref, index) => 
                <TextField 
                    inputRef={ref}
                    onChange={e => handleChange(e, index)}
                    onKeyDown={e => handleKeyDown(e, index)}
                    inputProps={{ 
                        style: {
                            textAlign: "center",
                            fontSize: "30px",
                            fontWeight: "bold"
                        },
                        maxLength: 1,
                    }}
                    sx={{
                        width: "58px",
                        '& .MuiInputBase-root': {
                            height: '58px',
                        },
                        '& .MuiInputBase-input': {
                            height: '100%',
                            padding: '16px',
                            boxSizing: 'border-box',
                        },
                    }}
                />
            )}
        </Box>
    );
}

export default OTPInputComponent;