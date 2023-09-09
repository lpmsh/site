import { schemas } from "@/sanity/config/schemas";
import { defineConfig } from "sanity";
import { deskTool, StructureBuilder } from "sanity/desk";
import { sanityVars } from "@/sanity/config/constants";
import { codeInput } from "@sanity/code-input";


function convertContentTypeToSinglePageInDesk(s: StructureBuilder, schemaTitle: string, schemaName: string) {
    return s.listItem().title(schemaTitle).child(s.document().schemaType(schemaName).documentId(schemaName));
}

export const config = defineConfig({
    projectId: sanityVars.projectId,
    dataset: sanityVars.dataset,
    title: "LPMSH",
    basePath: "/admin",
    plugins: [
        deskTool({
            structure: (S) =>
                S.list()
                    .title("Base")
                    .items([
                        convertContentTypeToSinglePageInDesk(S, "Home Page", "home"),
                        ...S.documentTypeListItems().filter((listItem) => {
                            console.log("ITEM ID", listItem.getId());
                            return !["home", "about"].includes(listItem.getId() as any);
                        }),
                    ]),
        }),
        codeInput()
    ],
    schema: { types: schemas },
});
