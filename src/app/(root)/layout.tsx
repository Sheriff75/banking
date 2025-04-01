import { Box, } from '@mui/material';
import Sidebar from '../../components/sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      fontFamily: inter.style.fontFamily,   
    }}>
     <Sidebar user={[{ firstName: 'Sheriff', lastName: 'Damilare', email: 'adeleyeSheriff464@gmail.com'}]}
     transactions = {[]} 
     banks= {[{acc: '123'}, {acc: '223'}]}/>
      {children}
    </Box>
  );
}
