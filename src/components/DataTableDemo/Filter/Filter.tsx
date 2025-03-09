import { Input } from "@/components/ui/input";
import { Payment } from "../Payment";
import { Table } from "@tanstack/react-table";

interface FilterProps {
  table: Table<Payment>;
}

const Filter = ({ table }: FilterProps) => {
  return (
    <Input
      placeholder="Filter emails..."
      value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn("email")?.setFilterValue(event.target.value)
      }
      className="w-80"
    />
  );
};

export default Filter;
