import React, { useState } from 'react'
import { Container, Paper } from "@mui/material"

function Login() {

    const [isLogin, setIsLogin] = useState("true");
    return (
        <Container component={"main"} maxWidth="sx">

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

                    </>)
                        : <span>Register</span>
                }

            </Paper>
        </Container>
    )
}

export default Login