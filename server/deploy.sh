#!/bin/bash

echo What should the version be?
read VERSION

docker build -t zeyadomran/personal-website:$VERSION .
docker push zeyadomran/personal-website:$VERSION
ssh root@143.198.144.82 "docker pull zeyadomran/personal-website:$VERSION && docker tag zeyadomran/personal-website:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"
