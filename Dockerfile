FROM node:latest 
WORKDIR /
COPY ./ .
CMD ["node", "index.js"]

EXPOSE 8800