import { FilesWithPaths } from "./../types/types.d";

export function mergeSeperateds(
  files: FilesWithPaths[],
  folders: FilesWithPaths[],
  rootFiles: FilesWithPaths[],
  rootFolders: FilesWithPaths[]
) {
  let structure: any = {};
  rootFolders.forEach((folder) => {
    structure[folder.fileName] = {};
  });
  rootFiles.forEach((file) => {
    structure[file.fileName] = file.fileName;
  });

  // folder structure & hyerarchy
  files.forEach((file, fileIndex) => {
    let folderName = file.paths[0];
    let lastChanged = structure[folderName];
    file.paths.forEach((path, pathIndex) => {
      if (pathIndex != 0) {
        lastChanged[path] = {};
        lastChanged = lastChanged[path];
      }
    });
  });

  // file structure & hyerarchy
  files.forEach((file, fileIndex) => {
    let folderName = file.paths[0];
    let lastChanged = structure[folderName];

    file.paths.forEach((path, pathIndex) => {
      // if it's not the first or last path
      if (pathIndex != 0 && pathIndex != file.paths.length - 1) {
        lastChanged = lastChanged[path];
      }

      // if it's the last path
      else if (pathIndex === file.paths.length - 1) {
        if (lastChanged[path] && Object.keys(lastChanged[path])?.length > 0) {
          lastChanged[path] = {
            [file.fileName]: file.fileName,
            ...lastChanged[path],
          };
        } else {
          if (path == folderName) {
            structure[folderName] = {
              [file.fileName]: file.fileName,
              ...structure[folderName],
            };
          } else {
            lastChanged[path] = { [file.fileName]: file.fileName };
          }
        }
      }
    });
  });

  return structure;
}
