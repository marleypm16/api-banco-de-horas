import { Request, Response,NextFunction } from "express";
import { verify } from "jsonwebtoken";

export class Authorization{
    static async checkAuthorization(req: Request, res: Response, next: NextFunction) {
        try {
          const { authorization } = req.headers;
    
          if (!authorization) {
             res.status(401).json({ error: "Token is required" });
          }

          else{
            const token = authorization.split(" ")[1]; 
            // Remove "Bearer " prefix if exists
            const decoded = verify(token, process.env.JWT_SECRET as string);
            
            // Anexa os dados do usuário decodificado no objeto `req` para acesso posterior
            res.status(200).json({ message: "You are authorized", decoded });

            next();
          }
    
        
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (errors) {
           res.status(401).json({ error: "Invalid or expired token" });
        }
      }
}