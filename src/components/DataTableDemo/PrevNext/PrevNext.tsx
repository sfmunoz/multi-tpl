import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { Payment } from "../Payment";

interface PrevNextProps {
  table: Table<Payment>;
}

const PrevNext = ({ table }: PrevNextProps) => {
  const state = table.getState();
  const canPreviousPage = table.getCanPreviousPage();
  const canNextPage = table.getCanNextPage();
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Button
        variant="outline"
        className={canPreviousPage ? "bg-green-300" : "bg-red-300"}
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!canPreviousPage}
      >
        <ArrowBigLeft className="size-8" />
      </Button>
      <div className="border-2 border-slate-300 bg-slate-200 rounded-md px-3">
        {state.pagination.pageIndex + 1}
        {" / "}
        {table.getPageCount()}
      </div>
      <Button
        variant="outline"
        className={canNextPage ? "bg-green-300" : "bg-red-300"}
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!canNextPage}
      >
        <ArrowBigRight className="size-8" />
      </Button>
    </div>
  );
};

export default PrevNext;
