
FROM golang

COPY . /go/src/back/
WORKDIR /go/src/back/

RUN go get ./
RUN go build

CMD go get github.com/pilu/fresh && fresh;

EXPOSE 8000
