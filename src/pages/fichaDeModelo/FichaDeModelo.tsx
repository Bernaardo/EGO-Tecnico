import { Typography } from "@mui/material"
import { useParams } from "react-router-dom";

const FichaDeModelo: React.FC = () => {
    const { id: modelId } = useParams();
    return (
        <Typography>{`Ficha de modelo: ${modelId}`}</Typography>
    )
}

export default FichaDeModelo;