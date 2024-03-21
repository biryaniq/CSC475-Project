# CSC475-Project

Group project for music retrieval techniques

## Dependencies

Node 18.17 or later

Python 3.8 or later

Python Flask:

```
pip install Flask
pip install -U flask-cors
```

## Build Chordino Docker Container

1. run Docker Daemon
2. cd to `/server/chordino_docker`
3. run `docker build -t chord-rec .`

## Run Dev Environment

_From Project Root_

To run front end

```
cd client && npm run dev
```

To run back end

```
cd server && flask run
```
