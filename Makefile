.PHONY: install
install:
	poetry install --no-root

.PHONY: migrate
migrate:
	poetry run python server/manage.py migrate

.PHONY: migrations
migrations:
	poetry run python server/manage.py makemigrations

.PHONY: superuser
superuser:
	poetry run python server/manage.py createsuperuser

.PHONY: start
start:
	poetry run python server/manage.py runserver

.PHONY: install-pre-commit
install-pre-commit:
	poetry run pre-commit uninstall; poetry run pre-commit install

.PHONY: lint
lint:
	poetry run flake8 server
	poetry run pre-commit run --all-files

.PHONY: update
update: install migrate install-pre-commit lint;

.PHONY: up-depends
up-depends:
	test -f .env || touch .env
	docker compose -f docker-compose.dev.yml up --force-recreate onemile_db
