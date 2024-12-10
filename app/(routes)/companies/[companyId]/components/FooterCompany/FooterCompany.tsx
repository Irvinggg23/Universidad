"use client"

import { useRouter } from "next/navigation";

import axios from "axios";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

import { FooterCompanyProps } from "./FooterCompany.types";
import { toast } from "@/hooks/use-toast";

export function FooterCompany(props: FooterCompanyProps) {
    const {companyId} = props
    const router = useRouter()
    
    const onDeleteCompany = async () => {
        try {
            axios.delete(`/api/company/${companyId}`)
            toast({
                title: "Proyecto Eliminado"
            })
            router.refresh()
            router.push("/companies")
        } catch (error) {
            toast({
                title: "Algo a salido mal",
                variant: "destructive"
            })
        }
    }

  return (
    <div className="flex justify-end mt-5">
        <Button variant="destructive" onClick={onDeleteCompany}>
            <Trash className="w-4 h-4 mr-2" />
            Eliminar proyecto
        </Button>
    </div>
  )
}
