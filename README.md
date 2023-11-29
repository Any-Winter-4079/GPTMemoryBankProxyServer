# GPTMemoryBankProxyServer
GPTMemoryBankProxyServer holds the Node.js proxy server code for [GPTMemoryBank](https://github.com/Any-Winter-4079/GPTMemoryBank). You can host this app on any provider you'd like.

To provide you with some guidelines to host this app, choosing [Render](https://render.com) as your provider the Quick Start would be:

## Quick Start

### 1. Connect the Github repo to a new Web Service on Render
On Render, click on New -> Web Service -> Build and deploy from a Git repository -> And enter https://github.com/Any-Winter-4079/GPTMemoryBankProxyServer.git (or equivalent) as Public Git repository

### 2. Configure your Web Service
Choose your preferred Name and Region, and set Node as Runtime, ```npm i``` as Build Command and ```node app.js``` as Start Command:

<img width="1272" alt="Screenshot 2023-11-29 at 19 39 02" src="https://github.com/Any-Winter-4079/GPTMemoryBankProxyServer/assets/50542132/c173d0bc-7811-4592-ad75-31253b4765d0">

### 3. Add your environment variable
Before creating your Web Service, go to Advanced and enter ```NGROK_URL``` as Key and your ngrok url (with your custom domain) as Value:

<img width="1257" alt="Screenshot 2023-11-29 at 19 40 14" src="https://github.com/Any-Winter-4079/GPTMemoryBankProxyServer/assets/50542132/feb5076f-2a60-4b07-a3bd-2c8324dd81dc">

### 3. Deploy
Once your Web Service is deployed, you will be able to set it as the URL to talk to on your GPT-4 Actions Schema:
```
"servers": [
      {
        "url": "YOUR_RENDER_URL"
      }
    ]
```
