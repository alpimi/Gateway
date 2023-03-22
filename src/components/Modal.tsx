import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleSincSamsung,
  selectActiveGateway,
  selectDevices,
  setShowModal,
} from "../features/DataSlice";
import { Row } from "./Row";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = () => {
  const dataDevices = useSelector(selectDevices);
  const activeGateway = useSelector(selectActiveGateway);
  const dispatch = useDispatch();
  const [type, setType] = useState<string | undefined>("all");
  const buttons: string[] = ["all", "samsung", "iphone", "xiaomi"];
  const content = `h-[calc(100vh-85px)] overflow-scroll rounded-b-md rounded-tr-md bg-orange-500/30 flex flex-col gap-2 p-3`;

  useEffect(() => {
    setType(activeGateway);
  }, [activeGateway]);

  const handleDevice = (
    type: "add" | "remove",
    gateway: "samsung" | "iphone" | "xiaomi",
    item: device
  ) => {
    dispatch(handleSincSamsung({ gateway, type, item }));
  };

  const renderDevices = () => {
    switch (type) {
      case undefined:
        return (
          <div className={content}>
            {dataDevices.samsung.map((item) => (
              <Row
                addOnClick={() => handleDevice("add", "samsung", item)}
                removeOnClick={() => handleDevice("remove", "samsung", item)}
                key={item.id}
                id={item.id}
                type="modal"
                name={item.name}
              />
            ))}
            {dataDevices.iphone.map((item) => (
              <Row
                addOnClick={() => handleDevice("add", "iphone", item)}
                removeOnClick={() => handleDevice("remove", "iphone", item)}
                key={item.id}
                id={item.id}
                type="modal"
                name={item.name}
              />
            ))}
            {dataDevices.xiaomi.map((item) => (
              <Row
                addOnClick={() => handleDevice("add", "xiaomi", item)}
                removeOnClick={() => handleDevice("remove", "xiaomi", item)}
                key={item.id}
                id={item.id}
                type="modal"
                name={item.name}
              />
            ))}
          </div>
        );

      case "samsung":
        return (
          <div className={content}>
            {dataDevices.samsung.map((item) => (
              <Row
                addOnClick={() => handleDevice("add", "samsung", item)}
                removeOnClick={() => handleDevice("remove", "samsung", item)}
                key={item.id}
                id={item.id}
                type="modal"
                name={item.name}
              />
            ))}
          </div>
        );
      case "iphone":
        return (
          <div className={content}>
            {dataDevices.iphone.map((item) => (
              <Row
                addOnClick={() => handleDevice("add", "iphone", item)}
                removeOnClick={() => handleDevice("remove", "iphone", item)}
                key={item.id}
                id={item.id}
                type="modal"
                name={item.name}
              />
            ))}
          </div>
        );
      case "xiaomi":
        return (
          <div className={content}>
            {dataDevices.xiaomi.map((item) => (
              <Row
                addOnClick={() => handleDevice("add", "xiaomi", item)}
                removeOnClick={() => handleDevice("remove", "xiaomi", item)}
                key={item.id}
                id={item.id}
                type="modal"
                name={item.name}
              />
            ))}
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className="z-10 fixed inset-0 bg-black/30 backdrop-blur-sm p-4">
      <div
        className="bg-gray-600/60 shadow-md shadow-black overflow-hidden
       p-3 backdrop-blur-sm rounded-md h-[calc(100vh-32px)] sm:w-[75%] md:w-1/2 m-auto"
      >
        <div className="flex justify-between">
          <div className="flex gap-1 text-white/70 overflow-hidden">
            {buttons.map((item, index) => (
              <button
                key={index}
                onClick={() => setType(item)}
                className={`${
                  type === item
                    ? "bg-orange-500/30 translate-y-0"
                    : "bg-gray-400/70 translate-y-[13%] hover:translate-y-0 duration-200"
                } px-2 rounded-t-md capitalize`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => dispatch(setShowModal(false))}
            className="text-gray-200/50 hover:rotate-180 mb-2 duration-200 flex items-center justify-center"
          >
            <CloseIcon fontSize="small" className="" />
          </button>
        </div>
        {renderDevices()}
      </div>
    </div>
  );
};
