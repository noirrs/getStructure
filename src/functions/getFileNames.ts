import { FileTreeObject } from "./../types/types.d";

export function getFileNames(
  folders: Array<FileTreeObject>,
  files: Array<FileTreeObject>
) {
  const fileNames = files.map((file) => file.path);
  const folderNames = folders.map((folder) => folder.path);
  return { fileNames, folderNames };
}
