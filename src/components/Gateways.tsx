import { Card, Row } from ".";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGateways,
  selectSincronizate,
  setActiveGateway,
} from "../features/DataSlice";

export const Gateways = () => {
  const dataGateways = useSelector(selectGateways);
  const dataDevices: any = useSelector(selectSincronizate);
  const dispatch = useDispatch();

  const handleActiveGateway = (id: string) => {
    dispatch(setActiveGateway(id));
  };

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <h5 className="text-orange-500">Gateways</h5>
        {dataGateways.map((item) => (
          <Row
            key={item.id}
            id={item.id}
            type="gateway"
            ipv4={item.ipv4}
            name={item.name}
            onClick={() => handleActiveGateway(item.id)}
            totalDivices={dataDevices[item.sinc].length}
          />
        ))}
      </div>
    </Card>
  );
};
