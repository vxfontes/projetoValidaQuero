import * as React from 'react';
import { Box, Divider, Grid, IconButton, MenuItem, Pagination, Select, Typography } from "@mui/material";
import { AiFillAppstore, AiOutlineMenu } from 'react-icons/ai'
import GridContainers from "../muiComponents/gridContainers";
import { useState } from "react";
import TemplateGrade from "./grade";
import { fakeTemplates } from "../../data/fakeTemplates";
import { formatoArray } from "../../data/formato";
import { TemplateContainerGrid } from '../../styles/gridStyle';

interface Props {
    itemsPerPage: number;
    onlyActive: boolean;
}

const TemplateContainer = ({ itemsPerPage, onlyActive }: Props) => {

    const template = fakeTemplates.filter((template) => {
        if (onlyActive) {
            return template.status === "Ativo";
        } else {
            return template.status !== "Pendente";
        }
    });

    const [getitemsPerPage, setitemsPerPage] = useState(itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * getitemsPerPage;
    const endIndex = startIndex + getitemsPerPage;

    const [selectedFormat, setSelectedFormat] = useState(1);
    const filteredTemplates = template.filter((template) => {
        return template.formato === selectedFormat;
    });
    const templatesToDisplay = filteredTemplates.slice(startIndex, endIndex);


    React.useMemo(() => {
        setCurrentPage(1)
    }, [selectedFormat])

    return (
        <TemplateContainerGrid p={2} item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box pl={1} display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" color="initial">Lista de templates</Typography>
                <Box display='flex' alignItems='center'>
                    <Box>
                        <Select value={selectedFormat} variant="standard" onChange={(e) => setSelectedFormat(Number(e.target.value))}>
                            {formatoArray.map((format) => (
                                <MenuItem key={format.id} value={format.id}>
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
                {templatesToDisplay.map((template) => (
                    <TemplateGrade key={template.id} template={template} />
                ))}

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
        </TemplateContainerGrid>
    );
}

export default TemplateContainer;