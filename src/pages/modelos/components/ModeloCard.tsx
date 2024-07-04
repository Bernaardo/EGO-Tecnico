import React from "react";
import { ModeloProps } from "../../../interfaces/interfaces";
import { Card, CardHeader, CardMedia } from "@mui/material";
const ModeloCard: React.FC<ModeloProps> = ({modelo})=> {
    return (
        <Card>
            <CardHeader
            title={modelo.name}
            titleTypographyProps={{variant:'h2'}} 
            subheader={`${modelo.year} | $ ${modelo.price}`}
            subheaderTypographyProps={{variant:'h4'}}
            />
             <CardMedia
                component="img"
                alt="product"
                sx={{ height: "200px", objectFit: "contain", width: "100%" }}
                image={modelo.photo}
              />
        </Card>
    )
}

export default ModeloCard;