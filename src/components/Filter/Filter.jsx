import PropTypes from 'prop-types';
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

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
}


// import { useDispatch } from 'react-redux';
// import { changeFilter } from 'redux/contacts/filterSlice';

// import Box from '@mui/material/Box';
// import { TextField } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
// import PersonSearchIcon from '@mui/icons-material/PersonSearch';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = e => {
//     const contactName = e.target.value.toLowerCase();
//     dispatch(changeFilter(contactName));
//   };

//   return (
//     <Box maxWidth="600px" sx={{ margin: '0 auto' }}>
//       <TextField
//         onChange={filter}
//         id="standard-search"
//         label="Find contact by name"
//         type="search"
//         variant="standard"
//         sx={{ mb: 2 }}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <PersonSearchIcon />
//             </InputAdornment>
//           ),
//         }}
//       />
//     </Box>
//   );
// };