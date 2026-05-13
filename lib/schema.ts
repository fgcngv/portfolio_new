
import z, {} from "zod"

export const ContactSchema = z.object({
    
    name:z.string().trim().min(3,"name should have 3 or more characters").max(30,"name should have maximum of 50 characters"),
    email: z.string().email("Invalid email address!"),
    message:z.string().trim().min(3,"message should have 3 or more characters").max(500,"message should have maximum of 500 characters"),


});

export type ContactFormValues = z.infer<typeof ContactSchema>;