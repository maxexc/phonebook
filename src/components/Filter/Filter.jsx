import SearchIcon from '@mui/icons-material/Search';
import { TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Item } from './Filter.styled';


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
          <Item >
            <SearchIcon sx={{ color: '#0f7ec9', mr: 1, fontSize: 30, }}/>
            <TextField
                variant="standard"
                id="standard-search"
                label="Enter request"
                type="search"
                name="filter" 
                value={valueFilter}
                onChange={onFilter}      
            ></TextField>   
          </Item>
        </label>     
    )    
 }

export default Filter;
