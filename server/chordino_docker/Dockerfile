# Use an official Ubuntu runtime as a parent image
FROM ubuntu:latest

# Set the working directory in the container
WORKDIR /

# Copy the current directory contents into the container at /app
COPY . /

ENV DEBIAN_FRONTEND=noninteractive

# compile python from source - avoid unsupported library problems
# chord-extractor needs python version between 3.6 and 3.10
RUN apt-get update && \
  apt-get install -y software-properties-common && \
  add-apt-repository -y ppa:deadsnakes/ppa && \
  apt-get update && \
  apt install -y python3.7

# Install python environment 
RUN apt-get install -y libsndfile1
RUN apt-get install -y timidity
RUN apt-get install -y ffmpeg
RUN apt install -y python3-pip
RUN apt install -y python3.7-distutils
RUN apt-get install -y python3.7-dev 
RUN python3.7 -m pip install pip

# Install any needed packages specified in requirements.txt
RUN python3.7 -m pip install numpy
RUN python3.7 -m pip install chord-extractor

# Run your Python script when the container launches
CMD ["python3.7", "main.py", "/usr/a.mp3"]
