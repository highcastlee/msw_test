import { SetupWorkerApi, setupWorker } from "msw";

import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
