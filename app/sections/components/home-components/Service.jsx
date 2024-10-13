import { service } from "../helpers/content";
import TiltCard from "./TiltCard";

function Service() {
  return (
    <TiltCard
      isReverse={false}
      data={service}
      gradientColor={"rgb(251,144,20)"}
    />
  );
}

export default Service;
