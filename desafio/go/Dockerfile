FROM golang:alpine

WORKDIR /usr/go

RUN go mod init example/hello

COPY . .

CMD [ "go", "run", "." ]