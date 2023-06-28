---
title: VS Code에 docker가 설치되었습니다.
date:  2023-06-07
cover: ./docker-cover.png
categories: 
    - 공지
slug: Docker-Installed-230607
tags:
    - 공지
excerpt: Ajoupyterhub의 VS Code에서 docker 사용법을 실습할 수 있습니다.
---

### Docker 사용해보기

`VS Code` `container`를 실행한 다음, `Terminal`을 열고, `command line`에서 `docker` 명령을 호출합니다.

``` bash
$ docker ps

$ docker images
```

### 주의 사항

실습 교육 목적으로 docker 기능을 설치했습니다. 

따라서, `docker pull` 명령 등으로 다운받은 `docker image`는 `VS Code` 컨테이너가 종료되는 시점에 함께 삭제됩니다.

스스로 만든 `docker image`는 `docker push` 명령으로 여러분의 docker registry 에 저장하거나, `docker save` 명령으로 별도 `tar` 파일에 저장해야 합니다.






