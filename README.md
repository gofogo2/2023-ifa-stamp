ssh -i "ilp2023-eu-de.pem" ec2-user@ec2-3-121-208-21.eu-central-1.compute.amazonaws.com
sudo sh -c 'PORT=80 nohup npm run start &' 