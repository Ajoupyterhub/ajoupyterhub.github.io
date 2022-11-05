---
title: PyTorch Notebook 과 TorchTerm 컨테이너 사용 개시 안내
date: 2022-11-05
cover: ../../images/hd-wallpaper-g1627ade66_1920.jpg
tags: ["공지"]
slug: "short-notice-for-pytorch-notebook-torch-term-221105"
excerpt: GPU 사용을 위한 PyTorch Notebook과 TorchTerm 컨테이너 서비스가 개시되었습니다.
---

### Ajoupyterhub에서 GPU를 사용하는 2가지 방법

Ajoupyterhub Cluster에는 모두 12개의 GPU 카드 (NVIDIA RTX Series)가 설치되어 있습니다.

인공지능, 머신러닝 등의 SW를 개발하기 위해서는 계산량이 많은 작업들이 실행되는데, GPU 카드를 활용하면, 
계산에 필요한 시간을 효과적으로 줄일 수 있다고 알려져 있습니다.

전체 클러스터에 12개만 제공되기 때문에 모든 학생이 사용할 수는 없습니다. 

그래서, 지금은 일부 교과목을 수강하는 학생에게만, GPU 카드를 사용 할 수 있도록 허용했습니다.

로그인 후, 사용 가능한 Notebook이 표시되는 `My Page`에 `PyTorch Notebook` 과 `PyTorch Installed Web YYT Terminal` 이름을 가진 Notebook Card가 보인다면, GPU 카드를 사용할 수 있도록 혀용된 것입니다.

<br/>

#### **`PyTorch Notebook with CUDA` 사용법**

`Jupyter Notebook` 사용법과 동일합니다.

`CUDA` 사용 가능 여부는 `Jupyter Notebook` Cell에서 다음의 코드를 실행하여 확인할 수 있습니다.

``` python
import torch
torch.cuda.is_available()
```

`True` 값이 출력되면, `PyTorch`에서 `CUDA` 를 사용할 수 있다는 의미 입니다.

`PyTorch`를 사용하는 방법은 다른 Contents들을 참고하기 바랍니다.

<br/>

#### **`PyTorch installed Web TTY Terminal` 사용 방법**

`Jupyter Notebook` 보다 자신의 노트북의 `Visual Studio Code`를 더 선호하는 사용자를 위한 `PyTorch`컨테이너 입니다.

이 컨테이너에는 `GPU`를 사용할 수 있는 `CUDA`와 `PyTorch`, 그리고 응용 SW 개발을 위한 `node.js`가 미리 설치되어 있습니다.

<br/>

이 방법을 사용하려면 다음 사항이 준비되어 있어야 합니다.



#### 미리 준비해야 할것


 1. `Visual Studio Code Remote Development Extensions`
    - `ssh`로 원격 서버에 접속하여, 원격 서버의 개발환경에서 SW 개발을 진행합니다.
    - `VS Code`에서 Extension을 설치하기 바랍니다.


 2. `SSH Key`
    - `PyTorch Web Terminal` (formerly, `PyTorch installed Web TTY Terminal`)의 보안을 위하여, `password` 방식의 SSH 접속을 허용하지 않습니다. `SSH Key` 만들고, 공개키에 해당하는 `key`파일 (통상 `id_rsa.pub`)을 컨테이너의 `~/.ssh/authorized_keys` 파일에 추가해야 합니다.
    - 뿐만 아니라, 다음 `SSH Key`도 authoried_keys 파일에 함께 있어야 합니다. (미리 설치해 두었지만, 확인이 필요합니다)

    ``` bash
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQDQ2ynqxrD1LmaagO3kh30Pl8iV6alE6VL/B0oo/T8tmi/xbVtkCrsPeS7C+NYc1fAkxgngho41Vx0fl+wPYEl4HJKznOFXx6WBwVfdXga90gnGGnv8VAgvBTgf/oLgYyB92jLCcZveA7Jo4p5yJHmcEssx+w+shIpjeGSq7ePAiw==
    ```


 3. 컨테이너 실행 후, 접속 확인
    - Ajoupyterhub에서 `PyTorch Web Terminal`을 실행합니다.
    - 노트북의 `Terminal`을 실행하고 (Windows의 경우, `git bash` 등을 실행) 다음 명령 실행 (`port 2022`)
    ``` bash
    $ ssh -p 2022 your_id@jupyter.ajou.ac.kr
    ``` 
    - `SSH Key`의 비밀번호를 묻거나 비밀번호를 정하지 않았다면, 바로 접속됩니다.


 4. `VS Code`에서 접속 확인
    - 컨테이너가 실행 중인 상태에서, `VS Code` 원격 열기 실행
    - 위의 `ssh` command 입력 하고, 설정 파일을 지정합니다.


대략적으로 이런 절차에 의해 `VS Code` 원격 개발환경을 사용할 수 있습니다.

질문은 `mobilechoi@ajou.ac.kr` 로 해주시기 바랍니다.
