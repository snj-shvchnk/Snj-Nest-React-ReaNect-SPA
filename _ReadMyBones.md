Hallo World i'm so happy :D
Check Git...

# ServerSide initialization:
sudo npm i -g @nestjs/cli
nest new snj-server-app
npm run start:dev
cd snj-server-app 
npm run start:dev

# Client initialization
npx create-react-app snj-client-app
cd snj-client-app
npm start

# Development:
snj-container/ npm start
snj-container/snj-client-app npm start
snj-container/snj-server-app npm run start:dev
# Or
# Use 'concurrently'
snj-container % npm install --save-dev concurrently
snj-container % npm "start": "concurrently 'npm run webpack' 'npm run server'"

# Commitment
snj-container git init
git add -A
git commit -m 'Initional codebase @Snj'
git remote add origin https://github.com/snj-shvchnk/ReaNect-Snj-SPA.git