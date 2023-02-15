import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TableCell, TableHead, TextField, Divider, Button, Stack, Paper, styled } from "@mui/material";
import Table from '../constants/table'
import { useForm } from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AddServer = ({ open, handleClose, handleAddNewServer }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const submitHandler = (data) => {
      handleAddNewServer(data);
    };

    const cancelHandler = () => {
      handleClose();
    };
    return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
         <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Server
          </Typography>
          <Divider />
          <Stack spacing={2}>
            <form onSubmit={handleSubmit(submitHandler)}>
              <Item>
                <TextField error={errors.deviceId} id="standard-basic" label="Device ID" variant="standard" 
                {...register("deviceId", { required: true })} helperText="Please enter Device ID" />
              </Item>
              <Item>
                <TextField error={errors.ipAddress} id="standard-basic" label="IP Address" variant="standard" helperText="Please enter IP Address" 
                {...register("ipAddress", { required: true, pattern: /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/i })} />
              </Item>
              <Item>
                <TextField error={errors.ramSize} id="standard-basic" label="RAM Size" variant="standard" 
                {...register("ramSize", { required: true })} />
              </Item>
              <Button type="submit" variant="outlined">
                Add Server
              </Button>
              <Button onClick={cancelHandler} variant="outlined">
                Cancel
              </Button>
            </form>
          </Stack>
        </Box>
      </Modal>
   
  );
}       

const Textbox = () => {
    return (
        <div>
             <Table/>
        </div>
)
}

export default AddServer;