# Étape 1 : Construction
FROM node:18 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de configuration et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Construire l'application React
RUN npm run build

# Étape 2 : Serveur pour l'application (nginx)
FROM nginx:stable

# Copier les fichiers construits dans le répertoire de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut pour démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
