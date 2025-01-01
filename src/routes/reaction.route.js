import { Router } from "express";

import { reactionController } from "../controllers/reaction.controller.js";

const router = Router();

router.route("/reaction").post(reactionController);

export default router;
