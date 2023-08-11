"use client";
import { Currency, SubscriptionStatus } from "@/app/types";
import OptionsButton from "../OptionsButton";
import { useState } from "react";
import Options from "./Options";
import Button from "../Button";

interface Props {
  icon?: string;
  name: string;
  description: string;
  price: number;
  coin: Currency;
  renewalDate: string;
  status: SubscriptionStatus;
}

const renderSwitch = (status: SubscriptionStatus) => {
  switch (status) {
    case "active":
      return "Renews";
    case "inactive":
      return "Expired";
    case "expiring":
      return "Expires on";
  }
};

const Subscription = ({
  icon,
  name,
  description,
  price,
  coin,
  status,
  renewalDate,
}: Props) => {
  const [pop, setPop] = useState(false);

  const renderPopup = () => {
    if (pop) {
      return (
        <div className="fixed z-10 -translate-x-[50%] ml-[22px] -translate-y-2 w-fit">
          <Options onBlur={() => ""}>
            {" "}
            <Button
              onClick={() => setPop(false)}
              text="tefaffafafafafafafafaxt"
              hasIcon={false}
            />
            <Button onClick={() => setPop(false)} text="text" hasIcon={false} />
            <Button onClick={() => setPop(false)} text="text" hasIcon={false} />
          </Options>
        </div>
      );
    }
  };

  return (
    <div className="p-2 flex sm:flex-row flex-col gap-4 justify-between sm:items-center rounded-2xl bg-gray-50 text-sm">
      <div className="flex flex-row gap-3 items-center">
        <img className="h-11 w-11 bg-slate-600 rounded-xl" src={icon} />
        <div className="">
          <span className="font-semibold">{name}</span> <br />
          <span className="opacity-50">{description}</span>
        </div>
      </div>
      <div className="relative flex flex-row sm:w-fit justify-between w-full gap-3">
        <div className="relative flex flex-row gap-3">
          <div className="w-20 pr-3">
            <span className="opacity-50">{renderSwitch(status)}</span>
            <br />
            <span>{renewalDate}</span>
          </div>
          <div className="w-16 flex flex-col">
            <div className={`font-semibold`}>
              <span className={`opacity-50`}>
                <span className="pr-1">{price}</span>
                <span className="uppercase text-[10px]">{coin}</span>
              </span>
              <br />
              <span className="pr-1">{price}</span>
              <span className="uppercase text-[10px]">{coin}</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <OptionsButton onClick={() => setPop(!pop)} />
          {renderPopup()}
        </div>
      </div>
    </div>
  );
};

export default Subscription;