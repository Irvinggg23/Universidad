import {
   BarChart4,
   Building2,
   PanelsTopLeft,
   Settings,
   ShieldCheck,
   CircleHelpIcon,
   Calendar
} from 'lucide-react'

export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Building2,
        label: "Proyectos",
        href: "/companies"
    },
    {
        icon: Calendar,
        label: "Calendario",
        href: "/tasks"
    }
];

export const dataToolsSidebar = [
    
    {
        icon: BarChart4,
        label: "Analyticas",
        href: "/analytics"
    }
];

export const dataSupportSidebar = [
    {
        icon: Settings,
        label: "Setting",
        href: "/settings"
    },
    {
        icon: ShieldCheck,
        label: "Security",
        href: "/security"
    }
]