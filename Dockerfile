FROM node:lts

# Install global npm packages
RUN npm i -g @angular/cli@13.0.0

# Set working directory
WORKDIR /usr/src/app

# Copy and install local npm packages
COPY package.json* package-lock.json* ./
RUN npm install

# Copy the remaining source code
COPY . .
