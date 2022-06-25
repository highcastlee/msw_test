import "./App.css";

import useFetch from "./hooks/useFetch";

function App() {
  const [{ loading, data, error }, fetchData] = useFetch("/api/v1/main/banner");

  return (
    <div className="App">
      {data &&
        data.map(({ id, content }) => {
          return <div key={id}>{content}</div>;
        })}
    </div>
  );
}

export default App;
