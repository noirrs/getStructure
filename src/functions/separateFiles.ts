import { FileTreeObject } from "./../types/types.d";

export function seperateFiles(fileTree: Array<any>): {
  folders: Array<FileTreeObject>;
  files: Array<FileTreeObject>;
} {
  const files = fileTree.filter((file) => file.type === "blob");
  const folders = fileTree.filter((file) => file.type === "tree");
  return { files, folders };
}
