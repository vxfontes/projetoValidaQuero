import { Box, CircularProgress, Typography } from "@mui/material";

const BoxLoading = ({ message, loading }: { message: string, loading: boolean }) => {
    return (
        <Box sx={{ width: '100%', display: 'block', textAlign: 'center' }}>
            {loading && (
                <>
                    <CircularProgress /> <br />
                </>
            )}
            {message.length !== 0 && (
                <Typography mt={3} variant="body1" color="initial">{message}</Typography>
            )}
        </Box>
    );
}

export default BoxLoading;