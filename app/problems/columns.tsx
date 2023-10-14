"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header"
import { ColumnDef } from "@tanstack/react-table"

export const Columns: ColumnDef<Problem>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        )
    },
    {
        accessorKey: "grade",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Grade" />
        )
    },
    {
        accessorKey: "setby",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Set by" />
        )
    },
    {
        accessorKey: "repeats",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Repeats" />
        )
    }
]