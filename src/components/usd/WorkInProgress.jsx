import { Container } from "react-bootstrap";
import Loading from "./Loading";
import { useContext } from "react";
import ThemeContext from "../../context/theme";

function WorkInProgress() {
  const theme = useContext(ThemeContext);
  return (
    <Container
      className="text-center"
      style={{ marginTop: 100, marginBottom: 300 }}
    >
      <Loading color={theme} />
      <h5>Work in progress... please be patient!</h5>
    </Container>
  );
}

export default WorkInProgress;
