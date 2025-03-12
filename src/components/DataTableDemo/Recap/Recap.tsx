import { Payment } from "../Payment";
import { Table } from "@tanstack/react-table";

interface RecapProps {
  table: Table<Payment>;
}

const Recap = ({ table }: RecapProps) => {
  const rows = table.getCoreRowModel().rows;
  const sel = rows.filter((row) => row.original.checked).length;
  return (
    <div className="text-sm text-muted-foreground">
      {sel} of {rows.length} row(s) selected.
    </div>
  );
};

export default Recap;
