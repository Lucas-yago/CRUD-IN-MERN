import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { MenuAdmin } from '../../../components/menu-admin';
import { Copyright } from '../../../components/footer-admin';
import { FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';

 
const mdTheme = createTheme();

export const UsersRegister = () => {
  const[userType, setUserType] = React.useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>

        < MenuAdmin title={'USERS'} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <Paper sx={{ padding: '20px' }}>
                  <h2>Register Form</h2>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="name"
                        name="name"
                        label="Full name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                          labelId="type"
                          id="type"
                          value={userType}
                          label="Type"
                          onChange={handleChange}
                        >
                          <MenuItem value={1}>Employee</MenuItem>
                          <MenuItem value={2}>Admin</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        required
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            < Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}