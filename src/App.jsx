import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#fff",
            color: "#111",
            padding: "12px 16px",
            borderRadius: "0px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            fontSize: "13px",
            fontFamily: "inherit",
          },
        }}
      />
    </>
  );
}

export default App;