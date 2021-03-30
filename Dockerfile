FROM node:latest 
WORKDIR /
COPY ./ .
CMD ["npm", "start"]

EXPOSE 8800