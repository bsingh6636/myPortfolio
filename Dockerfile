# Build on the GitHub runner; npm ci uses the committed package-lock.json.
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# BuildKit exports only these files for shared edge-static deployment.
FROM scratch AS artifact
COPY --from=build /app/build/ /

# Optional standalone runtime, also used for the runner's container smoke test.
FROM nginx:1.28-alpine AS runtime
COPY --from=build /app/build/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
