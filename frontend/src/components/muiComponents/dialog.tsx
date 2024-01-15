import { Slide, Dialog, styled, Grid, Typography, Button } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import { ChildrenProps } from '../../logic/interfaces/children';
import theme from '../../theme';

interface DialogProps extends ChildrenProps {
    open: boolean;
    handleClose: () => void;
}

interface DialogMessageProps extends DialogProps {
    color: 'primary' | 'secondary',
    icon: string,
    skip: boolean,
    link?: string
}

export const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function DialogSlide({ children, handleClose, open }: DialogProps) {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            PaperProps={{ sx: { borderRadius: "25px", width: '100%' } }}
        >
            {children}
        </Dialog>
    );
}

export function DialogMessages({ children, handleClose, open, color, icon, skip, link }: DialogMessageProps) {

    const colorType = color === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main
    const Container = styled(Grid)({
        background: '#FFFFFF',
    })

    const handleButtonClick = () => {
        if (skip && link) {
            window.location.href = link;
        } else {
            handleClose();
        }
    };

    return (
        <DialogSlide open={open} handleClose={handleClose}>
            <Container container justifyContent={'center'} textAlign={'center'} spacing={3} py={4}>
                <Grid item xs={12}>
                    <img src={icon} alt="Check" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" color={colorType} fontWeight='bold'>
                        {children}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" color={color} fullWidth onClick={handleButtonClick}>
                        Continue
                    </Button>
                </Grid>
            </Container>
        </DialogSlide>
    )
}