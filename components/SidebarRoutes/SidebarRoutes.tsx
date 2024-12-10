"use client"

import { SidebarItem } from '../SidebarItem'
import { Separator } from '@/components/ui/separator'
import {dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar} from './SidebarRoutes.data'
import { Button } from '@/components/ui/button'

export function SidebarRoutes() {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <div className='p-2 md:p-6'>
            <p className='text-slate-500 mb-2'>GENERAL</p>
            {dataGeneralSidebar.map((item) => (
                <SidebarItem key={item.label} item={item}/>
            ))}
        </div>

        <Separator />

        <div className='p-2 md:p-6'>
                <p className='text-slate-500 mb-2'>HERRAMIENTAS</p>
                {dataToolsSidebar.map((item)=>(
                <SidebarItem key={item.label} item={item} />
            ))}
        </div>

        <Separator />

        
      </div>
      <div>
        
        <Separator />

        <footer className='mt-3 p-3 text-center'>
            2024. Hecho por TecnoFruits
        </footer>
      </div>
    </div>
  )
}
