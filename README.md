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

sudo systemctl restart nginx
sudo systemctl enable nginx

배포시
git pull
npm run build
sudo cp -R ./build/* /var/www/html/
sudo systemctl restart nginx