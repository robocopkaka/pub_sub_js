#!/bin/bash

npm run dev & npm run dev:subscriber && fg

curl -X POST -H "Content-Type: application/json" -d '{ "name": "testtopic1"}' http://localhost:8000/topics
curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:9000/test1"}' http://localhost:8000/subscribe/testtopic1
curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:9000/test2"}' http://localhost:8000/subscribe/testtopic1
curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/testtopic1
