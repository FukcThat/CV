import { Link } from "react-router";
import { useGlobal } from "../context/GlobalContext";

export default function Home() {
  const { test, test2 } = useGlobal();
  console.log(test);

  return (
    <div>
      {test} {test2}
      <Link to="/cv">Go to CV</Link>
    </div>
  );
}
