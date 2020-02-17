#! /bin/bash

# sets up ambassador in a local cluster running pachd

kubectl apply -f https://www.getambassador.io/yaml/aes-crds.yaml && \
kubectl wait --for condition=established --timeout=90s crd -lproduct=aes && \
kubectl apply -f https://www.getambassador.io/yaml/aes.yaml && \
kubectl -n ambassador wait --for condition=available --timeout=90s deploy -lproduct=aes

kubectl apply -f ./ambassador-service.yaml

kubectl apply -f ./pachd.yaml

kubectl apply -f ./pfs-pps-mapping.yaml

kubectl apply -f ./cors-grpc.yaml

kubectl get svc -o wide ambassador