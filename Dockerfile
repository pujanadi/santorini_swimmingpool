# syntax=docker/dockerfile:1

# ---- Build ----
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Nomor WhatsApp tertanam saat build. Kosong = tombol "Tanya Admin" mengarah ke Instagram.
ARG VITE_WHATSAPP_NUMBER=""
ENV VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER
RUN npm run build

# ---- Serve ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
