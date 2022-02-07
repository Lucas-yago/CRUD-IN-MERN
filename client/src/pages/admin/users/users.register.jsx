import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { MenuAdmin } from '../../../components/menu-admin';
import { Copyright } from '../../../components/footer-admin';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import api from '../../../services/api';

const mdTheme = createTheme();

export const UsersRegister = () => {
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userType, setUserType] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  const handleSubmit = () => {
    const data = {
      user_name: userName,
      user_email: userEmail,
      user_type: userType,
      user_password: userPassword
    };
    if (userName !== '' && userEmail !== '' && userType !== '' && userPassword !== '') {

      api.post('/api/v1/users', data)
        .then((response) => {
          if (response.status === 200) {
            window.location.href = '/admin/users';
          } else {
            alert('Error registering user');
          }
        })
    } else {
      alert('Please fill in all form fields');
    }
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
                  <h2>Register user</h2>
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
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
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
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel id="type">Type</InputLabel>
                        <Select
                          labelId="type"
                          id="type"
                          value={userType}
                          label="Type"
                          onChange={e => setUserType(e.target.value)}
                        >
                          <MenuItem value={1}>Admin</MenuItem>
                          <MenuItem value={2}>Manager</MenuItem>
                          <MenuItem value={3}>Employee</MenuItem>
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
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ textAlign: 'center' }}>
                      <Button
                        variant="contained"
                        type='submit'
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
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