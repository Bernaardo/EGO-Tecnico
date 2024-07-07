import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";import { HighlightsProps } from "../../../interfaces/interfaces";
import { stripHtml } from "../../../hooks/extraerHtml";

const Highlights: React.FC <HighlightsProps>= ({highlight, index}) => {
    
    return (
        <Grid item container display='flex' flexDirection={index % 2 !== 0 ? 'row' : 'row-reverse'} justifyContent='center' marginLeft={{sm: index % 2 !== 0 ? -2 : 4, xs:-2}} marginBottom={2}>
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
                image={highlight.image}
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
                  {highlight.title}
                </Typography>
                <Typography variant="h5">
                  {stripHtml(highlight.content)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    )
}

export default Highlights;