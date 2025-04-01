import HeaderBox from '../../components/headerBox';
import { Box, Typography } from '@mui/material';
import TotalBalanceBox from '../../components/totalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Sheriff', lastName: 'Adeleye', email: 'adeleyesheriff464@gmail.com' };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: { lg: '100vh' },
        overflowY: { lg: 'scroll' },
        '&::-webkit-scrollbar': {
          dispaly: 'none',
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        padding: '1rem',
        marginTop: {xs: '3.33rem', md: '0'}
        
      }}
    >
      <Box
        sx={{
          '&::-webkit-scrollbar': {
            dispaly: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          width: '100%',
          flexDirection: 'column',
          gap: '1rem',
          py: { sm: '0.4rem', lg: '0.75rem' },
          px: { sm: '0.5rem', lg: '0.25rem' },
          height: { xl: '100vh' },
          overflowY: { xl: 'scroll' },
          flexGrow: 1
        }}
      >
        <Typography
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-betwen',
            gap: '0.5rem',
          }}
        >
          <HeaderBox
            type="greeting"
            title="Welcome back"
            subtext="Access and manage your accont and transactiions effectively"
            user={loggedIn?.firstName || 'User'}
          />
        </Typography>
        <Box sx = {{
          display : 'flex',
          justifyContent: 'center',
          ml: {xs: '0', md:'-14.5rem'} 
        }}>         
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={5000}
          />
          </Box>
      </Box>
    </Box>
  );
};

export default Home;
