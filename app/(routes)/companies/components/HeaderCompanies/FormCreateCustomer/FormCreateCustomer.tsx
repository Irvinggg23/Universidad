"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"
import axios from 'axios'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormCreateCustomerProps } from "./FormCustomer,types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UploadButton } from "@/utils/uploathing"
import { useToast } from "@//hooks/use-toast"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    name: z.string(),
    country: z.string().min(1),
    website: z.string().min(1),
    phone: z.string().min(1),
    profileImage: z.string()
})

export function FormCreateCustomer(props: FormCreateCustomerProps) {
 
    const {setOpenModalCreate} = props
    const router = useRouter()
    const [photoUploaded, setPhotoUploaded] = useState(false)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            country: "",
            website: "",
            phone: "",
            profileImage: ""
        },
      })

      const { isValid } = form.formState
      
      const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        try {
             axios.post("/api/company", values)
             toast ({title: "Proyecto Creado"})
             setOpenModalCreate(false)
             router.refresh()
        } catch (error) {
          toast({
            title: "Error al crear el proyecto",
            variant: "destructive"
          })
        }
      }

  return (
    <div> <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-3">
        
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre del Proyecto</FormLabel>
            <FormControl>
              <Input placeholder="Nombre del Proyecto..." type="text" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Opciones de Titulacion</FormLabel>
            <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            >
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecciona la opcion de titulacion" />
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
        render={({ field }) => (
          <FormItem>
            <FormLabel>Carrera</FormLabel>
            <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            >
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecciona la carrera" />
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
        render={({ field }) => (
          <FormItem>
            <FormLabel>Numero de integrantes</FormLabel>
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
        render={({ field }) => (
          <FormItem>
            <FormLabel>Logo Imagen</FormLabel>
            <FormControl>
                {photoUploaded ? (
                    <p className="text-sm">Imagen Subida</p>
                ): (
              <UploadButton 
              className="bg-slate-600/20 text-slate-800
              rounded-lg outline-dotted outline-3"
              {...field}
              endpoint="profileImage"
              onClientUploadComplete={(res) => {
                form.setValue("profileImage", res?.[0].url)
                toast({
                    title: "Imagen Subida",
                })
                setPhotoUploaded(true)
              }}
              onUploadError = {(error: Error) => {
                toast({
                    title:"Error al subir la imagen",
                })
              }}
              />
            )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      </div>
      <Button type="submit" disabled={!isValid} onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}>Crear</Button>
    </form>
  </Form>
 </div>
  )
}
