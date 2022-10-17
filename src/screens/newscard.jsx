import React from 'react'
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import CardContent from '@mui/material/CardContent';
export default function NewsCard() {
    const location = useLocation();
  return (
    <div> 
        <Container maxWidth={"lg"} >
    <Card sx={{ maxWidth: "100%", display:{sm:"flex",xs:"block"} }}>
        <Box sx={{width:{sm:"35%"},padding:"20px"}}>
        <img 
            width={"450px"} height={"300px"}
            src={location.state.image}
            alt="green iguana"/>
        </Box>
        <CardContent sx={{width:{sm:"65%"}, padding:"60px", textAlign: "left"}}>
        <Typography  color="text.secondary"><b>Category : </b>{
                location.state.category }
            </Typography>
           < hr />
            <Typography  variant="h5" component="div">
                { location.state.title }
            </Typography>
           < hr />
            <Typography  color="text.secondary"><b>Details:</b> {
                location.state.description}
            </Typography>
        </CardContent>
    </Card>
</Container>
</div>
  )
}
