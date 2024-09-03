sudo apt update
sudo apt install git -y

프로젝트 clone:

bashCopygit clone [your-repository-url]
cd [your-project-directory]

Node.js 및 npm 설치 (프로젝트에 필요한 경우):

bashCopycurl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

프로젝트 의존성 설치 및 빌드:

bashCopynpm install
npm run build

Nginx 설치:

bashCopysudo apt install nginx -y

Nginx 설정:

bashCopysudo nano /etc/nginx/sites-available/default
다음과 같이 설정을 수정하세요:
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

Nginx 재시작:

bashCopysudo systemctl restart nginx

Nginx 서비스 등록 (자동 시작):

bashCopysudo systemctl enable nginx
이 과정을 완료하면 AWS Ubuntu 인스턴스에서 프로젝트가 Nginx를 통해 서비스될 것입니다. 추가 설명이나 특정 단계에 대한 자세한 정보가 필요하시면 말씀해 주세요. CopyRetryClaude does not have the ability to run the code it generates yet.고git clone [your-repository-url] 하는데 특정 브랜치를 받을거야Edit네, 특정 브랜치를 clone 받으시려면 다음과 같이 할 수 있습니다:
bashCopygit clone -b [branch-name] [your-repository-url]
여기서 [branch-name]은 clone 받고자 하는 특정 브랜치의 이름이고, [your-repository-url]은 당신의 Git 저장소 URL입니다.
예를 들어, 'develop' 브랜치를 clone 받고 싶다면 다음과 같이 입력하면 됩니다:
bashCopygit clone -b develop https://github.com/username/repository.git
이 명령어를 실행하면 지정한 브랜치만 clone됩니다. 만약 clone 후에 해당 브랜치로 바로 이동하고 싶다면, 다음과 같이 할 수 있습니다:
bashCopygit clone -b [branch-name] [your-repository-url]
cd [repository-name]
git checkout [branch-name]


sudo cp -R ./build/* /var/www/html/