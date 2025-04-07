import { Router } from "express";
import authRouter from "./authRoutes";

const appRouter = Router();

appRouter.use('/auth', authRouter)

export default appRouter;