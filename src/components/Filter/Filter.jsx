import { TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
// import {
//   FilterTitle, 
//   Filterinput, 
// } from './Filter.styled';


export const Filter = () => {
  const valueFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

    const onFilter = event => {
        dispatch(filterContacts(event.currentTarget.value));
    };  
     
    return (    
        <label>
          <Typography variant="h6" gutterBottom sx={{ width: "292px", mb: 0, mt: 1 }}>
              Filter
          </Typography >
            <TextField
                variant="standard"
                id="standard-search"
                label="Enter request"
                type="search"
                name="filter" 
                value={valueFilter}
                onChange={onFilter}                                
                // placeholder="Enter request"
            ></TextField>            
        </label>     
    )    
 }

export default Filter;
