import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";

@injectable()
export class AuthService {
  private jwtSecret: string = process.env.JWT_SECRET || "default_secret";
  private jwtExpiration: string = process.env.JWT_EXPIRATION || "1d";

  // Função para gerar hash da senha
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  // Função para comparar senha no login
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  // Função para gerar o token JWT
  generateToken(user: User): string {
    return jwt.sign({ id: user.id }, this.jwtSecret, { expiresIn: this.jwtExpiration });
  }

  // Função para verificar o token JWT
  verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw new Error("Token inválido");
    }
  }
}
