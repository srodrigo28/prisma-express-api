### PrismaJS
* minha playlist
```
https://www.youtube.com/watch?v=76BI8fEUkN4&list=PL6tdbGPF9i1V9PdYekvI3Yby90mi6MAa2
```

* minha playlist continue
```
https://www.youtube.com/watch?v=oXsNI9cWze0&list=PL6tdbGPF9i1V9PdYekvI3Yby90mi6MAa2&index=4
```

#### Ref.
```
https://www.youtube.com/watch?v=_6XqSmjYdbE
```

* docs
```
https://www.prisma.io/docs/orm/prisma-schema/data-model/models
```

#### Criando aplicação
* iniciando o projeto
```
npm init -y
```

#### Config inicial

* passo 1
```
npm i typescript ts-node-dev -D
```

* passo 2
```
npx tsc --init
```

* passo 3 -- configurar o tsconfig.json
    * "rootDir": "./src"
    * "outDir": "./dist",
    * criar pastas na raiz
        * dist
        * src
* passo 4
```
npm i express @types/express -D
```

* passo 5
```
npm i cors @types/cors
```

#### Iniciando com prismaJS
* passo 1
```
npm i prisma @prisma/client
```

* passo 2
```
npx prisma init --datasource-provider mysql
```

* passo 3 - criar os models na pasta prisma/schema.prisma

* passo 4
```
npx prisma migrate dev
```
or
```
npx prisma migrate dev --name init
```

* passo 5
```
```