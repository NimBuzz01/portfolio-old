import React from "react";
import { Card } from "./ui/card";
import { aboutMe } from "@/lib/data";

const ColorCard = ({ color }: { color: string }) => {
  return (
    <div>
      <Card className={`w-40 h-40`} style={{ backgroundColor: color }} />
      <p className="font-medium ">{color}</p>
    </div>
  );
};

export default ColorCard;
