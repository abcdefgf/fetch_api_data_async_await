import "./styles.css";

export default function App() {
  const fetchData = async () => {
    const resp = await fetch("https://api.github.com/");
    const data = await resp.json();

    console.log(data);
  };

  fetchData();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
