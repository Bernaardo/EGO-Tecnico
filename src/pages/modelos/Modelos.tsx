import React, { useEffect, useState } from "react"
import { Box, CircularProgress, Grid, Typography, useTheme } from "@mui/material"
import FilterModelsBar from "./components/FilterModelsBar";
import { getAllModels } from "../../api/modelos";
import { ButtonFilterItem, Modelo, OrdenarPorItem } from "../../interfaces/interfaces";
import WifiOffIcon from '@mui/icons-material/WifiOff';
import ModeloCard from "./components/ModeloCard";

const Modelos: React.FC = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const theme = useTheme();
    const [models, setModels] = useState<Modelo[]>([]);
    const [filter, setFilter] = useState<string | null>(null);
    const [order, setOrder] = useState<string | null>(null);

    const handleButtonFilter = (filter: ButtonFilterItem)=>{
        setFilter(filter.segment)
    }

    const handleOrderSelect = (order: OrdenarPorItem) => {
        setOrder(order.ordering);
    };

    const getModels = async(filter?: string | null, order?: string | null) =>{
        setLoading(true);
        try {
            const {data} = await getAllModels(filter, order);
            setModels(data);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        getModels(filter, order)
    },[filter, order])

    return (
        <>
            {error ? 
            <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: '50vh',
            }}
            >
                <WifiOffIcon
                fontSize="large"
                sx={{ width: '10rem', height: '10rem', color: theme.palette.primary.main }}
                />
                <Typography variant="h3">Server Errpr</Typography>
                <Typography variant="h4" textAlign="center" py={0.5}>
                En estos momentos no podemos mostrar la información solicitada
                </Typography>
                <Typography variant="h4" textAlign="center" py={0.5}>
                Vuelve a intenterlo mas tarde
                </Typography>
            </Grid>
            :
            <>
            <Typography variant="h1">Descubrí todos los modelos</Typography>
            <FilterModelsBar handleButtonFilter={handleButtonFilter} handleOrderSelect={handleOrderSelect}/>
            {loading?
            <Box  sx={{
                height: 'calc(100vh - 300px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <CircularProgress color="secondary" size={50}/>
          </Box>:
                <Grid container display='flex' flexDirection='row' spacing={2}>
            {models.map((model: Modelo, index: number)=>(
                <Grid item md={3} sm={12} xs={12} key={`model-${model.id}`} >
                    <ModeloCard modelo={model} />
                </Grid>
            ))}
            </Grid>}
            </>
            }
        </>
    )
}

export default Modelos;