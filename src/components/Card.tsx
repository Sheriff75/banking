import React from 'react'
import {Paper, Box, Typography, Stack, Divider} from '@mui/material'
import Image from 'next/image'

interface Props {
    user? : Array<{firstName: string, lastName: string, email: string}>
}
const Card = (item : Props) => {
    const {user} = item

    const vector: string = '/vector.png'

    return (
        <Paper 
        sx = {{
            color: 'white',
            display: 'flex',  
            width: '100%',
            height: '190px',
            margin: 0,
            padding: 0,
        }}>
            <Box sx = {{
                display: 'flex',
                flexDirection : 'column',
                padding: '1rem',
                pb: '0.3rem',
                background: 'linear-gradient(90deg,rgb(81, 228, 76),rgb(245, 88, 26), rgb(27, 41, 235))',
                width: '75%',              
            }}>
                <Typography variant = 'body1'>
                    {user?.[0]?.firstName}  {user?.[0]?.lastName}
                </Typography>
                <Box sx = {{
                     display: 'flex',
                     flexDirection: 'column',
                     height: '100%',
                     justifyContent: 'flex-end' 
                }}>
                <Stack direction = 'row' sx = {{
                    display: 'flex',
                    justifyContent: 'space-between'          
                }}>
                    <Typography variant = 'caption'> 
                    {user?.[0]?.firstName} {user?.[0]?.lastName}
                    </Typography>
                    <Typography  variant = 'caption'>
                        {new Date().toLocaleDateString('en-us', {day: '2-digit', month: '2-digit'})}
                    </Typography>
                </Stack>
                    <Typography variant= 'subtitle2'> 
                        1234 1234 1234 1234
                    </Typography>
                </Box>
            </Box>
            <Divider orientation = 'vertical' sx = {{
                height: '100%'
            }}/> 
            <Box sx = {{
                width: '25%',
                backgroundColor : 'rgba(241, 68, 68, 0.92)',
                padding: '1rem',
                pb: '0.3rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}>
                <Image src = {vector} height = {20} width = {20} alt = 'vector' 
                style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    justifySelf: 'flex-end',
                    alignItems: 'center',
                    textAlign: 'right'
                }} />
                <Typography></Typography>
            </Box>
        </Paper>
    )
}

export default Card;