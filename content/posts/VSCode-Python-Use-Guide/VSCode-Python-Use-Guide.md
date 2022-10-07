---
title: VSCode에서 효과적인 Python 코딩 방법
date: 2022-10-06
cover: ./chris-ried-ieic5Tq8YMk-unsplash.jpg
tags: ["사용가이드", "기술"]
slug: "effective-python-coding-in-VSCode_221006"
excerpt: VSCode 컨테이너에서 Python을 효과적으로 사용하는 방법을 안내합니다.
---

Cover photo by <a href="https://unsplash.com/@cdr6934?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Ried</a> on <a href="https://unsplash.com/s/photos/python?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

<br/>


#### Python 사용하기 가장 좋은 방법

Ajoupyterhub에서 Python을 활용하는 좋은 방법은 Jupyter Notebook을 사용하는 것입니다.

Jupyter Notebook에는 현재 2가지 DataScience Notebook과 Tensorflow Notebook 이 있습니다.

2개의 Notebook 모두, Data Science에서 필요한 `Pandas`, `Numpy`, `Scikit-learn` 등의 Python Module들이 미리 설치되어 있습니다.

<br/>


#### VSCode에서 Python Virtual Environment 사용하기

그럼에도 불구하고, VSCode로 Python Coding을 하고 싶다면, 여러분이 사용할 Python Module들을 스스로 설치해야 합니다.

그러나, 여러분에게는 Python Module을 설치할 권한이 없습니다. 보안 위험을 줄이기 위해서 권한을 제한하였습니다.

하지만, Python Coding 할 때  좋은 습관 중의 하나인 `Virtual Environment`를 활용하면, Python Module들을 자유롭게 설치하여 활용할 수 있습니다. 대신, 설치된 모듈은 여러분의 `home` 디렉토리에 설치됩니다.

<br/>


 1. 먼저, 왼쪽 상단의 메뉴 아이콘을 클릭하고, Terminal을 찾아 새로운 Terminal을 엽니다.

 2. 그리고 다음의 커맨드로 `test_venv` 라는 Python Virtual Environment를 생성하고 활용을 시작합니다. 가상 환경의 이름은 `test_venv` 대신 여러분이 정할 수 있습니다.


```
$ python3 -m venv test_venv 
$ source test_venv/bin/activate
```

 3. 성공적으로 Python Virtual Environment가 설치되었다면, Command Prompt가 아래처럼 바뀌었을 겁니다. 여러분이 가상환경에 들어와 있다는 것을 표시하는 것입니다.

 4. 이 환경에서 모듈을 설치하면, 여러분의 home 디렉토리 안의 가상환경 디렉토리에 설치됩니다.

```
...
(test_venv)$

(test_venv)$ pip install your_wanted_module

```

<br/>


 5. Python Code에서는 다음처럼 Python module을 `import` 해야겠죠?

 ```python
 import your_wanted_module

 ...
 ```


<br/>


#### Python Coding의 좋은 습관 - 가상환경 활용하기

Python 가상 환경을 사용하는 주된 이유는 Module 간의 잠재적 충돌 위험을 방지하는 이유도 있고, 성격이 다른 개발 작업에 반드시 필요한 모듈들로 구성된 환경으로 효율적인 관리가 가능하기 때문이기도 합니다.

Python Virtual Environment를 활용하여, **아주** **우아한** Python Coding 생활을 즐겨보세요.





