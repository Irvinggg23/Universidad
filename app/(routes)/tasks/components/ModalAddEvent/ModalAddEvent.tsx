"use client"

import {
    Dialog,DialogContent,DialogHeader, DialogTitle
} from '@/components/ui/dialog'

import { ModalAddEventProps } from "./ModalAddEvent.types";
import { FormEvent } from '../FormEvent';

export function ModalAddEvent(props: ModalAddEventProps) {
    const {open, companies, setNewEvent, setOnSaveNewEvent, setOpen} = props
  return (
    <div>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className='xm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Agrega un nuevo evento</DialogTitle>
                </DialogHeader>
                <FormEvent setOnSaveNewEvent={setOnSaveNewEvent}
                companies={companies}
                setNewEvent={setNewEvent}
                setOpen={setOpen}
                />
            </DialogContent>
        </Dialog>
    </div>
  )
}
