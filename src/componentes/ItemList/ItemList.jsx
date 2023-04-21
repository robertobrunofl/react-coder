import { Margin } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
/* import styles from "./ItemList.css" */

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        minHeight: "90vh",
        padding: "40px",
        flexWrap: "wrap",
        backgroundColor:"grey"
      }}
    >
      {items.map((item) => {
        return (
          <Card sx={{ width: 345, height: 350 }} key={item.id}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.img}
              title="green iguana"
            />
            <CardContent>
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
            <CardActions style={{ height: 100 }}>
              <Button variant="contained" size="small">
                Ver Detalle
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
