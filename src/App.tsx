import { Button } from "@adobe/react-spectrum";

function App() {
  return (
    <div>
      <Button variant="accent" onPress={() => alert("Hey there!")}>
        Hello React Spectrum!
      </Button>
    </div>
  );
}

export default App;
