import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { getModel } from "../../api/modelos";
import { ModelFeature, ModeloSheet } from "../../interfaces/interfaces";
import Carousel from "./components/Carousel";

const FichaDeModelo: React.FC = () => {
  const { id: modelId } = useParams<{ id: string }>();
  const [modelo, setModelo] = useState<ModeloSheet>();

  const stripHtml = (html: string | undefined): string => {
    const elementoTemporal = document.createElement('div');
    if (!html) return '';
    elementoTemporal.innerHTML = html;
    return elementoTemporal.innerText;
  };

  const getModelSheet = async () => {
    if (!modelId) return;
    try {
      const { data } = await getModel(modelId);
      const multiclicateFeatures: ModelFeature[] = [...data.model_features, ...data.model_features, ...data.model_features];
      setModelo({ ...data, model_features: multiclicateFeatures });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getModelSheet();
  }, [modelId]);

  if (!modelo) return null;

  return (
    <Grid container spacing={2}>
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

      {modelo.model_highlights.map((highlights, index) => (
        <Grid item container display='flex' flexDirection={index % 2 !== 0 ? 'row' : 'row-reverse'} justifyContent='center' marginLeft={{sm: index % 2 !== 0 ? -2 : 4, xs:0}} marginBottom={2} key={`highlights-${index}`}>
          <Grid item xs={12} sm={5}>
            <Card 
              sx={{ 
                padding: 0,
                borderRadius: 2,
                marginTop: 2,
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
                sx={{ 
                  height: "220px",
                  width: "100%",
                  objectFit: "cover"
                }}
                image={highlights.image}
                alt="Model sheet"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={5} display='flex' justifyContent='center' >
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                width: { xs: '100%', sm: '80%' }, 
                marginTop: 2, 
                alignItems: 'center', 
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: 'none'
                }
              }}
            >
              <CardContent>
                <Typography variant="h2">
                  {highlights.title}
                </Typography>
                <Typography variant="h5">
                  {stripHtml(highlights.content)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default FichaDeModelo;
