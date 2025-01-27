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
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="w-[50px] mx-auto">
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default Dropdown;
