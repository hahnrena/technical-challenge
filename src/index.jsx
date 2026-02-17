import { createRoot } from "react-dom/client";
import { WorkflowBuilder } from "./components/WorkflowBuilder";

const root = createRoot(document.getElementById("root"));
root.render(<WorkflowBuilder />);
