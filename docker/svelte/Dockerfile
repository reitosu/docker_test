FROM node:latest as builder

WORKDIR /app

## パッケージをインストール
COPY ./frontend/package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
RUN npm ci

COPY ./frontend .

RUN npm run build

# These steps will be re-run upon each file change in your working directory:
ADD ./src .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache main.ts

CMD ["run", "--allow-env", "--allow-net", "--allow-read", "--allow-write", "--allow-run", "main.ts"]