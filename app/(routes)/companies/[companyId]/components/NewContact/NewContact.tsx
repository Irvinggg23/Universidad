"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import { FormContact } from "./FormContact/FormContact"
export function NewContact() {
    const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button>Agregar Nuevo Integrante</Button>
        </DialogTrigger>
        <DialogContent className="sm-max-w-[625px]">
            <DialogHeader>
                <DialogTitle>Agregar Nuevo Integrante</DialogTitle>
                <DialogDescription>
                    Crea los integrantes de este proyecto
                </DialogDescription>
            </DialogHeader>
            <FormContact setOpen={setOpen} />
        </DialogContent>
    </Dialog>
  )
}
