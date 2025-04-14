FROM python:3.12

# Set the working directory
WORKDIR /app/dev

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=.
ENV CORESETTING_IN_DOCKER=true

# Install dependencies
RUN set -xe \
    && apt-get update \
    && apt-get install -y --no-install-recommends build-essential \
    && pip install virtualenvwrapper poetry==2.1.1 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy and install requirements
COPY ["pyproject.toml", "poetry.lock", "./"]
RUN poetry install --no-root

# Copy the rest of the application code
COPY ["MakeFile", "README.md", "./"]
COPY server server
COPY local local

# Expose the port the app runs on
EXPOSE 8000

# Set up the entrypoint
COPY scripts/entrypoint.sh /entrypoint.sh
RUN chmod a+x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
