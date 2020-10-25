import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';

const SelectInput = props => {

    const {teamCount} = props;
    const [option, setOption] = useState('N/A');
    const [open, setOpen] = useState(false);

    const createMenuItems = (teamCount) => {
        let options = [];
        for (let i = 1; i < teamCount; i++) {
            options.push(<MenuItem value={i+1}><em>{i+1}</em></MenuItem>)
        }
        return options;
    }
    const optionsMenu = createMenuItems(teamCount);



    const handleClick = () => {
        setOpen(!open);
    }
    const handleChange = (event) => {
        setOption(event.target.value);
    }

    return (
        <div>
            <FormControl>
                <InputLabel>Teams</InputLabel>
                <Select
                    open={open}
                    onClose={handleClick}
                    onOpen={handleClick}
                    value={option}
                    onChange={handleChange}
                >
                    {optionsMenu ? optionsMenu :  <MenuItem value={'N/A'}><em>{'N/A'}</em></MenuItem>}
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectInput;