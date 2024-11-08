import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Mumbai", "Delhi", "Kolkata", "London"];

  return (
    <div>
      <ListGroup items={items} heading={"Cities"} />
    </div>
  );
}

export default App;
