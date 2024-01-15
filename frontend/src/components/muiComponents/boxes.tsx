import { Box } from "@mui/material";
import { ChildrenProps } from "../../logic/interfaces/children";

export const BoxSpanGray = ({ children }: ChildrenProps) => {
    return (
        <Box component='span' color='#525252'>
            {children}
        </Box>
    );
}
