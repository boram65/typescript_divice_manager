# create-nexrt-app

next.js typescript 프로젝트 생성

---

> npx create-next-app <typescript_divice_manager> --typescript

---

# tailwind css 적용

1. tailwind CSS 설치

## [tailwind 설치 링크](https://tailwindcss.com/docs/guides/nextjs)

---

> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

---

1-1. tailwind 설치 명령어

---

content: [
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
],

---

1-2. 최상의 tailwind.config.js 폴더에 붙혀넣기

---

> @tailwind base;

> @tailwind components;

> @tailwind utilities;

---

1-3. ./styles/globals.css 에 붙혀넣기

---

> npm run dev

---

1-4. 실행후 테스트 해봐

# prisma

databace ORM 이다.

2-1. VSCODE 'prisma' 확장 프로그램 설치

2-2. 'prisma' 페키지 설치

---

> npm i prisma -D

> npx prisma init

---

(아래 번역해서 따라해봐)

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

몽고 db주소 = {mongodb+srv://user:user@cluster0.qs5jdal.mongodb.net/device_manager}

---

> npx prisma db push

---

프리즈마 데이터 업로드

---

> npx prisma studio

---

데이터베이스 웹 클라이언트 실행
(명령어 실행중만 접속 가능)

2-3 'prisma' 클라이언트 설정

---

> npx prisma generate

---

js에서 CRUD 가능
프리즈마 CRUD = {https://www.prisma.io/docs/concepts/components/prisma-client/crud}

//@ts-ignore =아래 한줄 타입스크립트 우회(급할때만)
