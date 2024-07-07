import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { getModel } from "../../api/modelos";
import { ModelFeature, ModeloSheet } from "../../interfaces/interfaces";
import Carousel from "./components/Carousel";
import ServerError from "../../components/loader/ServerError";
import Loading from "../../components/loader/Loading";
import Highlights from "./components/Highlights";
import { stripHtml } from "../../hooks/extraerHtml";

const FichaDeModelo: React.FC = () => {
  const { id: modelId } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [modelo, setModelo] = useState<ModeloSheet>();
  const [error, setError] = useState(false);

 

  const getModelSheet = async () => {
    if(!modelId) return;
    setLoading(true);
    try {
      const { data } = await getModel(modelId);
      const multiclicateFeatures: ModelFeature[] = [...data.model_features, ...data.model_features, ...data.model_features];
      setModelo({ ...data, model_features: multiclicateFeatures });
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    getModelSheet();
  }, [modelId]);

  if (!modelo) return null;

  return (
    <Grid container spacing={2} justifyContent='center'>
         {loading? 
         <Loading/>
         : error ? 
         <ServerError/>
         :
         <>
      <Grid item xs={12} sm={6}  sx={{marginBottom:4}}>
        <Card 
          sx={{ 
            flexShrink: 0,
            height: '220px',
            display: 'flex',
            boxShadow: 'none',
            border: 'none',
            '&:hover': {
              boxShadow: 'none'
            }
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: modelId === '3' ? '250px' : "350px", objectFit: "contain", width: "100%", marginTop: modelId === '3' ? -4 : -8 }}
            image={modelo.photo}
            alt="Model sheet"
          />
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}  sx={{marginBottom:4}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '80%' } }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {modelo.name}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            {modelo.title}
          </Typography>
          <Typography variant="h5">
            {stripHtml(modelo.description)}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '100%', padding: '16px 0' }}>
        <Carousel data={modelo.model_features} />
    </Grid> 

      {modelo.model_highlights.map((highlight, index) => (
        <Grid item xs={12} key={`highlight=${index}`} display='flex' justifyContent='center'>
        <Highlights highlight={highlight} index={index}/>
        </Grid>
      ))}
      </>}
    </Grid>
  );
};

export default FichaDeModelo;
