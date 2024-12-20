import express from "express"
import { viewProject,updateProject } from "../controller/projectController.js"
import { verifyToken } from "../middleware/authnatication.js"
import createToken from "../util/genrateToken.js"
const router = express.Router()

router.get("/project/:id", verifyToken, viewProject)
router.put("/project/:id",verifyToken, updateProject)
router.get("/token",createToken)

export default router
