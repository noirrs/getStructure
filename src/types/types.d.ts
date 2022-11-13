export type FileTreeObject = {
    path: string;
    type: string;
    sha: string;
    url: string;
    mode: string;
}

export type FileResponse = {
    sha: string;
    url: string;
    tree: Array<FileTreeObject>;
}

export type FilesWithPaths = {
    paths: Array<string>;
    fileName: string;
}

