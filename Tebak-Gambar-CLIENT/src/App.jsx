import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { SocketProvider } from "./contexts/appSocket";

function App() {
  return (
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  );
}

export default App;
