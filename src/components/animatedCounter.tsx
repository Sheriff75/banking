'use client'
import {Box} from '@mui/material'
import CountUp from 'react-countup';
const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <Box>
        <CountUp 
        end={amount}
        duration={2.75}
        prefix = "$"
        decimal='2'
        />
    </Box>
  )
}

export default AnimatedCounter