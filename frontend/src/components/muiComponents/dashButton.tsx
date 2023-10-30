import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import theme from "../../theme";

interface CustomButtonProps {
    icon: React.ReactNode;
    text: string;
    onClick: (event: React.MouseEvent) => void;
}

const DashButton: React.FC<CustomButtonProps> = ({ icon, text, onClick }) => {
    return (
        <Button
            onClick={onClick}
            sx={{
                backgroundColor: theme.palette.fundoComponente?.main,
                textTransform: 'none',
                boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)',
                borderRadius: '14px',
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                width: '80%',
                mt: 2,
                py: 2,
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: theme.palette.fundoComponente?.dark,
                    transform: 'scale(1.10)',
                    transition: 'transform 0.4s ease'
                },
                [theme.breakpoints.down('md')]: { ml: '10%' }
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                {icon}
                <Typography variant="h6" fontWeight={400} style={{ textTransform: "none", color: 'black' }}>
                    {text}
                </Typography>
            </Box>
        </Button>
    );
};

export default DashButton;
