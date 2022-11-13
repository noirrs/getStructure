import { FilesWithPaths, FileTreeObject } from "../types/types";


export function separateRoots(
  filesWithPaths: FilesWithPaths[],
  foldersWithPaths: FilesWithPaths[]
): { rootFolders: FilesWithPaths[]; rootFiles: FilesWithPaths[], files: FilesWithPaths[], folders: FilesWithPaths[]} {
  let rootFolders: FilesWithPaths[] = [];
  let rootFiles: FilesWithPaths[] = [];

  let files = filesWithPaths;
  let folders = foldersWithPaths;

  files.forEach((file, index) => {
    if (file.paths.length === 0) {
      rootFiles.push(file);
      delete files[index];
    }
  });

  folders.forEach((folder, index) => {
    if (folder.paths.length === 0) {
      rootFolders.push(folder);
      delete folders[index];
    }
  });

  files = files.filter((file) => file.paths.length >= 0)
  folders = folders.filter((folder) => folder.paths.length >= 0)
  return { rootFolders, rootFiles, files, folders };
}

/*
    example output:

    {
        "src": {
            "commands": [
              {
                "Info": [
                    "help.ts",
                ],
              },
              {
                "Login": [
                    "insta.ts",
                ],
              }, 
             {
               "Metadata": [
                    "github.ts",
                    "insta.ts"
                ]
              }
            }
*/
