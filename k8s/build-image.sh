#! /bin/bash

docker build -t hospital-metric_servo-image:latest ../backend/5-metric_servo_service/
docker save hospital-metric_servo-image:latest > metric_servo-image.tar
sudo ctr -n k8s.io images import metric_servo-image.tar
rm -rf metric_servo-image.tar