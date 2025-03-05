## Getting Started

First, run the development server:

```bash
node -v = 20v
# or
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Examples of queries 

### localhost:3000/api/graphql - Apollo Server

```bash
# Удаление пользователя

mutation {
  deleteUser(id: number) {
     message
  }
}

# Регистрация пользователя

mutation {
  registerUser(
    name: ""
    email: ""
    password: ""
    isAdmin: boolean
  ) {
     user {
      id
      name
      email
      isAdmin
    }
    token
  }
}

# Авторизация пользователя

mutation {
  loginUser(
    email: ""
    password: ""
  ) {
     user {
      id
      name
      email
      isAdmin
    }
    token
  }
}
```

