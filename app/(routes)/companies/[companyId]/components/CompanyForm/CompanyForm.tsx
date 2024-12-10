"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from 'zod'
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form'
import {
    Select,
    SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'
import { Input } from "@/components/ui/input"
import { Toast } from "@/components/ui/toast"

import { UploadButton } from "@/utils/uploathing"

import { CompanyFormsProps } from "./CompanyForm.type"
import { formSchema } from "./CompanyForm.form"
import { title } from "process"
import { toast } from "@/hooks/use-toast"


export function CompanyForm(props: CompanyFormsProps) {
    const {company} = props
    const router = useRouter()
    const [photoUploaded, setPhotoUploaded] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: company.name,
            description: company.description,
            country: company.country,
            website: company.website,
            phone: company.phone,
            profileImage: company.profileImage
        }
    })
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/company/${company.id}`, values)
            toast({
                title:"Proyecto Editado"
            })
            router.refresh()
        } catch (error) {
            toast({
                title: "Algo a pasado",
                variant: "destructive"
            })
        }
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-3">
                <FormField 
                    control={form.control}
                    name="name"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Nombre del Proyecto</FormLabel>
                            <FormControl>
                                <Input placeholder="Company name..." type="text" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="country"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Opcion de Titulación</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Cuntry" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="Tesis o Tesina">Tesis o Tesina</SelectItem>
                    <SelectItem value="Participación en proyectos de investigación y/o Desarrollo tecnológico">
                    Participación en proyectos de investigación y/o Desarrollo tecnológico</SelectItem>
                    <SelectItem value="Examen General para Egreso de la Licenciatura (EGEL)">Examen General para Egreso de la Licenciatura (EGEL)</SelectItem>
                    <SelectItem value="Residencia Profesional">Residencia Profesional</SelectItem>
                    <SelectItem value="Proyecto integrador">Proyecto integrador</SelectItem>
                    <SelectItem value="Proyecto productivo">Proyecto productivo</SelectItem>
                    <SelectItem value="Proyecto de innovación tecnológica">Proyecto de innovación tecnológica</SelectItem>
                    <SelectItem value="Proyecto de emprendedurismo">Proyecto de emprendedurismo</SelectItem>
                    <SelectItem value="Proyecto integral de educación dual">Proyecto integral de educación dual</SelectItem>
                    <SelectItem value="Proyecto integral de estancia">Proyecto integral de estancia</SelectItem>
                            </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="website"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Carrera</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Cuntry" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="Ing. Sistemas Computacionales">Ing. Sistemas Computacionales</SelectItem>
                              <SelectItem value="Ing. Civil">Ing. Civil</SelectItem>
                              <SelectItem value="Ing. Industrial">Ing. Industrial</SelectItem>
                              <SelectItem value="Lic. Administración">Lic. Administración</SelectItem>
                            </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField 
                    control={form.control}
                    name="phone"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Numero de Integrantes</FormLabel>
                            <FormControl>
                                <Input placeholder="0" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="profileImage"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Logo Imagen</FormLabel>
                            <FormControl>
                               <div>
                                {photoUploaded ?(
                                    <p className="text-sm">Imagen Subida</p>
                                ): (
                                    <UploadButton 
                                        className="bg-slate-600/30 text-slate-88 rounded-lg 
                                        outline-dotted outline-3"
                                        {...field}
                                        endpoint="profileImage"
                                        onClientUploadComplete={(res) => {
                                            form.setValue("profileImage", res?.[0].url)
                                            setPhotoUploaded(true)
                                        }}
                                        onUploadError={(error: Error) => {
                                            toast({title: "Error al subir la imagen"})
                                        }}
                                    />
                                )}
                               </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="description"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Descripción del proyecto</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Descripción..." {...field}
                                value={form.getValues().description ?? ''} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <Button type="submit"> Editar Proyecto </Button>
        </form>
    </Form>
  )
}
