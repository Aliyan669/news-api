import React from "react";
import '../App.css';
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Data() {
  var url = 'https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2022-10-17&' +
  'sortBy=popularity&' +
  'apiKey=d38bd0cf7aa8465095aeebb340f17ce7';
    let getData = () => {
        axios.get(url)
        .then((success) => {setData(success.data.articles)})
        .catch((error) => { console.log(error) })
    }
    useEffect(() => {
        getData()
    }, [])
    const [Data, setData] = useState([])
    let navigate = useNavigate()
  return (
    <div>
       <Container >
    <h1 className="api">RENDER NEWS API</h1>
    <Grid container spacing={2} >
        {Data.map((e,i) => {
            return <>  
                <Grid item md={3} sm={6} xs={12} lg={4} key={i} sx={{ margin:"20px 0px"}}>
                    <Card sx={{ maxWidth:"100%", textAlign: "left"}}>
                        <CardActionArea>
                            <img
                                width={400} height={220}
                                src={e.urlToImage} />
                            <CardContent>
                            <Typography variant="body2" color="text.secondary" sx={{fontWeight:"bold",fontSize:"16px"}}>
                                   Category :  {e.author} 
                                </Typography>
                                < br />                               
                                 <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"20px"}}>
                                    {e.title.slice(0, 40) + "..."}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px"}}>
                                    { e.description.slice(0, 65)+"..."}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ display: "flex", justifyContent: "right" ,marginBottom:"10px"}}>
                            <Button variant="contained" size="small" color="primary"
                            onClick={()=>{
                                navigate('/newscard',{
                                    state:{
                                      category: e.author,
                                      title: e.title,
                                      image:e.urlToImage,
                                      description : e.description,
                                    }})}}>
                                SHOW DETAILS
                            </Button>
                        </CardActions>
                    </Card>
                </Grid></>})}
            </Grid>
        </Container>
     </div>
  )
}
