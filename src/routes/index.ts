import { Router } from "express";
import authRoutes from "../auth/routes"
import medCryptRoutes from "../medcrypt/routes"

const router = Router();

router.use("/auth", authRoutes);
router.use("/med-crypt", medCryptRoutes);



export default router;

