import { Box, Chip, Grid, IconButton, Typography, styled } from "@mui/material";
import { fakeTemplates } from "../../data/fakeTemplates";
import { FundoBackground } from "../background/fundoPrincipal";
import { AiOutlineUser } from 'react-icons/ai'
import { FiDownload, FiUpload } from 'react-icons/fi'
import theme from "../../theme";
import { formatarData } from "../../logic/utils/data";
import GridContainers from "../muiComponents/gridContainers";
import { getFormatoTemplate } from "../../logic/utils/GetFormato";
import { getStatusTemplate } from "../../logic/utils/GetStatus";
import FileContainer from "../files/container";
import TableCampos from "./tableCampos";
import { useParams } from "react-router-dom";
import { useScreenSize } from "../muiComponents/breakpoints";
import useUsuario from "../../logic/core/functions/user";

const FundoComponente = styled(Grid)({
    minHeight: '90%',
    maxHeight: '100%',
    width: '100%',
    backgroundColor: theme.palette.fundoComponente?.main,
    border: 'none',
    borderRadius: '14px'
});

const ViewTemplate = () => {
    const { id } = useParams();
    const template = fakeTemplates.find((template) => template.id === Number(id))!;
    const { showFullHD } = useScreenSize();
    const status = getStatusTemplate(template.status);
    const { getUser } = useUsuario();
    const usuario = getUser().result;

    return (
        <FundoBackground container>
            <FundoComponente container m={5} p={4}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} display='flex' justifyContent='space-between' alignItems='center'>

                    <GridContainers align="start" direction="row" justify="space-between">
                        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                            <Typography display='block' variant="h4" color="initial">{template.titulo}</Typography>
                        </Grid>


                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12} display='flex' justifyContent='space-around' alignItems='center'>
                            <Typography variant="body1" color="initial">
                                <AiOutlineUser style={{ border: '1px solid #0000005a', borderRadius: '4px', marginRight: '2px' }} />
                                {template.autor.nome}
                            </Typography>

                            <Box>
                                <Typography variant="caption" color={'#525252'}>DATA</Typography>
                                <Typography variant="body1" color="initial">{formatarData(template.dataCriacao)}</Typography>
                            </Box>
                        </Grid>


                        <Grid my={2} item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Typography variant="body1" color="initial" align="justify"><Box component='span' color='#525252'>Descrição do template: </Box> {template.descricao}</Typography>
                        </Grid>


                        <Grid mt={2} item xl={5} lg={5} md={5} sm={12} xs={12}>
                            <Box display='flex' gap={5} alignItems='center'>
                                <Box display='flex' gap={1} alignItems='center'>
                                    <Chip label={getFormatoTemplate(template.formato)} color="secondary" />
                                    <Chip label={status.titulo} color={status.color} />
                                    {usuario.verificado && (
                                        <IconButton>
                                            <FiDownload size={24} color={theme.palette.azulClaro?.main} />
                                        </IconButton>
                                    )}
                                </Box>

                                <Box display='flex' gap={1} alignItems='center'>
                                    {(usuario.verificado && usuario.perfil !== 'Gerente') && (
                                        <Chip
                                            label='Upload de arquivo'
                                            sx={{
                                                cursor: 'pointer',
                                                backgroundColor: theme.palette.azulClaro?.main,
                                                color: 'white',
                                                transition: 'background-color 0.3s, transform 0.3s',

                                                '&:hover': {
                                                    cursor: 'pointer',
                                                    backgroundColor: theme.palette.azulClaro?.dark,
                                                    transform: 'scale(1.06)',
                                                },
                                            }}
                                            icon={<FiUpload color="white" size={20} style={{ marginLeft: 10 }} />}
                                        />
                                    )}
                                </Box>
                            </Box>

                            <Box>
                                <TableCampos template={template} />
                            </Box>
                        </Grid>


                        <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                            <FileContainer itemsPerPage={template.campos.length <= 9 ? (showFullHD ? 12 : 6) : template.campos.length - 2} />
                        </Grid>

                    </GridContainers>

                </Grid>
            </FundoComponente>
        </FundoBackground>
    );
}

export default ViewTemplate;