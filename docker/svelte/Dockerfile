# ビルド用
FROM node:latest as builder

WORKDIR /app

## パッケージをインストール
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
COPY ./frontend/tsconfig.json ./
RUN npm ci

COPY ./frontend .

RUN npm run build

# 実行用
FROM node:latest

WORKDIR /app

## ビルド用のレイヤからコピーする
## COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

## Svelteが動く5173ポートを開けておく
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]