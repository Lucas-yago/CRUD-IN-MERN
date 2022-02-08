import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ButtonGroup, Chip, IconButton } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { MenuAdmin } from '../../../components/menu-admin';
import { Copyright } from '../../../components/footer-admin';
import { Paper } from '@mui/material';
import api from '../../../services/api'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getNameType, getColorLabel } from '../../../functions/static_data';

const mdTheme = createTheme();

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/api/v1/users');
            setUsers(response.data);
        }
        loadUsers();
    }, []);

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>

                < MenuAdmin title={'DASHBOARD'} />
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
                                    <h2>User Listing</h2>
                                    <Grid container xs={12} sm={12} >
                                        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                                            <Table sx={{ minWidth: 650, border: 'none' }} size="small" aria-label="table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Name</TableCell>
                                                        <TableCell align="center"> <strong>Email</strong></TableCell>
                                                        <TableCell align="center"><strong>Type</strong></TableCell>
                                                        <TableCell align="center"><strong>Date</strong></TableCell>
                                                        <TableCell align="right"><strong>Options</strong></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {users.map((user, index) => (
                                                        <TableRow
                                                            key={index}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {user.user_name}
                                                            </TableCell>
                                                            <TableCell align="center">{user.user_email}</TableCell>
                                                            <TableCell align="center">
                                                                <Chip label={getNameType(user.user_type)} color={getColorLabel(user.user_type)} />
                                                            </TableCell>
                                                            <TableCell align="center">{new Date(user.createdAt).toLocaleString('pt-br')}</TableCell>
                                                            <TableCell align="right">
                                                                <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                                                                    <IconButton aria-label="edit" color="primary">
                                                                        <EditIcon />
                                                                    </IconButton>
                                                                    <IconButton aria-label="delete" color="error">
                                                                        <DeleteIcon />
                                                                    </IconButton>
                                                                </ButtonGroup>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                        < Copyright />
                    </Container>
                </Box>
            </Box >
        </ThemeProvider >
    );
}