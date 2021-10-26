import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import styles from "../styles/UserDetail.module.css"
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';


export default function UserDetail({ user }) {

    const [fUser, setFuser] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        user_email: user.user_email,
        user_phone: user.user_phone,
        actual_pass: "",
        new_pass: "",
        showPassword: false

    })

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center" className={styles.main} >

            <Grid item xs={6} >
                <TextField id="outlined-firt-name"
                    label="Primer nombre"
                    variant="outlined"
                    fullWidth
                    value={fUser.first_name}
                    onChange={(e) => {
                        setFuser({ ...fUser, first_name: e.target.value })
                    }} />
            </Grid>

            <Grid item xs={6} >
                <TextField
                    id="outlined-last-name"
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    value={fUser.last_name}
                    onChange={(e) => {
                        setFuser({ ...fUser, last_name: e.target.value })
                    }} />
            </Grid>

            <Grid item xs={12} >
                <TextField
                    id="outlined-user"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={fUser.user_email}
                    onChange={(e) => {
                        setFuser({ ...fUser, user_email: e.target.value })
                    }} />
            </Grid>

            <Grid item xs={12} >
                <Typography variant="subtitle2" display='inline' gutterBottom>
                    Cambio de contraseña:
                </Typography>
                <Divider />
            </Grid>

            <Grid item xs={12} >
                <InputLabel htmlFor="outlined-last-pass">Contraseña actual</InputLabel>
                <OutlinedInput
                    id="outlined-last-pass"
                    label="Contraseña actual"
                    variant="outlined"
                    fullWidth
                    placeholder="Ingresa tu contraseña acutal"
                    type={fUser.showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={(e) => { setFuser({ ...fUser, showPassword: !fUser.showPassword }) }}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {fUser.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    value={fUser.actual_pass}
                    onChange={(e) => {
                        setFuser({ ...fUser, actual_pass: e.target.value })
                    }} />
            </Grid>

            <Grid item xs={12} >
                <InputLabel htmlFor="outlined-last-pass">Nueva contraseña</InputLabel>
                <OutlinedInput
                    id="outlined-last-pass"
                    label="Nueva contraseña"
                    variant="outlined"
                    fullWidth
                    placeholder="Ingresa nueva contraseña"
                    type={fUser.showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={(e) => { setFuser({ ...fUser, showPassword: !fUser.showPassword }) }}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {fUser.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    value={fUser.new_pass}
                    onChange={(e) => {
                        setFuser({ ...fUser, new_pass: e.target.value })
                    }} />
            </Grid>

            <Grid item xs={12} >
                <InputLabel htmlFor="outlined-last-pass">Confirma nueva contraseña</InputLabel>
                <OutlinedInput
                    id="outlined-last-pass"
                    label="Confirma nueva contraseña"
                    variant="outlined"
                    fullWidth
                    placeholder="Deben coincidir con el campo anterior"
                    type={fUser.showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={(e) => { setFuser({ ...fUser, showPassword: !fUser.showPassword }) }}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {fUser.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    value={fUser.actual_pass}
                    onChange={(e) => {
                        setFuser({ ...fUser, actual_pass: e.target.value })
                    }} />
            </Grid>

        </Grid>
    )
}
