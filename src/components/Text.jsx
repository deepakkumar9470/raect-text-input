import {Box, TextField} from '@mui/material';

import './text.scss'

const TextComponent = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          className="mytext"
          required
          id="outlined-required"
          label="Name"
          defaultValue="Deepak Kumar"
        />
     </div>
   
    </Box>
  );
}

export default TextComponent;