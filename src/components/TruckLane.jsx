import { Road } from "./Road";
import { Truck } from "./Truck";

export function TruckLane({ rowIndex, rowData }) {
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle, index) => (
        <Truck
          key={index}
          rowIndex={rowIndex}
          color={vehicle.color}
          initialTileIndex={vehicle.initialTileIndex}
          direction={rowData.direction}
          speed={rowData.speed}
        />
      ))}
    </Road>
  );
}