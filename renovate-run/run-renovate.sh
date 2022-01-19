#!/bin/bash

docker run \
  --rm \
  --name renovate \
  --env LOG_LEVEL=DEBUG \
  --env-file /vagrant/.tokens \
  --volume "/vagrant/config.js:/usr/src/app/config.js" \
  renovate/renovate 