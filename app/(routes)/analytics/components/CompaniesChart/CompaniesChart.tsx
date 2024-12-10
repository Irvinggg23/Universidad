"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import { CompaniesChartProps } from "../../CompaniesChart.types";

export function CompaniesChart(props: CompaniesChartProps) {
    const {companies, events} = props

    const dataChart = companies.map(company => ({
        name: company.name.length > 10 ? company.name.slice(0, 10) + '...' : company.name,
        Eventos_por_Proyecto: events.filter(event => event.companyId === company.id).length
    }))
  return (
    <div className='h-[550px]'>
        <ResponsiveContainer width="100%" height="100%" >
            <BarChart width={500} height={300} data={dataChart}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Eventos_por_Proyecto" fill='#272399' />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}
