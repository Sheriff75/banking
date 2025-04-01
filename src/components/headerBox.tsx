import {Box, Typography,} from '@mui/material'
const HeaderBox = ({
  type = 'title',
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography sx={{
        fontSize: {xs: '24px', lg: '30px'},
        lineHeight: {xs: '30px', lg: '38px'},
        fontWeight: 'semibold',
        color: 'gray.900'
      }} >
        {title}
        {type === 'greeting' && (
          <span style={{color: 'rgb(8, 30, 231)'}}>&nbsp;{user}</span>
        )}
      </Typography >
      <Typography  sx = {{
        fontSize: {xs: '14px', lg: '16px'},
        lineHeight: {xs: '20px', lg: '22px'},
        fontWeight: 'normal',
        color: 'gray.500',
        marginTop: '0.5rem'
      }} >
        {subtext}
      </Typography>
    </Box>
  );
};

export default HeaderBox;
