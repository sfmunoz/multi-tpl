import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useState } from "react";
import DataTableDemo from "./components/DataTableDemo";

const AlertDemo = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
};

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="mt-3 ml-3 space-y-3">
      <DataTableDemo />
      <Button
        variant={visible ? "destructive" : "default"}
        onClick={() => setVisible((x) => !x)}
      >
        {visible ? "hide" : "show"} alert
      </Button>
      {visible && <AlertDemo />}
    </div>
  );
}

export default App;
