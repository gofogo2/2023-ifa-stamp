ssh -i "ilp2023-eu-es.pem" ec2-user@ec2-18-100-44-241.eu-south-2.compute.amazonaws.com
sudo sh -c 'PORT=80 nohup npm run start &' 