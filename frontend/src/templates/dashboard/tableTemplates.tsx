import { GetTemplatePuroProps } from "../../logic/interfaces/template";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TablePagination, Container } from "@mui/material";
import * as React from 'react';
import { TemplateContainerGrid } from "../../styles/gridStyle";
import TemplateRow from "./templateRow";

const TableTemplates = ({ data }: { data: GetTemplatePuroProps[] }) => {

    const templates = data
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TemplateContainerGrid my={4} py={2} >
            <Container maxWidth="lg">
                <Typography variant="h5" color="initial">Lista de templates pendentes</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding='none' component="th" scope="row">Nome do template</TableCell>
                                <TableCell align="center">Autor do template</TableCell>
                                <TableCell padding='none' align="right">Formato</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {(rowsPerPage > 0
                                ? templates.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : templates
                            ).map((template) => (
                                <TemplateRow template={template} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 8, 10, 15, 25]}
                    component="div"
                    count={templates.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Container>
        </TemplateContainerGrid>
    );
}

export default TableTemplates;