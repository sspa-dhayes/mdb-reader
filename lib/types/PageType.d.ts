/// <reference types="node" />
/**
 * @see https://github.com/brianb/mdbtools/blob/d6f5745d949f37db969d5f424e69b54f0da60b9b/HACKING#L64-L70
 */
declare enum PageType {
    DatabaseDefinitionPage = 0,
    DataPage = 1,
    TableDefinition = 2,
    IntermediateIndexPage = 3,
    LeafIndexPages = 4,
    PageUsageBitmaps = 5
}
export default PageType;
export declare function assertPageType(buffer: Buffer, pageType: PageType): void;
