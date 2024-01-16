ssh -i "bss2023.pem" ec2-user@ec2-43-201-149-238.ap-northeast-2.compute.amazonaws.com
sudo sh -c 'PORT=80 nohup npm run start &'