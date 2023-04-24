import React from 'react'
import { Link } from "react-router-dom";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
const ItemCard = ({item}) => {
  return (
    <div>
        <Card sx={{ width: 345, height: 350 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.img}
              title="green iguana"
            />
            <CardContent style={{textAlign:"center"}}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="primary">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", height: 100, justifyContent: "center"}}>
              <Link to={`/itemDetail/${item.id}`}>
                <Button variant="contained" size="small">
                  Ver Detalle
                </Button>
              </Link>
            </CardActions>
          </Card>
    </div>
  )
}

export default ItemCard