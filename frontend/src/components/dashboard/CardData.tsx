import { Box, Grid, Typography } from "@mui/material";
import theme from "../../theme";
import icon from '../../assets/drawkit/perfil/circle.svg'
import { BoxSpanGray } from "../muiComponents/boxes";
import * as React from 'react';

interface Props {
    type: 'template' | 'arquivo',
    value: number,
    subValue?: number
}

export interface TemplateBoxInfoProps {
    value: number;
    total: number;
}
export interface TemplateBoxProps extends TemplateBoxInfoProps {
    isPending: boolean;
    title: string;
}

const CardDataInfo = ({ type, value, subValue }: Props) => {
    const title = type === "arquivo" ? 'Seus arquivos' : "Seus templates"
    const subtitle = type === "arquivo" ? 'ativos' : `/ ${subValue} ativos`

    return (
        <Grid container sx={{
            backgroundColor: theme.palette.fundoComponente?.main,
            boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: '14px',
            px: 2,
            py: 1
        }}>
            <Grid item xs={12}>
                <img src={icon} alt="Icone" />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" color="initial"><BoxSpanGray>{title}</BoxSpanGray></Typography>
                <Typography variant="h5" color="initial" display='flex' alignItems='end'>
                    {value} <Typography ml={1} variant="body1" color="initial">{subtitle}</Typography>
                </Typography>
            </Grid>
        </Grid>
    );
}

export const CardDashBoardInfo: React.FC<TemplateBoxProps> = ({ title, value, total, isPending }) => {
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.fundoComponente?.main,
                boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)',
                borderRadius: '14px',
                px: 2,
                py: 1,
                mt: 2
            }}
        >
            <Grid item xs={12}>
                <img src={icon} alt="Icone" />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" color="initial">
                    <BoxSpanGray>{title}</BoxSpanGray>
                </Typography>
                <Typography variant="h5" color="initial" display="flex" alignItems="end">
                    {value}
                    <Typography ml={1} variant="body1" color="initial">
                        {isPending ? `/ ${total} pendentes` : `/ ${total} ativos`}
                    </Typography>
                </Typography>
            </Grid>
        </Box>
    );
};

export default CardDataInfo;