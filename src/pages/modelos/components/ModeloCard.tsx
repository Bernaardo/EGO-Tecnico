import React from "react";
import { ModeloProps } from "../../../interfaces/interfaces";
import { Card, CardHeader, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ModeloCard: React.FC<ModeloProps> = ({modelo})=> {
    const navigate = useNavigate();

    const navigateToModelSheet = () =>{
        navigate(`/ficha-de-modelo/${modelo.id}`);
    }

    return (
        <Card onClick={navigateToModelSheet} sx={{width:'269px', height: '215px', marginTop:4}}>
            <CardHeader
            title={modelo.name}
            titleTypographyProps={{variant:'h3', textAlign: 'center'}} 
            subheader={`${modelo.year} | $ ${modelo.price}`}
            subheaderTypographyProps={{variant:'h4', textAlign: 'center'}}
            sx={{ padding: 0, marginBottom: -3 }}
            />
             <CardMedia
                component="img"
                alt="modelo"
                sx={{ height: "170px", objectFit: "contain", width: "100%",marginTop: 'auto', marginBottom: 'auto'}}
                image={modelo.photo}
              />
        </Card>
    )
}

export default ModeloCard;