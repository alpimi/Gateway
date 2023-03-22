import { useState, useEffect, useRef } from "react";
import { Card, Row } from ".";
import { useSelector, useDispatch } from "react-redux";
import {
  handleSincSamsung,
  removeAllDevice,
  selectActiveGateway,
  selectSincronizate,
  setShowModal,
} from "../features/DataSlice";

export const Devices = () => {
  const dispatch = useDispatch();
  const dataDevices = useSelector(selectSincronizate);
  const [renderDevice, setRenderDevice] = useState<any>();
  const activeGateway = useSelector(selectActiveGateway);
  const [moreInfo, setMoreInfo] = useState<{
    index: null | number;
    name: string;
  }>({ index: null, name: "" });
  const infoRef = useRef<HTMLDivElement>(null);
  const [heightMoreInfo, setHeightMoreInfo] = useState<number | undefined>(0);

  useEffect(() => {
    infoRef.current && setHeightMoreInfo(infoRef.current.scrollHeight + 16);
  }, [moreInfo]);

  useEffect(() => {
    activeGateway === "samsung" && setRenderDevice(dataDevices.sincSamsung);
    activeGateway === "iphone" && setRenderDevice(dataDevices.sincIphone);
    activeGateway === "xiaomi" && setRenderDevice(dataDevices.sincXiaomi);
  }, [activeGateway, dataDevices]);

  const handleDevice = (
    type: "add" | "remove",
    gateway: "samsung" | "iphone" | "xiaomi" | string,
    item: device
  ) => {
    dispatch(handleSincSamsung({ gateway, type, item }));
  };

  const handleMoreInfo = (index: number, name: string) => {
    moreInfo.index === index && moreInfo.name === name
      ? setMoreInfo({ index: null, name: "" })
      : setMoreInfo({ index, name });
  };

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h5 className="text-orange-500">Devices</h5>
          {activeGateway ? (
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(setShowModal(true))}
                className="bg-orange-500/70 text-white/80 px-2 py-1 rounded-md"
              >
                Add
              </button>
              <button
                onClick={() => dispatch(removeAllDevice())}
                className="bg-black/50 text-white/80 px-2 py-1 rounded-md"
              >
                Remove All
              </button>
            </div>
          ) : (
            <h6 className="text-white/70">Select any Gateway</h6>
          )}
        </div>
        {renderDevice?.map((item: device, index: number) => (
          <div key={index}>
            <Row
              onClick={() => handleMoreInfo(index, item.name)}
              removeOnClick={() => handleDevice("remove", item.vendor, item)}
              id={item.id}
              type="device"
              name={item.name}
            />
            <div
              ref={infoRef}
              style={{
                height:
                  moreInfo.index === index && moreInfo.name === item.name
                    ? heightMoreInfo
                    : 0,
                padding:
                  moreInfo.index === index && moreInfo.name === item.name
                    ? "0.5rem"
                    : "0 0.5rem",
              }}
              className={`${
                moreInfo.name === item.name && "duration-200"
              } overflow-hidden rounded-b-md text-white/50
               flex justify-between bg-black/30`}
            >
              <img
                src={item.image}
                alt="defaultImage"
                className="w-20 h-20 rounded-md object-cover"
              />
              <div className="capitalize text-right flex flex-col justify-center">
                <p>Vendor: {item.vendor}</p>
                <span className="flex justify-end gap-1">
                  Status:
                  <p
                    className={`${
                      item.status === "online"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.status}
                  </p>
                </span>
                <p>ipv4: {item.ipv4}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
