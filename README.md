# 🚧 Get Structure 

🌀 Get Structure is an API that helps to get hierarchy (structure) of an github repository like tree command in bash


# ⚡Quick API Docs

**Example Request:**  

```js 
POST 
getstructure.noirs.me 

{
 body: {
	 username: "Noirrs",
	 repository: "getStructure",
	 branch: "master"
	}
}

* API endpoint: getstructure.noirs.me

* username: Repository Author's github nickname
* repository: Github Repository's name
* branch: Github Repository's main branch [generally => master / main] 

* method: POST
```

**Example Response:** 


```js
* Response Type: String | Error<typless>

├─ src
│  ├─ main.ts
│  ├─ app.service.ts
│  ├─ app.module.ts
│  ├─ app.controller.ts
│  ├─ functions
│  │  ├─ separateRoots.ts
│  │  ├─ separatePaths.ts
│  │  ├─ separateFiles.ts
│  │  ├─ mergeSeparateds.ts
│  │  ├─ makeTree.ts
│  │  ├─ main.ts
│  │  ├─ getRepository.ts
│  │  └─ getFileNames.ts
│  └─ types
│     └─ types.d.ts
├─ .gitignore
├─ README.md
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ tsconfig.build.json
├─ tsconfig.json
└─ vercel.json
```

# ✍️ Source Code


## Resources

- [Treeify](https://www.npmjs.com/package/treeify)

- [NestJS](https://docs.nestjs.com)

- [Axios](https://www.npmjs.com/package/axios)

- [Vercel](https://vercel.com)


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNoirrs%2Fgetstructure)

 
# 📱 Contact

<div align="center">
<a href="https://github.com/Noirrs" target="_blank"><img src="https://img.shields.io/badge/Noirrs%20-191717.svg?&style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://discord.com/users/922078187788308510" target="_blank"><img src="https://shields.io/badge/Noir-111111.svg?&style=for-the-badge&logo=discord"></a>
<a href="https://www.npmjs.com/~noirr" target="_blank"><img src="https://shields.io/badge/Noirr-111111.svg?&style=for-the-badge&logo=npm"></a>
<a href="https://open.spotify.com/user/oitziwwbyioezmtmfndiu3qqw" target= "_blank"><img src="https://img.shields.io/badge/Spotify%20-1ed760.svg?&style=for-the-badge&logo=spotify&logoColor=black"></a>
  </div>

