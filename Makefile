up:
	@ docker-compose up -d

run:
	@ docker-compose up -d

vue:
	@ cd ./front && yarn serve

go:
	@ cd ./back && go build && ./go-vote
