FROM node:lts-alpine

# make the 'front' folder the current working directory
WORKDIR /front

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json ./
COPY yarn.lock ./

# install project dependencies leaving out dev dependencies
RUN yarn

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
#RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "serve" ]