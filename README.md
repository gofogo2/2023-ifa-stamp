ssh -i "ilp2023-asia.pem" ec2-user@ec2-13-214-158-143.ap-southeast-1.compute.amazonaws.com
	sudo sh -c 'PORT=80 nohup npm run start &' 