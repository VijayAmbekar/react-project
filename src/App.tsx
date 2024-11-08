import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );

  // return (
  //   <div>
  //     <Alert>
  //       <p>Hello World!</p>
  //     </Alert>
  //   </div>
  // );

  // let items = ["Mumbai", "Delhi", "Kolkata", "London"];

  // const handleSelectItem = (item:string) => {
  //   console.log(item);
  // }

  // return (
  //   <div>
  //     <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
  //   </div>
  // );
}

export default App;
