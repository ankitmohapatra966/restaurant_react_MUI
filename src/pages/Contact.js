import React from 'react'
import Layout from '../components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <div>
    <Layout>
    <Box sx={{my:5,textAlign:"center", ml:5,mr:5, "& h4":{fontWeight:"bold" , mb:2,bgcolor:"goldenrod"}}}>
      <Typography variant="h4">Contact My Restuarant </Typography>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Enim rerum, ex asperiores quo quos non voluptatibus ullam a cum molestiae 
       pariatur voluptate hic repellendus similique, 
      quasi porro? Ad, repellat dolorem!</p>
    </Box>
    <Box
        sx={{
          m: 5,
          width: "600px",
          ml: 50,
          "@media (max-width:600px)": {
            width: "240px",
          },
        }}
      >
      <TableContainer component={Paper}>
      <Table aria-label='contact table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{bgcolor:'black',color:'white',}}align ="center">Contact Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
            <SupportAgentIcon sx={{color:'red',pt:1}}/> 1800-100-256 (tollfree)
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
              <EmailIcon sx={{color:"skyblue", pt:1}}/> help@myrest.com
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <CallIcon sx={{color:'green', pt: 1}} />123456789
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
    </Box>
    </Layout>
      
    </div>
  );
};

export default Contact;
