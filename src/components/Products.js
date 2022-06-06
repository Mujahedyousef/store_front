import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";


export default function MediaCard() {
  const state = useSelector((state) => state.Products);
  
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
     
      {state.selectedProducts.map((ele) => {
        return (
          
          <div key={ele.id}>
         
            <Card sx={{ maxWidth: 345, width: 450, margin: 2 }}>
              <CardMedia
                component="img"
                height="230"
                image={ele.image}
                alt={ele.image}
              />
              <CardContent sx={{ maxWidth: 345, hight: 500, margin: 2 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {ele.name}
                </Typography>
                <hr />
                <Typography variant="body2" color="text.secondary">
                  {ele.description}
                </Typography>
                <Typography
                  style={{ color: "black", marginTop: "15px" }}
                  variant="h8"
                  color="text.secondary"
                >
                  <hr />
                  <br />
                  {ele.price} JD/Meal • {ele.quantity} Pieces
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">ADD Item</Button>
                <Button size="small">More details</Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
