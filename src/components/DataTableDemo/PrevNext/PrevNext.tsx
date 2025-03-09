import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { Payment } from "./Payment";

interface PrevNextProps {
  table: Table<Payment>;
}

const PrevNext = ({ table }: PrevNextProps) => {
  const state = table.getState();
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowBigLeft className="size-8" />
      </Button>
      <div className="border-2 border-slate-300 bg-slate-200 rounded-md px-3">
        {state.pagination.pageIndex + 1}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ArrowBigRight className="size-8" />
      </Button>
    </>
  );
};

export default PrevNext;
