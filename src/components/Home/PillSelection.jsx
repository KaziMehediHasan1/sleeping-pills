import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const PillSelection = () => {
  const options = [
    {
      value: "£161.99 for 25 Tablets",
    },
    {
      value: "£145.99 for 180 Tablets",
    },
    {
      value: "£125.99 for 150 Tablets",
    },
    {
      value: "£58.99 for 60 Tablets",
    },
    {
      value: "£38.99 for 30 Tablets",
    },
    {
      value: "£106.99 for 120 Tablets",
    },
  ];
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[250px] mx-auto border focus:border-none focus:ring-0 rounded-none">
          <SelectValue placeholder="Select a Pills" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Pills</SelectLabel>
            {options?.map((option) => {
              return (
                <SelectItem value={option.value}>{option.value}</SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PillSelection;
