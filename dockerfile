# 베이스 이미지 (Node.js 공식 이미지 사용)
FROM node:18

# 작업 디렉토리 만들기
WORKDIR /usr/src/app

# package.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 앱이 사용하는 포트 (3000번) 오픈
EXPOSE 3000

# 앱 실행
CMD ["node", "app.js"]
