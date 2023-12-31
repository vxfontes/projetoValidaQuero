import * as React from 'react';
import { Box, Chip, Grid, IconButton, Typography, styled, TextField, Button, Switch, CircularProgress, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, MenuItem } from "@mui/material";
import { AiOutlineUser } from 'react-icons/ai';
import { FiDownload, FiUpload } from 'react-icons/fi';
import { PiCloudArrowUpLight, PiCloudCheckLight } from 'react-icons/pi';
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
import { BoxSpanGray } from "../muiComponents/boxes";
import { exportFile } from '../../logic/utils/generateFile';

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
    const { showTablet } = useScreenSize();
    const [template, setTemplate] = React.useState<GetTemplateProps>();
    const [message, setMessage] = React.useState("");
    const [nome, setnome] = React.useState("");
    const [repositorio, setrepositorio] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [loadingFile, setLoadingFile] = React.useState(false);
    const [modal, setModal] = React.useState(false);
    const [flag, setFlag] = React.useState("");
    const [checked, setChecked] = React.useState<boolean>(true);
    const [publico, setPublico] = React.useState<boolean>(true);
    const [arquivo, setarquivo] = React.useState<File | null>(null);
    const { showFullHD } = useScreenSize();
    const { getUser } = useUsuario();
    const usuario = getUser().result;
    const [verify, setVerify] = React.useState('simples');


    React.useEffect(() => {

        // get templates
        api.get(`/template/${Number(id)}`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.template === undefined) setMessage("Não existem templates cadastrados")
                else {
                    setChecked(res.data.template.status == 'Ativo' ? true : false)
                    setTemplate(res.data.template)
                    setFlag(res.data.template.status)
                    if (res.data.template.arquivos.lenght === undefined) setMessage("Template não possui arquivos")
                }
            } else setMessage(res.data.message)
        }).catch((error) => setMessage(error.response.data.message)
        ).finally(() => setLoading(false));
    }, [id]);

    React.useEffect(() => {
        const value = checked ? 'Ativo' : 'Desativado';

        api.post('/template/status', { id: template?.id, status: value }).then((res) => {
            if (res.data.status === 'success') setFlag(value)
        }).catch(error => {
            AlertSweet(error.response.data.message, error.response.data.status, false)
            setChecked(!checked)
        })
    }, [checked, template?.id]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            const limiteTamanhoArquivo = 100 * 1024 * 1024; // limite de 100mb

            if (selectedFile.size > limiteTamanhoArquivo) {
                setModal(false);
                AlertSweet('O arquivo selecionado excede o tamanho máximo permitido (100 MB)', 'error', false);
                event.target.value = '';
                return;
            }

            setarquivo(selectedFile);
        }
    };

    const handleChangeVerify = (event: React.ChangeEvent<HTMLInputElement>) => setVerify((event.target as HTMLInputElement).value);
    const handleChangePublico = (event: React.ChangeEvent<HTMLInputElement>) => setPublico(event.target.checked);

    const getError = (error: Error, message: string) => {
        setModal(false);
        setarquivo(null);
        setnome('');
        console.log('Upload deu errado: ', error);
        AlertSweet(message, 'error', false);
        setLoadingFile(false);
    }

    async function handleUpload() {
        if (nome.length === 0) {
            setModal(false);
            AlertSweet('É preciso inserir nome no arquivo', 'error', false);
            return;
        }

        if (repositorio.length === 0) {
            setModal(false);
            AlertSweet('É preciso selecionar o repositório', 'error', false);
            return;
        }

        if (arquivo && template) {
            setLoadingFile(true)
            try {
                const formData = new FormData();
                formData.append('titulo', nome);
                formData.append('campos', JSON.stringify(template.campos));
                formData.append('template', template.id.toString());
                formData.append('file', arquivo);
                formData.append('formato', template.formato.toLowerCase());
                formData.append('usuario', usuario.matricula);
                formData.append('verify', verify);
                formData.append('repositorio', repositorio);
                formData.append('publico', String(publico));

                const response = await python.post('/file/upload/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        timeout: 4000000,
                    }
                });

                if (response.data.status == 'error') getError(response.data, response.data.message)
                else {
                    console.log('Upload bem-sucedido:', response.data.message);
                    if (publico) {
                        template.arquivos.push({
                            ...response.data.file,
                            id: crypto.randomUUID(),
                            template: { titulo: template.titulo },
                            usuario: { nome: usuario.nome, matricula: usuario.matricula }
                        });
                    }
                    setLoadingFile(false);
                    setModal(false);
                    setarquivo(null);
                    setnome('');
                    AlertSweet(response.data.message, 'success', false);
                }
            } catch (error) {
                console.log(error);
                getError(error as Error, 'Houve um erro ao tentar enviar')
            }
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
                                        <Typography variant="body1" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>
                                            <AiOutlineUser style={{ border: '1px solid #0000005a', borderRadius: '4px', marginRight: '5px' }} />
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


                                    <DialogSlide open={modal} handleClose={() => setModal(false)}>
                                        <Grid container bgcolor='#fff' display='block' justifyContent={'center'} textAlign={'center'} spacing={showTablet ? 0 : 3} px={showTablet ? 3 : 2} pl={showTablet ? 3 : 5} py={showTablet ? 2 : 3}>
                                            <Typography mt={3} variant="h5" color="inherit" align="left">Upload de Arquivo</Typography>

                                            <Typography mt={1} variant="body1" color="inherit" align="left">Template: <BoxSpanGray>{template.titulo}</BoxSpanGray></Typography>
                                            <Typography variant="body1" color="inherit" align="left">Formato: <BoxSpanGray>{template.formato}</BoxSpanGray></Typography>

                                            <TextField sx={{ mb: 1, mt: 1 }} label="Escreva o nome do arquivo" variant="filled" value={nome} onChange={(e) => setnome(e.target.value)} fullWidth />

                                            <TextField select label="Informe o repositório que você deseja salvar" variant="filled" value={repositorio} onChange={(e) => setrepositorio(e.target.value)} fullWidth>
                                                <MenuItem key={1} value='principal'>Servidor principal</MenuItem>
                                                <MenuItem key={2} value='secundario'>Servidor secundário</MenuItem>
                                                <MenuItem key={3} value='temporario'>Servidor temporário</MenuItem>
                                            </TextField>

                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1, mb: 1 }}>
                                                <Checkbox checked={publico} onChange={handleChangePublico} />
                                                <Typography variant="body1" color="initial">Deseja manter o arquivo público?</Typography>
                                            </Box>

                                            <Box sx={{ border: '2px dashed #ccc', textAlign: 'center', width: '90%', ml: '5%', py: 2 }}>
                                                {!loadingFile && (
                                                    <>
                                                        {arquivo ? (<PiCloudCheckLight size={55} />) : (<PiCloudArrowUpLight size={55} />)}
                                                    </>
                                                )}
                                                <Typography my={1} mt={-2} variant="body1" color="initial">
                                                    {loadingFile && (<CircularProgress sx={{ mt: 2 }} color='info' size={30} />)}<br />
                                                    {arquivo ? (<>Arquivo selecionado com sucesso!</>) : (<>Selecione o arquivo</>)}
                                                </Typography>
                                                {arquivo ? (
                                                    <FormControl sx={{ mt: 1 }}>
                                                        <FormLabel><Typography variant="body1" color="initial">Tipo de verificação</Typography></FormLabel>
                                                        <RadioGroup value={verify} onChange={handleChangeVerify} >
                                                            <FormControlLabel value="simples" control={<Radio />} label="Verificação rápida" />
                                                            <FormControlLabel value="completa" control={<Radio />} label="Verificação completa" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                ) : (
                                                    <>
                                                        <Typography mb={2} variant="body1" color="GrayText">CSV, XLS or XLSX, tamanho menor que 100MB</Typography>
                                                        <Button variant="outlined" component='label' color="info" disabled={arquivo ? true : false}>
                                                            {" "} Selecionar arquivo<input hidden accept=".csv,.xls,.xlsx" type="file" onChange={handleFileChange} />
                                                        </Button>
                                                    </>
                                                )}
                                            </Box>

                                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, pt: 3, pb: 1 }}>
                                                <Button variant="outlined" color='primary' onClick={() => setModal(false)} disabled={loadingFile}>
                                                    Retornar
                                                </Button>
                                                <Button variant="contained" color='primary' onClick={handleUpload} disabled={loadingFile}>
                                                    Continue
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </DialogSlide>

                                    <Grid mt={2} item xl={5} lg={5} md={5} sm={12} xs={12}>
                                        <Box display='flex' gap={1} alignItems='center' justifyContent='space-between'>
                                            <Box display='flex' gap={1} alignItems='center'>
                                                <Chip label={template.formato} color="secondary" />
                                                <Chip label={getStatusTemplate(flag).titulo} color={getStatusTemplate(flag).color} />
                                                {(usuario.verificado && checked) && (
                                                    <IconButton onClick={() => exportFile(template.titulo, template.campos, template.formato.toLowerCase())}>
                                                        <FiDownload size={24} color={theme.palette.azulClaro?.main} />
                                                    </IconButton>
                                                )}
                                            </Box>

                                            <Box display='flex' gap={1} alignItems='center'>
                                                {(usuario.verificado && usuario.perfil === 'Gestor') && (
                                                    <Switch color="primary"
                                                        value={checked}
                                                        checked={checked}
                                                        onChange={(e) => setChecked(e.target.checked)}
                                                    />
                                                )}

                                                {(usuario.verificado && usuario.perfil !== 'Gerente') && (
                                                    <>
                                                        {checked ? (
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
                                                                    ml: (usuario.verificado && usuario.perfil === 'Gestor') ? 0 : 8,
                                                                }}
                                                                onClick={() => setModal(true)}
                                                                icon={<FiUpload color="white" size={20} style={{ marginLeft: 10 }} />}
                                                            />
                                                        ) : (
                                                            <Chip
                                                                label='Upload de arquivo'
                                                                sx={{
                                                                    backgroundColor: 'gray',
                                                                    color: 'white',
                                                                }}
                                                                icon={<FiUpload color="white" size={20} style={{ marginLeft: 10 }} />}
                                                            />
                                                        )}
                                                    </>
                                                )}
                                            </Box>
                                        </Box>

                                        <Box maxWidth='100%'>
                                            <TableCampos campos={template.campos} />
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