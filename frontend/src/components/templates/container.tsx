import { Box, CircularProgress, Divider, IconButton, Typography } from "@mui/material";
import { AiFillAppstore, AiOutlineMenu } from 'react-icons/ai'
import { TemplateContainerGrid } from '../../styles/gridStyle';
import { TemplateContainerProps } from '../../logic/interfaces/template';
import { GetTemplate } from './templateList';

export interface Props extends TemplateContainerProps {
    itemsPerPage: number;
    onlyActive?: boolean;
}

const TemplateContainer = ({ itemsPerPage, onlyActive, formatos, templates, message, loading }: Props) => {

    const template = templates.filter((template) => {
        if (onlyActive) {
            return template.status === "Ativo";
        } else {
            return template.status !== "Pendente";
        }
    });

    const messageFinal = message === '' ? template.length === 0 ? "Todos os templates estão pendentes" : '' : message

    return (
        <TemplateContainerGrid p={2} item xl={12} lg={12} md={12} sm={12} xs={12}>
            {loading ? (
                <>
                    <Box pl={1} display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography variant="h6" color="initial">Lista de templates</Typography>
                        <Box display='flex' alignItems='center'>
                            <IconButton sx={{ color: '#000' }} disabled>
                                <AiOutlineMenu />
                            </IconButton>
                            <IconButton sx={{ color: '#000' }} disabled>
                                <AiFillAppstore />
                            </IconButton>
                        </Box>
                    </Box>
                    <Divider sx={{ py: '1px' }} />
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <CircularProgress />
                    </Box>
                </>

            ) : (
                <>
                    {messageFinal === "" ? (
                        <GetTemplate formatos={formatos} itemsPerPage={itemsPerPage} onlyActive={onlyActive} templates={template} />
                    ) : (
                        <>
                            <Box pl={1} display='flex' justifyContent='space-between' alignItems='center'>
                                <Typography variant="h6" color="initial">Lista de templates</Typography>
                                <Box display='flex' alignItems='center'>
                                    <IconButton sx={{ color: '#000' }} disabled>
                                        <AiOutlineMenu />
                                    </IconButton>
                                    <IconButton sx={{ color: '#000' }} disabled>
                                        <AiFillAppstore />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Divider sx={{ py: '1px' }} />
                            <Typography my={2} ml={1} variant="body1" color="initial">{messageFinal}</Typography>
                        </>
                    )}
                </>
            )}
        </TemplateContainerGrid>
    );
}

export default TemplateContainer;