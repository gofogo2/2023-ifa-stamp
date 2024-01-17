ssh -i "ilp2023.pem" ec2-user@ec2-18-215-250-92.compute-1.amazonaws.com
sudo sh -c 'PORT=80 nohup npm run start &' 