import { NotificationResponseMessage } from "pg-protocol/dist/messages";

function App() {
  let response;

  const fetchResponse = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3030/", { method: "GET" });
    const data = await res.json();
    console.log(data);
    response = data;
  };

  return (
    <div>
      <header>
        <h1>Welcome to Wings 🦋</h1>
        <button onClick={fetchResponse}>Submit</button>
        <h3>{response || "placeholder"}</h3>
      </header>
    </div>
  );
}

export default App;
