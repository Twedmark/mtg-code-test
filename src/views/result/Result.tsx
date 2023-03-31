import { useNavigate } from "react-router-dom";
import { ResultContainer, Grid, Button, Title } from "./styles";
import ColorRepresentation from "../../components/colorRepresentation/ColorRepresentation";
import GeneratedCard from "../../components/generatedCard/GeneratedCard";
import CardCarousel from "../../components/CardCarousel/CardCarousel";

function Result() {
  const navigate = useNavigate();

  return (
    <ResultContainer>
      <Grid>
        <section>
          <Title>Result</Title>
        </section>
        <GeneratedCard />
        <CardCarousel />
        <ColorRepresentation />
      </Grid>
      <Button onClick={() => navigate("/")}>Edit Search</Button>
    </ResultContainer>
  );
}

export default Result;
