import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectActiveGateway, selectSincronizate } from "../features/DataSlice";

type Props = {
  type: "gateway" | "device" | "modal";
  id: string | number;
  name: string;
  onClick?: () => void;
  totalDivices?: number;
  addOnClick?: () => void;
  removeOnClick?: () => void;
  ipv4?: string;
};

export const Row = ({
  name,
  type,
  totalDivices,
  addOnClick,
  removeOnClick,
  onClick,
  id,
  ipv4,
}: Props) => {
  const activeGateway = useSelector(selectActiveGateway);
  const dataDevices = useSelector(selectSincronizate);
  const [showAddOrRemove, setShowAddOrRemove] = useState(false);

  useEffect(() => {
    const itemId = (item: device) => item.id === id;
    const showButton =
      dataDevices.sincSamsung.some(itemId) ||
      dataDevices.sincXiaomi.some(itemId) ||
      dataDevices.sincXiaomi.some(itemId);
    setShowAddOrRemove(showButton);
  }, [dataDevices]);

  return (
    <div
      role="row"
      onClick={onClick}
      className={`${
        activeGateway === id
          ? "text-white/80 border border-orange-500 shadow-none bg-gray-800/70"
          : "hover:text-white/80 hover:border hover:border-orange-500 hover:shadow-none hover:bg-gray-800/70"
      } text-white/70  border border-transparent duration-200 
     shadow-sm flex justify-between items-center shadow-black rounded px-2 py-1 cursor-pointer`}
    >
      <h6
        className={`${(type === "device" || "modal") && "text-lg"} capitalize`}
      >
        {name}
      </h6>
      {type === "gateway" && (
        <div className="flex gap-2">
          <p className="">IP: {ipv4}</p>
          <p>Devices {totalDivices}</p>
        </div>
      )}
      {type === "modal" && (
        <div className="flex gap-1">
          {!showAddOrRemove && (
            <button
              onClick={addOnClick}
              className="bg-gray-900/80 hover:bg-gray-900 px-2 rounded-md text-orange-500/50"
            >
              Add
            </button>
          )}
          {showAddOrRemove && (
            <button
              onClick={removeOnClick}
              className="bg-gray-900/80 hover:bg-gray-900 px-2 rounded-md text-orange-500/50"
            >
              Remove
            </button>
          )}
        </div>
      )}
      {type === "device" && (
        <div className="flex gap-1">
          <button
            onClick={removeOnClick}
            className="bg-gray-900/80 hover:bg-gray-900 px-2 rounded-md text-orange-500/50"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};
