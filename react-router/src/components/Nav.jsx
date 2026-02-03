import { useParams } from "react-router-dom";

function Hello() {
  const { name } = useParams();

  return <h2>سلام {name}</h2>;
}

export default Hello;
