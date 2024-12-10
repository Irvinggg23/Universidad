"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useParams, useRouter } from "next/navigation"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

import { FormContactProps } from "./FormContact.types"
import { formSchema } from "./FormContact.form"


export function FormContact(props: FormContactProps) {
    const {setOpen} = props

    const params = useParams<{companyId: string}>()
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            role: "",
            email: "",
            phone: ""
        }
    })

    const { isValid } = form.formState

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            axios.post(`/api/company/${params.companyId}/contact`, values)
            toast({
                title: "Integrante Creado"
            })
            setOpen(false)
        } catch (error) {
            toast({
                title: "A ocurrido un error",
                variant: "destructive"
            })
        }
        router.refresh()
    }

  return (
    <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="md:grid-cols-2
            grid gap-4">
            <FormField 
                 control={form.control}
                name="name"
                render= {({field}) => (
                 <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                        <Input placeholder="Juan Arribas" {...field} />
                    </FormControl>
                    <FormMessage />
                 </FormItem>
                )}
            />
            <FormField 
                 control={form.control}
                name="email"
                render= {({field}) => (
                 <FormItem>
                    <FormLabel>Correo</FormLabel>
                    <FormControl>
                        <Input placeholder="email@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                 </FormItem>
                )}
            />
            <FormField 
                 control={form.control}
                name="phone"
                render= {({field}) => (
                 <FormItem>
                    <FormLabel>Número Celular</FormLabel>
                    <FormControl>
                        <Input placeholder="12345678" {...field} />
                    </FormControl>
                    <FormMessage />
                 </FormItem>
                )}
            />
             <FormField 
                 control={form.control}
                name="role"
                render= {({field}) => (
                 <FormItem>
                    <FormLabel>Numero de Control</FormLabel>
                    <FormControl>
                        <Input placeholder="12345678" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                 </FormItem>
                )}
            />

                <Button type="submit" disabled= {!isValid}> Guardar Integrante </Button>
            </form>
    </Form>
  )
}
