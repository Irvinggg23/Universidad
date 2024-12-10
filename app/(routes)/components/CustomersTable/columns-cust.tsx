"use client"

import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"
import {  Contact } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import Link from "next/link"
import Image from 'next/image'

export const columns: ColumnDef<Contact>[] = [
    {
      accessorKey: "role",
      header: "Numero de control",
     },
     {
        accessorKey: "name",
        header: ({column}) => {
          return (
              <Button variant="ghost" onClick={()=> column.toggleSorting(column.getIsSorted() ===
              "asc")}>Nombre del Alumno
              <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
          )
        },
      },
    {
      accessorKey: "email",
      header: "Correo Electronico",
    },
    {
      accessorKey: "phone",
      header: "Numero de Teléfono",
    },
  ]