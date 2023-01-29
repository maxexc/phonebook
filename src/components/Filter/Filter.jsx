import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import {
  FilterTitle, 
  Filterinput, 
} from './Filter.styled';


export const Filter = () => {
  const valueFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

    const onFilter = event => {
        dispatch(filterContacts(event.currentTarget.value));
    };  
     
    return (    
        <label>
          <Typography variant="h2" gutterBottom>
              Filter
          </Typography >
            <FilterTitle>Filter</FilterTitle>  
            <Filterinput
                type="text"
                name="filter" 
                value={valueFilter}
                onChange={onFilter}
                placeholder="Enter request"
            ></Filterinput>            
        </label>     
    )    
 }

export default Filter;
