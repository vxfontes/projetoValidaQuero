import * as React from 'react';
import { fakeArquivos } from "../../data/fakeArquivos";
import { TemplateContainerGrid } from '../../styles/gridStyle';
import { Pagination, Typography, Box } from '@mui/material';
import FileButton from './fileButton';

interface Props {
    itemsPerPage: number
}

const FileContainer = ({ itemsPerPage }: Props) => {
    const arquivo = fakeArquivos.filter((file) => file.aprovado === true);
    const getitemsPerPage = itemsPerPage;
    const [currentPage, setCurrentPage] = React.useState(1);
    const startIndex = (currentPage - 1) * getitemsPerPage;
    const endIndex = startIndex + getitemsPerPage;

    const arquivosToDisplay = arquivo.slice(startIndex, endIndex);

    return (
        <TemplateContainerGrid item mt={2} xs={12} alignItems={'start'}>
            <Typography align='left' pl={3} py={2} variant="h6" color="initial">Lista de arquivos</Typography>

            {arquivosToDisplay.map((file) => (
                <FileButton key={file.id} file={file} />
            ))}

            <Box display="flex" justifyContent="flex-end" mt={2}>
                <Pagination
                    sx={{ p: 1, pb: 2 }}
                    count={Math.ceil(arquivo.length / getitemsPerPage)}
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