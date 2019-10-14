FROM centos:centos7.6.1810
LABEL maintainer="Colin But"
RUN curl --silent --location https://rpm.nodesource.com/setup_10.x | bash - && \
    yum install nodejs -y && \
    adduser -mr nodejs
USER nodejs
WORKDIR /home/nodejs
COPY . .
RUN npm install
ENTRYPOINT ["node", "app.js"]