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
  folders.forEach((folder, folderIndex) => {
    let folderName = folder.paths[0];
    let lastChanged = structure[folderName];
    folder.paths.forEach((path, pathIndex) => {
      if (pathIndex != 0) {
        
        if(!lastChanged[path]){
          lastChanged[path] = {};
        }
        lastChanged =  lastChanged[path];
      }
    });
  });
  console.log("folder-s",structure);
  // file structure & hyerarchy
  files.forEach((file, fileIndex) => {
    let folderName = file.paths[0];
    let lastChanged = structure[folderName];

    file.paths.forEach((path, pathIndex) => {
      // if it's not the first or last path
       //console.log(pathIndex, file.fileName, pathIndex == file.paths.length -1);
      // console.log("root", structure[folderName]);
      if (pathIndex != 0 && pathIndex != file.paths.length - 1) {

        lastChanged = lastChanged[path];
      }
     
      // if it's the last path
      else if (pathIndex === file.paths.length - 1) {


        if (lastChanged && lastChanged[path] && Object.keys(lastChanged[path])?.length > 0) {
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
