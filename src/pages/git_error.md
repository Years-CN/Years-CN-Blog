---
title: "Git所遇问题汇总"
date: "2017-08-10"
---
1：fatal: unable to access 'https://github.com/Years-CN/taro-music.git/': Failed to connect to github.com port 443: Timed out

解决办法：取消代理

git config --global --unset http.proxy

git config --global --unset https.proxy

2:	fatal: unable to access 'https://github.com/Years-CN/taro-music.git/': OpenSSL SSL_read: Connection was aborted, errno 10053

解决办法：git config --global http.sslVerify "false"

