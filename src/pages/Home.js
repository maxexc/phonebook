// import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// import Stack from '@mui/material/Stack';


export const Home = () => {
    return (
      <>
        <h1>Welcome to your phonebook application!</h1>
        {/* <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: '600px', margin: '0 auto' }}
        > */}
          {/* <Image name="home.jpg" alt="A man looks at his laptop " w="300" /> */}
          <p>
            This app allows you to be always close to your contacts. To start
            using it right now, just <b><Link to="/register">create</Link></b> an account, it will not take much time, but you will be sure that you
            already have access to them!
          </p>
        {/* </Stack> */}
      </>
    );
  };
  
  export default Home;
  