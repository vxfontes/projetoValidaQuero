import { Box, Chip, Grid, IconButton, Typography, styled } from "@mui/material";
import * as React from 'react';
import { FundoBackground } from "../background/fundoPrincipal";
import { AiOutlineUser } from 'react-icons/ai'
import { FiDownload, FiUpload } from 'react-icons/fi'
import theme from "../../theme";
import { formatarData } from "../../logic/utils/data";
import GridContainers from "../muiComponents/gridContainers";
import FileContainer from "../files/container";
import TableCampos from "./tableCampos";
import { useParams } from "react-router-dom";
import { useScreenSize } from "../muiComponents/breakpoints";
import useUsuario from "../../logic/core/functions/user";
import { GetTemplateProps } from "../../logic/interfaces/template";
import api from "../../logic/api/api";
import { getStatusTemplate } from "../../logic/utils/GetStatus";
import BoxLoading from "../muiComponents/boxLoading";
import python from "../../logic/api/python";

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
    const [template, setTemplate] = React.useState<GetTemplateProps>();
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [file, setFile] = React.useState<File | null>(null);
    const { showFullHD } = useScreenSize();
    const { getUser } = useUsuario();
    const usuario = getUser().result;

    React.useEffect(() => {

        // get templates
        api.get(`/template/${Number(id)}`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.template === undefined) setMessage("Não existem templates cadastrados")
                else {
                    setTemplate(res.data.template)
                    if (res.data.template.arquivos.lenght === undefined) setMessage("Template não possui arquivos")
                }
            } else {
                setMessage(res.data.message)
            }
        }).catch((error) => {
            setMessage(error.response.data.message)
        }).finally(() => {
            setLoading(false)
        });
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleUpload = async (event: any) => {
        event.preventDefault()
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            python.post('/file/upload', formData)
                .then((data) => {
                    console.log('Arquivo enviado com sucesso:', data);
                })
                .catch((error) => {
                    console.log('Erro ao enviar arquivo:', error);
                });
        } else {
            console.log('Nenhum arquivo selecionado');
        }
    };


    return (
        <FundoBackground container>
            <FundoComponente container m={5} p={4}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} display='flex' justifyContent='space-between' alignItems='center'>

                    {!loading ? (
                        <>
                            {template ? (
                                <GridContainers align="start" direction="row" justify="space-between">
                                    <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                                        <Typography display='block' variant="h4" color="initial">{template?.titulo}</Typography>
                                    </Grid>


                                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12} display='flex' justifyContent='space-around' alignItems='center'>
                                        <Typography variant="body1" color="initial">
                                            <AiOutlineUser style={{ border: '1px solid #0000005a', borderRadius: '4px', marginRight: '2px' }} />
                                            {template.usuario.nome}
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
                                                <Chip label={template.formato} color="secondary" />
                                                <Chip label={getStatusTemplate(template.status).titulo} color={getStatusTemplate(template.status).color} />
                                                {usuario.verificado && (
                                                    <IconButton>
                                                        <FiDownload size={24} color={theme.palette.azulClaro?.main} />
                                                    </IconButton>
                                                )}
                                            </Box>

                                            <form onSubmit={handleUpload}>
                                                <Box display='flex' gap={1} alignItems='center'>
                                                    {file ? (
                                                        <span>{file.name}</span>
                                                    ) : (
                                                        <span>Selecionar arquivo</span>
                                                    )}
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

                                                <input
                                                    type="file"
                                                    onChange={handleFileChange}
                                                />
                                                <button type="submit">Enviar Arquivo</button>

                                            </form>
                                        </Box>

                                        <Box>
                                            <TableCampos template={template} />
                                        </Box>
                                    </Grid>


                                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                                        <FileContainer message={message} formato={template.formato} arquivos={template.arquivos} itemsPerPage={template.campos.length <= 9 ? (showFullHD ? 12 : 6) : template.campos.length - 2} />
                                    </Grid>

                                </GridContainers>
                            ) : (
                                <BoxLoading message={message} loading />
                            )}
                        </>
                    ) : (
                        <BoxLoading message={message} loading />
                    )}

                </Grid>
            </FundoComponente>
        </FundoBackground>
    );
}

export default ViewTemplate;