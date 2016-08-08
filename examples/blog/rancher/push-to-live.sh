#!/usr/bin/env bash
RANCHER_ACCESS_KEY=""
SECRET_KEY=""
URL="http://myrancher:8080"
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )


rancher-compose --url ${URL} --access-key ${RANCHER_ACCESS_KEY} --secret-key ${SECRET_KEY} up web --pull --upgrade --force-upgrade -d -c
