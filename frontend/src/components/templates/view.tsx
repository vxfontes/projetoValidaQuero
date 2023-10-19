import * as React from 'react';
import { Box, Chip, Grid, IconButton, Typography, styled, TextField, Button } from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { AiOutlineUser } from 'react-icons/ai'
import { FiDownload, FiUpload } from 'react-icons/fi'
import { useParams } from "react-router-dom";
import theme from "../../theme";
import { FundoBackground } from "../background/fundoPrincipal";
import { formatarData } from "../../logic/utils/data";
import GridContainers from "../muiComponents/gridContainers";
import FileContainer from "../files/container";
import TableCampos from "./tableCampos";
import { useScreenSize } from "../muiComponents/breakpoints";
import useUsuario from "../../logic/core/functions/user";
import { GetTemplateProps } from "../../logic/interfaces/template";
import api from "../../logic/api/api";
import { getStatusTemplate } from "../../logic/utils/GetStatus";
import BoxLoading from "../muiComponents/boxLoading";
import python from "../../logic/api/python";
import DialogSlide from "../muiComponents/dialog";
import { AlertSweet } from "../alerts/sweetAlerts";
import nuvem from '../../assets/icon/nuvem.png'
import { BoxSpanGray } from "../muiComponents/boxes";
import { storage } from "../../logic/api/firebase";

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
    const [nome, setnome] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [modal, setModal] = React.useState(false);
    const [arquivo, setarquivo] = React.useState<File | null>(null);
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
            } else setMessage(res.data.message)
        }).catch((error) => setMessage(error.response.data.message)
        ).finally(() => setLoading(false));
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) setarquivo(selectedFile);
    };

    const getError = (error: any, message: string) => {
        setModal(false)
        console.log('Upload deu errado: ', error);
        AlertSweet(message, 'error', true)
    }

    async function handleUpload() {
        if (arquivo && template) {
            try {
                const formData = new FormData();
                formData.append('campos', JSON.stringify(template.campos));
                formData.append('file', arquivo);
                formData.append('formato', template.formato.toLowerCase());

                const response = await python.post('/file/upload/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });

                if (response.data.status == 'error') {
                    const envio = {
                        titulo: nome,
                        linhas: response.data.linhas,
                        aprovado: false,
                        url: '',
                        usuario: usuario.matricula,
                        template: template.id
                    }

                    api.post('/arquivo', envio).then((_res) => getError(response.data, response.data.message)
                    ).catch(err => AlertSweet(err.response.data.message, 'error', true))
                } else {
                    const storageRef = ref(storage, `arquivos/aprovados/template${template.id}/${nome}/${crypto.randomUUID().slice(0, 10)}`);
                    const uploadTask = uploadBytesResumable(storageRef, arquivo);

                    uploadTask.on('state_changed',
                        () => getDownloadURL(uploadTask.snapshot.ref).then(url => {
                            const envio = {
                                titulo: nome,
                                linhas: response.data.linhas,
                                aprovado: true,
                                url: url,
                                usuario: usuario.matricula,
                                template: template.id
                            }

                            api.post('/arquivo', envio).then((res) => {
                                setModal(false)
                                console.log('Upload bem-sucedido:', response.data.message);
                                AlertSweet(res.data.message, 'success', true)
                            }).catch(err => getError(err, err.response.data.message))
                        }).catch(err => getError(err, 'Houve um erro ao tentar enviar')),
                        error => getError(error, 'Houve um erro ao enviar arquivo'))
                }
            } catch (error) { getError(error, 'Houve um erro ao tentar enviar') }
        }
    }


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

                                            <DialogSlide open={modal} handleClose={() => setModal(false)}>
                                                <Grid container bgcolor='#fff' display='block' justifyContent={'center'} textAlign={'center'} spacing={3} px={6} py={3}>
                                                    <Typography mt={3} variant="h5" color="inherit" align="left">Upload de Arquivo</Typography>

                                                    <Typography mt={1} variant="body1" color="inherit" align="left">Template: <BoxSpanGray>{template.titulo}</BoxSpanGray></Typography>
                                                    <Typography variant="body1" color="inherit" align="left">Formato: <BoxSpanGray>{template.formato}</BoxSpanGray></Typography>

                                                    <TextField sx={{ mb: 3, mt: 1 }} label="Escreva o nome do arquivo" variant="filled" value={nome} onChange={(e) => setnome(e.target.value)} fullWidth />

                                                    <Box sx={{ border: '2px dashed #ccc', textAlign: 'center', width: '80%', ml: '10%', padding: '7%' }}>
                                                        <img src={nuvem} alt="Nuvem upload" /><br />
                                                        <Typography my={1} variant="body1" color="initial">Escolha um arquivo</Typography>
                                                        <Typography mb={2} variant="body1" color="GrayText">CSV, XLS or XLSX, tamanho menor que 100MB</Typography>
                                                        <Button variant="outlined" component='label' color="info" disabled={arquivo ? true : false}>
                                                            {" "}
                                                            Selecionar arquivo
                                                            <input hidden accept=".csv,.xls,.xlsx" type="file" onChange={handleFileChange} />
                                                        </Button>
                                                    </Box>

                                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, pt: 3, pb: 1 }}>
                                                        <Button variant="outlined" color='primary' onClick={() => setModal(false)}>
                                                            Retornar
                                                        </Button>
                                                        <Button variant="contained" color='primary' onClick={handleUpload}>
                                                            Continue
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                            </DialogSlide>

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
                                                        onClick={() => setModal(true)}
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