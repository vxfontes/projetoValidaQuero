import * as React from 'react';
import { Box, Divider, Grid, IconButton, InputAdornment, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";
import { AiFillAppstore, AiOutlineMenu } from 'react-icons/ai'
import GridContainers from "../muiComponents/gridContainers";
import TemplateGrade from "./grade";
import { Props } from './container';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

export const GetTemplate = ({ templates, itemsPerPage, formatos, message }: Props) => {

    const [searchValue, setSearchValue] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const [selectedFormat, setSelectedFormat] = React.useState('CSV');
    const filteredByName = templates.filter((template) => {
        return template.titulo.toLowerCase().includes(searchValue.toLowerCase());
    });
    const filteredTemplates = filteredByName.filter((template) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFormat]);

    return (
        <>
            <Box pl={1} display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" color="initial">Lista de templates</Typography>
                <Box display='flex' alignItems='center'>
                    <Box>
                        <TextField
                            sx={{ mr: 1 }}
                            variant="standard"
                            placeholder='Pesquise por template...'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><PiMagnifyingGlassBold /></InputAdornment>),
                            }}
                        />
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
                            count={Math.ceil(filteredTemplates.length / itemsPerPage)}
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