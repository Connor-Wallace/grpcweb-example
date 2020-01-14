#! /bin/bash

# sets up ambassador in a local cluster running pachd

kubectl apply -f https://getambassador.io/yaml/ambassador/ambassador-rbac.yaml

kubectl apply -f ./ambassador-service.yaml

kubectl apply -f ./pachd.yaml

kubectl apply -f ./mapping.yaml

kubectl apply -f ./cors-grpc.yaml

kubectl get svc -o wide ambassador