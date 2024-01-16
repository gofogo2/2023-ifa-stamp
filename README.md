ssh -i "ilp2023-mumbai.pem" ec2-user@ec2-15-207-223-227.ap-south-1.compute.amazonaws.com
sudo sh -c 'PORT=80 nohup npm run start &'