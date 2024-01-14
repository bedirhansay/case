import { setupServer } from "msw/node";
import { handlers } from "./MockHandlers";
import "whatwg-fetch";

export const server = setupServer(...handlers);
