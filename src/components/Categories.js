import * as React from "react";
import Box from "@mui/material/Box";
import {  useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import ele from "../img/ele.jpg";
import food from "../img/food.jpg";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: food,
    category: "Food",
    width: "50%",
    description:"We are making the best meal for you, Enjoy"
  },
  {
    url: ele,
    category: "Electronics",
    width: "50%",
    description:"Now you can be selecting the best...  "
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Catagories(props) {
  // const state = useSelector((state) => state.Categories);
  const dispatch = useDispatch();
  // console.log(state);
  function handelClick(ele) {
    dispatch({ type: "SET_ACTIVE_CATEGORY", payload: ele });
    dispatch({ type: "SELECT_PRODUCT", payload: ele });
  }

  return (
    <>

      {props.show && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
          }}
        >
        
          {images.map((image) => (
            <ImageButton
              onClick={() => handelClick(image.category)}
              focusRipple
              key={image.category}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.category}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
            

        </Box>
      )}
    </>
  );
}



/* //==========this way depand on redux on get data to check============
// return (
//   <>
//     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,}}>
//     <nav aria-label="main mailbox folders">

//       <List>
//         <ListItem disablePadding>
//           { state.categoryList.map((ele) => {
//             return(<ListItemButton key={ele.id} onClick={()=>handelClick(ele.category)} >
//             <ListItemIcon>

//             </ListItemIcon>
//             <ListItemText primary={ele.category} />
//           </ListItemButton>)
//           })}

//         </ListItem>
//       </List>
//     </nav>
//     </Box>
//   </>
// ); */
