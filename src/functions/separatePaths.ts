import { FilesWithPaths } from './../types/types.d';
import { FileTreeObject } from "../types/types";

export function separatePaths(
  files: FileTreeObject[],
  folders: FileTreeObject[]
) {
  files.sort((a, b) => a.path.split("/").length - b.path.split("/").length);

  let filesWithPaths = files.map((file) => {
    const paths = file.path.split("/");
    const fileName = paths.pop();
    return { paths, fileName };
  });

  let foldersWithPaths = folders.map((folder) => {
    const paths = folder.path.split("/");
    const fileName = paths.pop();
    return { paths, fileName };
  });

  return { filesWithPaths, foldersWithPaths };
}
