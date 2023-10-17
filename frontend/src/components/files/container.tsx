import * as React from 'react';
import { TemplateContainerGrid } from '../../styles/gridStyle';
import { Pagination, Typography, Box } from '@mui/material';
import FileButton from './fileButton';
import { FileProps } from '../../logic/interfaces/file';
import BoxLoading from '../muiComponents/boxLoading';

interface Props {
    itemsPerPage: number;
    arquivos: FileProps[];
    formato?: string;
    message?: string;
}

const FileContainer = ({ arquivos, itemsPerPage, formato, message }: Props) => {
    arquivos = arquivos.filter((arquivo) => arquivo.aprovado === true);
    const getitemsPerPage = itemsPerPage;
    const newMessage = message === undefined ? 'Arquivos não foram encontrados' : message
    const [currentPage, setCurrentPage] = React.useState(1);
    const startIndex = (currentPage - 1) * getitemsPerPage;
    const endIndex = startIndex + getitemsPerPage;

    const arquivosToDisplay = arquivos.slice(startIndex, endIndex);

    return (
        <TemplateContainerGrid item mt={2} xs={12} alignItems={'start'}>
            <Typography align='left' pl={3} py={2} variant="h6" color="initial">Lista de arquivos</Typography>

            {arquivos.length !== 0 ? (
                <>
                    {arquivosToDisplay.map((file) => {
                        const newFormato = formato === undefined ? file.formato : formato;
                        return (
                            <FileButton key={file.id} file={file} formato={newFormato} />
                        )
                    })}
                </>
            ) : (
                <BoxLoading message={newMessage} loading={false} />
            )}

            <Box display="flex" justifyContent="flex-end" mt={2}>
                <Pagination
                    sx={{ p: 1, pb: 2 }}
                    count={Math.ceil(arquivos.length / getitemsPerPage)}
                    page={currentPage}
                    onChange={(_event, page) => setCurrentPage(page)}
                    color="secondary"
                    variant="outlined"
                    shape="rounded"
                />
            </Box>
        </TemplateContainerGrid>
    );
}

export default FileContainer;