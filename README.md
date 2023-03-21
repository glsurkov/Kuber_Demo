# Instructions
Deployment is done on a minikube cluster, so the first thing you need is to install `minikube` and `kubectl`
## Start of a minikube cluster
Terminal needs to be opened as administrator.
### Initialization of the cluster
* start the cluster: `minikube start`
* check the status of the cluster: `minikube status`

Install nginx ingress: `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.6.4/deploy/static/provider/cloud/deploy.yaml` \
Open external IP: `minikube tunnel`.
###Service Deployment
Apply all your deployments and service from k8s folder : `kubectl apply -f k8s`

If you want to open your application with host name `app.example.com`, you should provide alias for this host name in `hosts`config \
Also you can get access to your application via IP address `127.0.0.1`