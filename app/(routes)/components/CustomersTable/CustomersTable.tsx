import { redirect } from "next/navigation"

import {auth} from '@clerk/nextjs'

import { db } from '@/lib/db'
import { DataTable } from "./data-table-cust"
import { columns } from "./columns-cust"

export async function CustomersTable() {
    const { userId } = auth()

    if(!userId){
        return redirect("/")
    }

    const contacts = await db.contact.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

  return (
    <DataTable columns={columns} data={contacts}/>
  )
}
