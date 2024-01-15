import { Box, Chip, Grid, Typography, styled } from "@mui/material";
import { StatusProps, TemplateAllProps } from "../../logic/interfaces/template";
import GridContainers from "../muiComponents/gridContainers";
import { getStatusTemplate } from "../../logic/utils/GetStatus";
import { useNavigate } from "react-router-dom";

const TemplateComponent = styled(Grid)({
    background: '#fff',
    borderRadius: '4px',
    boxShadow: '1px 1px 10px 0px rgba(0, 0, 0, 0.13)',
    transition: 'background-color 0.3s, transform 0.3s',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#eeeeee',
        transform: 'scale(1.03)',
    },
})

const TemplateGrade = ({ template }: TemplateAllProps) => {
    const navigate = useNavigate();

    const getStatus: StatusProps = getStatusTemplate(template.status)
    return (
        <TemplateComponent item my={1} xl={5} lg={5} md={5} sm={12} xs={12} px={1} onClick={() => navigate(`/template/${template.id}`)}>
            <GridContainers align='center' direction='row' justify="space-evenly">
                <Grid pt={2} item xl={9} lg={9} md={9} sm={9} xs={9}>
                    <Typography variant="body1" color="initial" fontWeight={'bold'}>{template.titulo}</Typography>
                    <Typography variant="body1" color="initial"><Box component='span' sx={{ color: '#636363' }}>Número de colunas:</Box> {template.quantidadeCampos}</Typography>
                    <Typography variant="body1" color="initial"><Box component='span' sx={{ color: '#636363' }}>Autor:</Box> {template.usuario.nome}</Typography>
                </Grid>
                <Grid display={'flex'} justifyContent='end' item xl={2} lg={2} md={2} sm={2} xs={2}><Chip color='secondary' label={template.formato} /></Grid>
                <Grid item py={2} pl={1} xl={12} lg={12} md={12} sm={12} xs={12}><Chip variant="outlined" color={getStatus.color} label={getStatus.titulo} /></Grid>
            </GridContainers>
        </TemplateComponent>
    );
}

export default TemplateGrade;