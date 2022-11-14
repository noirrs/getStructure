import { FilesWithPaths } from "@/types";
import { getRepository } from "./getRepository";
import { makeTree } from "./makeTree";
import { mergeSeperateds } from "./mergeSeparateds";
import { seperateFiles } from "./separateFiles";
import { separatePaths } from "./separatePaths";
import { separateRoots } from "./separateRoots";

export async function Main(
  username: string,
  repository: string,
  branch: string = "master"
): Promise<string> {
  const data = await getRepository(username, repository, branch);

  const seperatedFiles = seperateFiles(data.tree);

  const setStructures = separatePaths(
    seperatedFiles.files,
    seperatedFiles.folders
  );

  const roots = separateRoots(
    setStructures.filesWithPaths as FilesWithPaths[],
    setStructures.foldersWithPaths as FilesWithPaths[]
  );

  const mergeSeperated = mergeSeperateds(
    roots.files,
    roots.folders,
    roots.rootFiles,
    roots.rootFolders
  );

  const makeATree = makeTree(mergeSeperated);
  return makeATree;
}
