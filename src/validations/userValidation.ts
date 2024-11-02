import { z } from "zod";

export const UserSchema = z.object({
  nome: z.string().min(2, { message: "O nome precisa ter no mínimo 2 caracteres." }),
  email: z.string().email({ message: "Formato de email inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha precisa ter no mínimo 6 caracteres." })
    .max(20, { message: "A senha pode ter no máximo 20 caracteres." }),
});

export type UserInput = z.infer<typeof UserSchema>;
