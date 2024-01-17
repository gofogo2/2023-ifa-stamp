ssh -i "ilp2023-eu-gb.pem" ec2-user@ec2-3-8-136-105.eu-west-2.compute.amazonaws.com
sudo sh -c 'PORT=80 nohup npm run start &' 