ssh -i "ilp2023-eu.pem" ec2-user@ec2-13-38-87-208.eu-west-3.compute.amazonaws.com
sudo sh -c 'PORT=80 nohup npm run start &'