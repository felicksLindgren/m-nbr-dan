"use client"

import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header"
import { DropdownMenuItem, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

export const Columns: ColumnDef<Problem>[] = [
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
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const problem = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(problem.name)}>
                            Copy name
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View problem</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]