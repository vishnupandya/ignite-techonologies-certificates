import { Routes, Route } from "react-router-dom";
import BhumiSoniCertificate from "./BhumiSoniCertificate";
function App() {
  return (
    <Routes>
      <Route path="/" element={<BhumiSoniCertificate />} />
      <Route path="/verify/:id" element={<BhumiSoniCertificate />} />
    </Routes>
  );
}
export default App;