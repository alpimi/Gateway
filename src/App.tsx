import "./App.css";
import { Devices, Gateways, Modal } from "./components";
import { useSelector } from "react-redux";
import { selectShowModal } from "./features/DataSlice";

function App() {
  const showModal = useSelector(selectShowModal);
  return (
    <div className="bg-black/90 w-screen min-h-screen flex gap-4 flex-col sm:grid sm:grid-cols-2 items-center sm:items-start p-4 sm:p-6">
      <Gateways />
      <Devices />
      {showModal && <Modal />}
    </div>
  );
}

export default App;
