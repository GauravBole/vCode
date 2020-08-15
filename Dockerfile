FROM node

RUN apt-get update || : && apt-get install python3 -y

WORKDIR /app
COPY . /app
CMD ["node", "index.js"]