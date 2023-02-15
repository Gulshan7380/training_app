import { TableCell, TableRow } from "@mui/material";
import {withErrorBoundary} from 'react-error-boundary';

const TableData = ({ tableData, tableConfiguration }) => {
    return tableData.map((row, index) => {
        const getTableCellList = (row, counter) => {
            return tableConfiguration.filter((columnCofig) => columnCofig.defaultColumn || 
            columnCofig.isVisible).map((columnConfig) => {
                if (columnConfig.accessor === 'index') {
                    return <TableCell>{row['counter']}</TableCell>
                }
                return (
                    <TableCell>{ row[columnConfig.accessor] } </TableCell>
                )
            });
        };
        return (
            <TableRow key={row.deviceID}>
                {getTableCellList(row, index)}
            </TableRow>
        )
    }); 
};

const TableDataErrorBoundary = withErrorBoundary(TableData, {
    FallbackComponent: (error) => {
        return (
            <TableRow>
                Some Error Occoured!
            </TableRow>
        )
    },
    onError(error, info) {
        return 'hello world';
      // Do something with the error
      // E.g. log to an error logging client here
    },
})

  
export default TableDataErrorBoundary;