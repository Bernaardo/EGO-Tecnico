import React, { useEffect, useState } from "react"
import { Grid, Typography } from "@mui/material"
import FilterModelsBar from "./components/FilterModelsBar";
import { getAllModels } from "../../api/modelos";
import { ButtonFilterItem, Modelo, OrdenarPorItem } from "../../interfaces/interfaces";
import ModeloCard from "./components/ModeloCard";
import ServerError from "../../components/loader/ServerError";
import Loading from "../../components/loader/Loading";

const Modelos: React.FC = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
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
        <Grid container display='flex' direction='column' justifyContent='center'>
            <Grid item container sm={12} display='flex' justifyContent='center' direction='row' sx={{paddingRight:'15px'}}>
                <Grid item xs={12} sm={12} sx={{display:'flex', justifyContent:'start', paddingLeft:{xs:'0px',sm:'90px'}}}>
                    <Typography variant="h1" sx={{ fontWeight: 'bold' }}>Descubrí todos los modelos</Typography>
                </Grid>
                <Grid item xs={12} sm={12} sx={{display:'flex', justifyContent:'center'}}>
                    <FilterModelsBar handleButtonFilter={handleButtonFilter} handleOrderSelect={handleOrderSelect} filterType={filter} orderType={order}/>
                </Grid>

                {loading ?
                 <Loading/>
                :
                 error ? 
                <ServerError/>
                :
                <>
                {models.map((model: Modelo, index: number)=>(
                    <Grid item xs={12} sm={6}  md={3} lg={2} key={`model-${model.id}`} display='flex' justifyContent='center' sx={{marginLeft:{sm:0, md:1, lg:4}, marginRight:{sm:0, md:1, lg:4}} }>
                        <ModeloCard modelo={model} />
                    </Grid>
                ))}
                </>}
            </Grid>
        </Grid>
    )
}

export default Modelos;