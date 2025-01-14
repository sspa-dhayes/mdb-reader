import { getJetFormat } from "../JetFormat/index.js";
import { createIdentityHandler } from "./handlers/identity.js";
import { createJetCodecHandler } from "./handlers/jet.js";
import { createOfficeCodecHandler } from "./handlers/office/index.js";
export function createCodecHandler(databaseDefinitionPage, password) {
    const format = getJetFormat(databaseDefinitionPage);
    switch (format.codecType) {
        case 0 /* JET */:
            return createJetCodecHandler(databaseDefinitionPage);
        case 2 /* OFFICE */:
            return createOfficeCodecHandler(databaseDefinitionPage, password);
        default:
            return createIdentityHandler();
    }
}
