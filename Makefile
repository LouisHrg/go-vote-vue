up:
	docker-compose up -d --build

down:
	docker-compose down

run:
	docker-compose up --build

.PHONY: up down run
