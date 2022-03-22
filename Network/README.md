# Network Study

## Internet Protocol Stack

### TCP/IP Protocol Architecture

-   Application Layer
    -   End user에게 직접적으로 서비스를 제공하기 위한 protocol
    -   FTP, SMTP, HTTP, …
-   Transport Layer
    -   TCP, UDP
    -   Process들끼리 (브라우저 / 클라이언트) 데이터가 온전히 교환되는지 확인
-   Network Layer
    -   IP, routing protocol
-   Link Layer
    -   Ethernet, WiFi, PPP, …
-   Physical Layer

-   각 계층은 상위 계층에게 서비스를 제공하고 하위 계층의 서비스를 사용
-   데이터를 보낼 때 Encapsulation 과정을 거침
    -   각 계층에서 Application Layer에서 만들어진 메세지에 헤더를 붙임
    -   Transport Layer - Segment (Ht + message)
    -   Network Layer - Datagram (Hn + Ht + message)
    -   Link Layer - Frame (Hl + Hn + Ht + message)
-   데이터를 받을 때 Decapsulation
    -   각 계층에서 필요한 헤더를 처리한 후 하위 계층에게 데이터를 넘김

<br></br>

### ISO/OSI reference model

-   7 layers로 구성 (예전에 있던 모델)
-   Application과 Transport Layer 사이에 Presentation과 Session Layer가 존재
-   Presentation과 Session의 일부 계층은 TCP/IP 모델의 Application Layer에 속함
-   Session의 일부 계층은 Transport Layer에 속함

<br></br>

## Application Layer Protocol

### Client-Server 구조

-   Server
    -   Permanent IP address
    -   Always-on host
    -   통신을 기다림
-   Client
    -   Dynamic IP address
    -   Client끼리 소통 불가
    -   통신 시작

<br></br>

### Peer-to-Peer 구조 (P2P)

-   No always-on server
-   단말끼리 직접 소통하는 방식
-   Self scalability (자가 확장성)

<br></br>

### Sockets

-   Application Layer와 나머지 4개의 계층이 소통하기 위해 필요한 창구
-   나머지 계층은 OS의 기능으로 OS가 컨트롤

<br></br>

### Application Layer Protocol이 하는일

-   Type of message
    -   주고받을 메세지 정의
-   Message syntax
    -   메세지가 어떤 형식으로 주고 받을지 정의
-   Message semantic
    -   메세지의 의미 정의
-   Rules
    -   프로세스 작동 규칙 정의

<br></br>

### Application의 특징

-   Data integrity (데이터 완전도)
-   Timing
-   Throughput (단위 시간당 데이터량)
-   Security

<br></br>

### HTTP - HyperText Transfer Protocol

-   Web의 Application layer protocol

-   Client-Sever model
-   TCP 사용
-   Stateless 하다
    -   서버가 상태 정보를 저장하지 않음
-   Non-persistent HTTP
    -   지속적이지 않은 HTTP 통신
    -   하나의 object를 가져오고 나서 connection 종료
    -   여러개의 object를 불러오려면 여러개의 connection이 필요 -> 시간 증가
    -   Object 마다 2 RTTs 필요
-   Persistent HTTP
    -   지속적인 HTTP 통신
    -   여러개의 object를 하나의 connection으로 가져온다
    -   연결이 맺어지면 서버가 connection을 열어둔다
    -   이후 요청부터 열린 connection으로 메세지를 주고 받는다 -> 효율적
-   RTT - Round Trip Delay

    -   Small packet을 보내고 응답이 돌아오는데 걸리는 시간
    -   Small packet을 사용해 Transmission, Processing delay는 거의 없다
    -   Propagation, Queueing delay 측정하여 얼마나 거리가 떨어져있는지, 네트워크에 얼마나 많은 트래픽이 있는지를 관찰하는데 사용
    -   서버로 요청하기 전에 해당 서버로 요청 가능한지 확인하기 위한 RTT가 한 번 존재

-   HTTP request message 형식

    -   ASCII (human-readable format) 사용
    -   Request line(GET, POST, HEAD commands)
    -   Header lines (Host, Connection, …)

-   HTTP response message 형식

    -   Status line
    -   Header lines
    -   Contents (Requested HTML file)

-   HTTP response status code
    -   200번대 - OK
    -   300번대 - Redirection
    -   400번대 - 잘못된 요청
    -   500번대 - 서버 오류
