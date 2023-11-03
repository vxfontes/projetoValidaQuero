import * as React from 'react';
import { Box, Divider, Grid, IconButton, MenuItem, Pagination, Select, Typography } from "@mui/material";
import { AiFillAppstore, AiOutlineMenu } from 'react-icons/ai'
import GridContainers from "../muiComponents/gridContainers";
import TemplateGrade from "./grade";
import { Props } from './container';

export const GetTemplate = ({ templates, itemsPerPage, formatos, message }: Props) => {

    const [getitemsPerPage, setitemsPerPage] = React.useState(itemsPerPage);
    const [currentPage, setCurrentPage] = React.useState(1);
    const startIndex = (currentPage - 1) * getitemsPerPage;
    const endIndex = startIndex + getitemsPerPage;

    const [selectedFormat, setSelectedFormat] = React.useState('CSV');
    const filteredTemplates = templates.filter((template) => {
        return template.formato === selectedFormat;
    });
    const templatesToDisplay = filteredTemplates.slice(startIndex, endIndex);

    if (filteredTemplates.length === 0) {
        message = 'Não foram encontrados templates desse formato'
    } else {
        message = ''
    }

    React.useMemo(() => {
        setCurrentPage(1);
    }, [selectedFormat]);
    
    return (
        <>
            <Box pl={1} display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" color="initial">Lista de templates</Typography>
                <Box display='flex' alignItems='center'>
                    <Box>
                        <Select value={selectedFormat} variant="standard" onChange={(e) => setSelectedFormat(e.target.value)}>
                            {formatos.map((format) => (
                                <MenuItem key={format.id} value={format.titulo}>
                                    {format.titulo}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <IconButton sx={{ color: '#000' }}>
                        <AiOutlineMenu />
                    </IconButton>
                    <IconButton sx={{ color: '#000' }}>
                        <AiFillAppstore />
                    </IconButton>
                </Box>
            </Box>
            <Divider sx={{ py: '1px' }} />

            <GridContainers align='center' direction='row' justify="space-around">

                {filteredTemplates.length === 0 ? (
                    <Typography my={2} ml={1} variant="body1" color="initial">{message}</Typography>
                ) : (
                    <>
                        {templatesToDisplay.map((template) => (
                            <TemplateGrade key={template.id} template={template} />
                        ))}
                    </>
                )}

                <Grid pt={1} item xl={11} lg={11} md={11} sm={11} xs={11}>
                    <GridContainers align='center' direction='row' justify="end">
                        <Pagination
                            count={Math.ceil(filteredTemplates.length / getitemsPerPage)}
                            page={currentPage}
                            onChange={(_event, page) => setCurrentPage(page)}
                            color="secondary"
                            variant="outlined"
                            shape="rounded"
                        />
                    </GridContainers>
                </Grid>
            </GridContainers>
        </>
    )
}