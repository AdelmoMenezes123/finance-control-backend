import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";
import { User } from "../users/entities/User";

dotenv.config();
interface JwtPayload {
  userId: number;
}
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
    return jwt.sign({ userId: user.id }, this.jwtSecret as string, { expiresIn: this.jwtExpiration });
  }

  // Função para verificar o token JWT
  verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.jwtSecret as string) as JwtPayload;
    } catch (error) {
      throw new Error("Token inválido ou expirado");
    }
  }
}
