import React, { useState } from 'react'
import { Button, Container, Paper, TextField, Typography } from "@mui/material"



function Login() {

    const [isLogin, setIsLogin] = useState("true");
    const ToggleLogin = () => setIsLogin( (prev) => !prev);
    return (
        <Container component={"main"} maxWidth="xs" sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Paper elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>

                {
                    isLogin ? (<>

                        <Typography variant="h5">Login</Typography>
                        <form style={{
                            width: "100%",
                            marginTop: "1rem"
                        }}>
                            <TextField required fullWidth label="UserName" margin='normal' variant='outlined' />
                            <TextField required fullWidth label="PassWord" type='password' margin='normal' variant='outlined' />
                            <Button sx={{ marginTop: "1rem" }} fullWidth variant='contained' color='primary' type='submit'>Login</Button>
                            <Typography textAlign={'center'} m={'1rem'}>OR</Typography>

                            <Button fullWidth variant='text' onClick={ToggleLogin}>Sign In Instead</Button>
                        </form>

                    </>)
                        : (<>

                            <Typography variant="h5">Sign Up</Typography>
                            <form style={{
                                width: "100%",
                                marginTop: "1rem"
                            }}>

                                

                                <TextField required fullWidth label="Name" margin='normal' variant='outlined' />
                                <TextField required fullWidth label="Bio" margin='normal' variant='outlined' />
                                <TextField required fullWidth label="UserName" margin='normal' variant='outlined' />
                                <TextField required fullWidth label="PassWord" type='password' margin='normal' variant='outlined' />
                                <Button sx={{ marginTop: "1rem" }} fullWidth variant='contained' color='primary' type='submit'>Sign Up</Button>
                                <Typography textAlign={'center'} m={'1rem'}>OR</Typography>

                                <Button fullWidth variant='text' onClick={ToggleLogin}>Log In Instead</Button>
                            </form>

                        </>
                        )}

            </Paper>
        </Container>
    )
}

export default Login