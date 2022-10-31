---
title: VSCode에서 Web 개발하고, Web 화면 Test 하기
date: 2022-10-31
cover: ./caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg
tags: ["사용가이드", "기술"]
slug: "Web-Dev-and-Test-in-VSCode_221031"
excerpt: VSCode 컨테이너에서 Web 개발할 때, Web 화면을 띄우고, Test하는 방법을 안내합니다.
---

Cover Photo by <a href="https://unsplash.com/@casparrubin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Caspar Camille Rubin</a> on <a href="https://unsplash.com/s/photos/website?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

<br/>


### 준비된 Web개발환경

Ajoupyterhub에는 VS Code 컨테이너 안에, `Java`와 `Maven`, `node.js`, `python3` 등으로 web을 개발할 수 있는 개발환경이 미리 준비되어 있습니다.

각 개발환경에서 어떻게 개발하는 지는, 수업이나 비교과활동으로 배울수 있고, 이 Blog에서도 간단하게 언급할 수도 있겠지만, 

이번 post에서는 생략합니다.

<br/>

### 웹 개발 화면 Test 방법

Web 응용 프로그램을 개발할 때, 많이 하는 작업이 화면을 직접 띄워 테스트하는 것입니다. 

학생 여러분의 Notebook에서 직접 Web 응용 프로그램을 개발할 때는, 

사용하는 IDE(통합개발환경)에 있는 기능을 활용하거나, 운영체제의 Command line 명령을 활용하는 방법으로 Web 화면을 Test합니다.

Ajoupyterhub의 VS Code 컨테이너에서는 다음의 방법으로 테스트합니다.

<br/>

 **예) `Node.js` 코드 (`app.js`)**

``` javascript
var express = require('express')
var app = express()

app.get('/', (req, resp) => {
    resp.send("Hello World")
})

app.get('/Hello', (req, resp) => {
    resp.send("World under /Hello")
})

app.listen(8100, () => {
    console.log("app is listening on the port 8100")
})
```

8100 번 `port`로 간단 Web Server를 구동하는 코드를 작성했습니다.

터미널을 오픈하고, Commandline Prompt에서

``` 
$ node app.js
```

을 실행하면, 아래처럼 Web이 구동되었다고 알립니다.

```
app is listening on the port 8100
```

이 상태에서, 지금 VS-Code 컨테이너의 URL을 복사하고 (Web Brower의 URL 창에 있는 URL), 

```
https://jupyter.ajou.ac.kr/code/mobilechoi/sztbreBnh1evoQuG/?folder=/home/mobilechoi/workspace
```
`?folder` 이후 부분을 모두 `proxy/8100`으로 바꿔서 Browser의 새로운 창에 입력합니다.

아래처럼 말이죠.
```
https://jupyter.ajou.ac.kr/code/mobilechoi/sztbreBnh1evoQuG/proxy/8100
```

이 화면이 여러분이 방금 VS-Code 컨테이너에서 구동한 Web 화면입니다.

`port` 번호가 `3000` 번이면, 위 URL의 끝부분이 `/proxy/3000`이 됩니다.

즉, 끝부분은 `/proxy/<port번호>` 이렇게 붙여주면, Web화면을 테스트할 수 있습니다.



위에서, `/Hello` URL은 URL 끝부분을 `/proxy/8100/Hello`로 접속하면 표시됩니다.

<br/>

궁금한 사항은 `Github` 가입 후, 아래 댓글창에 문의 바랍니다.

<br/>

모두 즐거운 코딩 실습 되기 바랍니다.



