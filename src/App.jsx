import { Routes, Route } from "react-router-dom";
import ReejaCertificate from "./ReejaCertificate";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ReejaCertificate />} />
      <Route path="/verify/:id" element={<ReejaCertificate />} />
    </Routes>
  );
}
export default App;