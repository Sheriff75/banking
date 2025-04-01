import { Typography, Paper, Container, Box } from '@mui/material';
import AnimatedCounter from './animatedCounter';
import DoughnutChart from './doughnut';

interface TotalBalanceBoxProps {
  accounts: [];
  totalBanks: number;
  totalCurrentBalance: number;
}

const TotalBalanceBox = ({
  accounts,
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <Paper
      elevation={5}
      sx={{
        display: 'flex',
        gap: { sm: '0.5rem', lg: '1rem' },
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: { sm: '1rem', lg: '2.5rem' },
        padding: '0.5rem',
        width: {xs:'80vw', md:'50vw'},
        height: {xs:'250px', md:'300px'}
      }}
    >
      <Container sx= {{
        height: {xs : '150px', md: '250px'}, 
        width: {xs : '150px', md: '250px'}, 
        objectFit: 'cover',
        flex: 1,
        justifyContent: 'center'
      }}>
        <DoughnutChart accounts ={accounts} />
         </Container>
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',

        }} >
      <Typography
        sx={{
          fontSize: { xs: '14px', lg: '20px' },
        }}
      >
        Bank Accounts: {totalBanks}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '9px', lg: '13px' },
        }}
      >
        total current balance
      </Typography>
      <AnimatedCounter amount={totalCurrentBalance} />
      </Box>
    </Paper>
  );
};

export default TotalBalanceBox;
