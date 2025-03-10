import {
  ColumnDef,
  createColumnHelper,
  HeaderContext,
} from "@tanstack/react-table";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  CircleX,
  MoreHorizontal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Payment } from "./Payment";

interface SortHeaderProps {
  title: string;
  column: HeaderContext<Payment, unknown>["column"];
}

// eslint-disable-next-line react-refresh/only-export-components
const SortHeader = ({ title, column }: SortHeaderProps) => {
  const s = column.getIsSorted();
  return (
    <Button variant="ghost" onClick={() => column.toggleSorting(s === "asc")}>
      {title}
      {s === "asc" ? (
        <ArrowDown />
      ) : s === "desc" ? (
        <ArrowUp />
      ) : (
        <ArrowUpDown />
      )}
    </Button>
  );
};

const colHelp = createColumnHelper<Payment>();

const columns = (rowDelete: (email: string) => void): ColumnDef<Payment>[] => [
  {
    accessorKey: "rowId",
    header: () => <div>RowId</div>,
    cell: ({ row }) => <div>{row.id}</div>,
  },
  {
    accessorKey: "id",
    header: () => <div>MyId</div>,
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "delete",
    header: () => <X className="size-6" />,
    cell: ({ row }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => rowDelete(row.getValue("email"))}
        >
          <CircleX className="stroke-red-600" />
        </Button>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  colHelp.accessor("status", {
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  }) as ColumnDef<Payment>,
  {
    accessorKey: "email",
    header: ({ column }) => <SortHeader title="Email" column={column} />,
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <SortHeader title="Amount" column={column} />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export { columns };
