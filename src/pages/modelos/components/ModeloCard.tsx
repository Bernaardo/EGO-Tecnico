import React from "react";
import { ModeloProps } from "../../../interfaces/interfaces";
import { Card, CardHeader, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ModeloCard: React.FC<ModeloProps> = ({modelo})=> {
    const navigate = useNavigate();

    const navigateToDetailLoad = () =>{
        navigate(`/ficha-de-modelo/${modelo.id}`);
    }

    return (
        <Card onClick={navigateToDetailLoad}>
            <CardHeader
            title={modelo.name}
            titleTypographyProps={{variant:'h2'}} 
            subheader={`${modelo.year} | $ ${modelo.price}`}
            subheaderTypographyProps={{variant:'h4'}}
            />
             <CardMedia
                component="img"
                alt="modelo"
                sx={{ height: "200px", objectFit: "contain", width: "100%" }}
                image={modelo.photo}
              />
        </Card>
    )
}

export default ModeloCard;