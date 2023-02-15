import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeader = ({ tableConfiguration }) => {
    return (
        <TableHead>
            <TableRow>
                {
                    tableConfiguration.filter((columnCofig) => columnCofig.defaultColumn || 
                    columnCofig.isVisible).map((columnCofig) => {
                        return (
                            <TableCell key={columnCofig.name}> {columnCofig.name} </TableCell>
                        );
                    })
                }
            </TableRow>
        </TableHead>
    );
}; 

export default TableHeader;