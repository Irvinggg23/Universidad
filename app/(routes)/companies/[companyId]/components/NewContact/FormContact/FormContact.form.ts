import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(2).max(50),
    role: z.string().min(8),
    email: z.string(),
    phone: z.string(),
})