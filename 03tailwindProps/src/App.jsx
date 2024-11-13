import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  return (
    <>
      <h1 className="bg-yellow-600 text-black p-2 rounded-2xl mb-4">
        Tailwind Props | React JS
      </h1>
      <div className="flex gap-3">
        <Card username="Hitesh Sir" footer="visit me!" />
        <Card username="Adil Mian" />
      </div>
    </>
  );
}

export default App;
