import * as React from "react";
import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { payments } from "./payments";
import { columns } from "./columns";
import { Payment } from "./Payment";
import TableWrapper from "./TableWrapper";
import { Bug } from "lucide-react";

const DataTableDemo = () => {
  const [data, setData] = React.useState<Payment[]>(payments(27));
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 8,
  });
  const [sortingOld, setSortingOld] = React.useState<SortingState | undefined>(
    undefined
  );
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "email", desc: false },
  ]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const rowDelete = (id: string) =>
    setData((prev) => prev.filter((item) => item.id !== id));
  const rowChecked = (id: string, checked: boolean) =>
    setData((prev) =>
      prev.map((item) => ({
        ...item,
        checked: item.id === id ? checked : item.checked,
      }))
    );
  const table = useReactTable({
    data,
    columns: columns(rowDelete, rowChecked),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    onSortingChange: (updater) => {
      const newSorting =
        updater instanceof Function ? updater(sorting) : updater;
      setSortingOld(sorting);
      setSorting(newSorting);
    },
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
  });
  return (
    <>
      <TableWrapper table={table}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableWrapper>
      <div className="flex flex-row bg-red-200 whitespace-nowrap w-min mx-auto mt-6 p-2 rounded-md border border-red-400">
        <Bug /> [sort] {sortingOld ? JSON.stringify(sortingOld) : "[init]"}
        {" --> "}
        {JSON.stringify(sorting)}
      </div>
    </>
  );
};

export default DataTableDemo;
