import { Request, Response } from "express";
import { apply_action, apply_filters } from "../core/event-manager/hooks";

apply_action("init", arg => {
    console.log("init", { arg });
});

export const index = async (req: Request, res: Response): Promise<void> => {
    res.render("index", { title: "Express" });
};
