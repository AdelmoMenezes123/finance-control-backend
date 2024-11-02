import { z } from "zod";

export const ReceitaSchema = z.object({
  descricao: z.string().min(3, { message: "A descrição precisa ter no mínimo 3 caracteres." }),
  valor: z.number().positive({ message: "O valor precisa ser positivo." }),
  data: z.coerce.date({ message: "Data inválida." }), // Converte strings válidas para Date
  categoria: z.string(),
  userId: z.number().positive({ message: "O ID do usuário precisa ser positivo." }),
});

export const DespesaSchema = z.object({
  descricao: z.string().min(3, { message: "A descrição precisa ter no mínimo 3 caracteres." }),
  valor: z.number().positive({ message: "O valor precisa ser positivo." }),
  data: z.coerce.date({ message: "Data inválida." }),
  categoria: z.string(),
  userId: z.number().positive({ message: "O ID do usuário precisa ser positivo." }),
});

export type ReceitaInput = z.infer<typeof ReceitaSchema>;
export type DespesaInput = z.infer<typeof DespesaSchema>;
