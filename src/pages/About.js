
import React from 'react'
import Layout from '../components/Layout';
import { Box, Typography } from '@mui/material';
const About = () => {
  return (
    <div>
      <Layout>
       <Box sx={{
       
        my:10,
        textAlign:"center",
        "& h4":{
          bgcolor:"goldenrod",
          fontWeight:"bold",
          my: 5,
          fontSize:"2 rem",
        },
        "&p ":{
          textAlign:"justify",
        },
        "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem",
            }
        }
       }}>
        <Typography variant='h4'>
          Welcome to my Restuarant
        </Typography>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Amet laboriosam rem nemo culpa porro, nihil quisquam perferendis aliquam voluptatibus impedit ea, 
          natus qui perspiciatis voluptas similique. Debitis perferendis quo natus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Cupiditate ut alias ea non culpa sit aliquid cum ratione illum aperiam.
           Quibusdam vitae perferendis porro molestias facere laudantium fuga cupiditate expedita?
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
           Sunt atque eveniet officiis ipsa sint, a adipisci, obcaecati praesentium deserunt perspiciatis blanditiis, 
           mollitia inventore ea reprehenderit laboriosam culpa asperiores earum perferendis.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Voluptatem soluta, nobis perferendis nemo optio blanditiis tempora non, 
           dicta a sunt praesentium! Culpa nesciunt ullam ad natus et omnis architecto vel.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptas suscipit laboriosam ullam totam voluptate placeat ipsam nesciunt quaerat, 
           sequi distinctio dicta possimus quibusdam aliquid impedit, id esse iure quasi?
        </p>
       </Box>
      </Layout>
    </div>
  );
};

export default About
