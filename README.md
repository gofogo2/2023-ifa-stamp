ssh -i "2024galaxystudio.pem" ec2-user@ec2-3-38-213-9.ap-northeast-2.compute.amazonaws.com
sudo sh -c 'PORT=80 nohup npm run start &'
git pull origin galaxystudio2024