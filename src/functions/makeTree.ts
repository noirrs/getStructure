var treeify = require("treeify");

export function makeTree(structure: any) : string {
    
    return treeify.asTree(structure, false);
}
