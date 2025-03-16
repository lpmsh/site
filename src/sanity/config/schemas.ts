import { postSchema } from "../post";
import { homeSchema } from "../home";
import { gearPostImageSchema, gearPostSchema } from "../gear";
import { workPostImageSchema, workPostSchema } from "../work";

export const schemas = [postSchema, homeSchema, gearPostSchema, gearPostImageSchema, workPostImageSchema, workPostSchema];
