import { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function MultipleSelectCheckmarks({
  tableConfiguration, handleConfigurationUpdate
}) {
  const [deviceList, setDeviceList] = useState([]);

  useEffect(() => {
    setDeviceList(tableConfiguration.map((column) => column.name));
  }, [tableConfiguration]);
  

  const handleChange = (event) => {
    handleConfigurationUpdate({ name: event.target.name, value: event.target.checked });
    /*
    const {
      target: { value },
    } = event;
    setDeviceList(
      typeof value === 'string' ? value.split(',') : value,
    );
    */
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={deviceList}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {tableConfiguration.map((column) => (
            <MenuItem key={column.name} value={name}>
              <Checkbox
                checked={column.isVisible ? deviceList.indexOf(column.name) > -1 : false}
                onChange={handleChange}
                name={column.name}
                disabled={column.defaultColumn}
              />
              <ListItemText primary={column.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}