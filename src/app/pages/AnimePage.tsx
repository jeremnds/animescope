import { useParams } from "react-router-dom";

export default function AnimePage() {
  const { id } = useParams();

  return <div>AnimePage {id}</div>;
}
