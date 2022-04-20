import "./styles.css";
import useNetwork from "./hooks/useNetwork";

export default function App() {
  const online = useNetwork();
  return (
    <div className="App">
      <h1>{online ? "online" : "offline"}</h1>
    </div>
  );
}
