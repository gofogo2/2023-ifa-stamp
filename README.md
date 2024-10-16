sudo apt update
sudo apt install git -y


git clone -b twitch2024 https://github.com/gofogo2/2023-ifa-stamp.git

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

npm install
npm run build

sudo apt install nginx -y
sudo nano /etc/nginx/sites-available/default

nginxCopyserver {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /path/to/your/build/directory;
    index index.html index.htm;

    server_name _;

    location / {
        try_files $uri $uri/ /index.html;
    }
}


cd c:\keys

ssh -i "twitch2024.pem" ubuntu@ec2-54-177-65-157.us-west-1.compute.amazonaws.com

sudo systemctl restart nginx
sudo systemctl enable nginx

배포시
git pull
npm run build
sudo cp -R ./build/* /var/www/html/
sudo systemctl restart nginx


실행
nohup node main.js > nohup.out 2>&1 &
disown


종료 및 확인
ps aux | grep "node main.js"

kill <PID>
kill -9 <PID>
ps aux | grep "node main.js"

수정
 mv stamp.json 09-21.json
 touch stamp.json
 nano stamp.json
 cat stamp.json

