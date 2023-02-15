import { Table, TableBody, TableContainer, Pagination, TablePagination, Select, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getDeviceList, addDevice } from "../services/device";
import Paper from '@mui/material/Paper';
import TableHeader from "../compoents/TableHeader";
import TableData from "../compoents/TableData";
import AddServer from "../compoents/AddServer";
import  MultipleSelectCheckmarks from "../compoents/MultipleSelectCheckmarks";
import TABLE_CONIGURATION from "../constants/table";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Home = () => {

    const [deviceList, setDeviceList] = useState([]);
    const [deviceListToShow, setDeviceListToShow] = useState([]);
    const [page, setPage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowsPage, setRowsPage] = useState(10);
    useEffect( () => {
        getDevices();
    }, []);

    const getDevices = async () => {
        const result = await getDeviceList();
        const newResult = result.map((row, index) => {
            row['counter'] = index;
            return row;
        });
        setDeviceList(newResult);
        setDeviceListToShow(newResult.slice(0, rowsPage));
    };
    const [tableConfiguration, setTableConfiguration] = useState(TABLE_CONIGURATION.CONFIGURATION);
    if (!deviceList.length) {
        return (
            <div> 
                <Stack  spacing={1}>             
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  <Skeleton variant="circular" width={100} height={100} />
                  <Skeleton variant="rectangular" width='100%' height={60} />
                  <Skeleton variant="rounded" width='100%' height={60} />
                </Stack>
            </div>
        )
    }
    
    const changePageData = (event, pageIndex) => {
        const startIndex = (pageIndex - 1 ) * rowsPage; 
        const endIndex = pageIndex * rowsPage - 1;
        setPage(pageIndex);
        setDeviceListToShow(deviceList.slice(startIndex, endIndex));

        /* 
        1: totalRows: 5000, pageIndex = 1
           startIndex: pageIndex - 1 * 100 = 0,
           endIndex: pageIndex * 100 = 100 - 1 = 99
        2:
            startIndex: pageIndex - 1 * 100  = 100
            endIndex:  pageIndex * 100 = 200 - 1 = 199
        3
            startIndex: pageIndex - 1 * 100  = 200
            endIndex:  pageIndex * 100 = 300 - 1 = 299 
        4
        5
        .
        .
        50
        */
    };

    const changeRowsPerPage = (event) => {
        alert(event);
    };

    const handleConfigurationUpdate = ({ name, value }) => {
        let selectedColumn = tableConfiguration.find((column) => column.name === name);
        selectedColumn.isVisible = value;
        setTableConfiguration([ ...tableConfiguration.filter((column) => column.name !== name), ...[selectedColumn] ]);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const handleAddNewServer = async (data) => {
        const result = await addDevice(data);
        if (result.message === 'success') {
            setDeviceList([ ... deviceList, data]);
        }
        setIsModalOpen(false);
    };
  

    return (
        <div>
            <div style={{ display: 'flex', gridGap: '50%' }}>
                <div className="justify-start">
                    <div>Total: {deviceList.length}</div>
                    <div>Current Page Items: {deviceListToShow.length}</div>
                </div>
                <div className="justify-end">
                    <MultipleSelectCheckmarks
                        handleConfigurationUpdate={handleConfigurationUpdate}
                        tableConfiguration={tableConfiguration}
                    />
                </div>    
            </div>
            <TableContainer component={Paper}>
                <Stack direction="row" spacing={2}>
                    <Button onClick={() => setIsModalOpen(true)}>Add new Server</Button>
                    <Button>Enroll Selected Servers</Button>
                    <Button>Un Enroll Selected Servers</Button>
                    </Stack>
                <Table>
                    <TableHeader tableConfiguration={tableConfiguration} />
                    <TableBody>
                        <TableData
                            tableConfiguration={tableConfiguration}
                            tableData={deviceListToShow}
                         />
                    </TableBody>

                    <TablePagination
                        count={deviceList
                        ?.length}
                        variant="outlined"
                        page={page}
                        shape="rounded"
                        rowsPerPage={rowsPage}
                        onPageChange={changePageData}
                        onRowsPerPageChange={changeRowsPerPage}
                    />
                </Table>

                <AddServer open={isModalOpen} handleAddNewServer={handleAddNewServer} handleClose={handleClose} />
             
            </TableContainer>
        </div>
    );
};

export default Home;