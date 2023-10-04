import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TemplateAllProps } from "../../logic/interfaces/template";

const TableCampos = ({ template }: TemplateAllProps) => {
    return (
        <TableContainer>
            <Table size="small" sx={{ maxWidth: '80%' }}>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell align="right">Permite nulo?</TableCell>
                        <TableCell align="right">Tipo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {template.campos.map((campo, index) => (
                        <TableRow
                            key={campo.nome}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                                {index + 1}
                            </TableCell>
                            <TableCell align="left">{campo.nome}</TableCell>
                            <TableCell align="right">{campo.nulo ? "Sim" : "Não"}</TableCell>
                            <TableCell align="right">{campo.tipo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableCampos;