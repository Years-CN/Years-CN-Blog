---
title: "Git所遇问题汇总"
date: ""
---
1：fatal: unable to access 'https://github.com/username/projectname.git/': Failed to connect to github.com port 443: Timed out

解决办法：取消代理

git config --global --unset http.proxy

git config --global --unset https.proxy

2:	fatal: unable to access 'https://github.com/username/projectname.git/': OpenSSL SSL_read: Connection was aborted, errno 10053

解决办法：git config --global http.sslVerify "false"

