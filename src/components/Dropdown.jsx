import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function Dropdown() {
  return (
    <Select className="bg-[#0782A7]">
      <SelectTrigger className="w-[100px] bg-[#0782A7] border-none focus:border-none focus:ring-0 text-white rounded-none">
        <SelectValue placeholder="GBP " />
      </SelectTrigger>
      <SelectContent className="bg-[#0782A7] text-white border-none w-[20px] mx-auto">
        <SelectItem value="Taka">TAKA</SelectItem>
        <SelectItem value="btc">BTC</SelectItem>
        <SelectItem value="eru">ERU</SelectItem>
        <SelectItem value="usd">USD</SelectItem>
        <SelectItem value="gbp">GBP</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default Dropdown;
