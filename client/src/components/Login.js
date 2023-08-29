import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const initialFormState = {
  username: "",
  password: "",
}
export function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  return (
    <div>
          <img src={process.env.PUBLIC_URL + "Dogoutline.png"} width="150px" />
          <h1>Pet Snuggles</h1>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  </div>
);

}


export function Login() {
  const [form, setForm] = useState (initialFormState)
  // const options = parks ? parks.map((park) => (
  //   { key: park.LocationNumber, text: park.LocationName, value: park.LocationName }
  // )) : [];
     function handleForm(e, data) {
      setForm({...form, [data.name] : data.value})
     }
    
        function handleSubmit(e){
          e.preventDefault()
          fetch('', {
            method: '',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
              'name' : form.name,
              'password' : form.password
            })
        })
        .then(res =>res.json())
        setForm(initialFormState)
        }
  
    return (
        <React.Fragment>
          <CssBaseline />
          <Container></Container>
          <Container fixed>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <div>
                <TextField
                  label="username"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">username</InputAdornment>,
                  }}
                  onChange={(e) => handleForm(e, { name: 'username', value: e.target.value })}
                />
                <InputAdornments /> 
              </div>
              <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={handleSubmit}>Login</Button>
              </Stack>
            </Box>
            <div>
                <Stack spacing={2} direction="row">
                  <Button variant="outlined">Sign up</Button>
                </Stack>
            </div>
            <div>
              <Stack spacing={2} direction="row">
                <Button variant="outlined">forgot password</Button>
              </Stack>
            </div>
          </Container>
        </React.Fragment>
      );
    }

export default Login
