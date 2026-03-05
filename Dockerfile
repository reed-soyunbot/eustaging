FROM nginx:stable-alpine

WORKDIR /usr/tc-website/app

ADD ./build /usr/tc-website/app
ADD ./build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# start app
CMD ["nginx", "-g", "daemon off;"]