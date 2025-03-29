.PHONY install
install:
	poetry install --no-root

.PHONY migrate
migrate:
	poetry run python server/manage.py migrate

.PHONY migrations
migrations:
	poetry run python server/manage.py makemigrations

.PHONY superuser
superuser:
	poetry run python server/manage.py createsuperuser

.PHONY runserver
runserver:
	poetry run python server/manage.py runserver

.PHONY update
update: install migrate ;