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

<br></br>

### Cookie

-   사이트에 첫 접속 했을때 받아오는 랜덤한 문자 값

-   HTTP message가 state를 가질 수 있게 해준다
-   서버가 response message의 header line에 쿠키를 넣어서 보내주면 클라가 다음 request 부터 header line에 쿠키를 넣어서 요청
-   쿠키 파일은 유저의 하드디스크에 저장되어 나중에 웹사이트에 접속할 때 디스크에서 쿠키를 불러와 요청

<br></br>

### Web Cache (Proxy Server)

-   매번 origin server에게 데이터를 받아오면 요청에 대한 응답 시간이 길어지기 때문에 origin server보다 가까운 위치에 proxy server(가짜 서버)를 둔다

-   Proxy server는 origin server의 복사본을 갖고 있다
-   첫 접속 시 proxy server가 origin server의 데이터를 불러와 카피본을 저장하고 이후 클라의 동일한 요청은 proxy server가 응답
-   Origin server의 데이터가 자주 바뀌지 않는 컨텐츠에 유용
-   Access link의 트래픽 감소로 클라의 요청에 대한 응답 시간을 줄이기 위해서 사용
-   Conditional GET

    -   캐시가 현재 최신 버전이면 original contents object를 반환하지 않고 데이터가 바뀌지 않았다고 알려주는 상태값 304(not modified)를 반환
    -   HTTP request를 보낼때 헤더에 If-modified-since: {$date}를 넣어 요청

    -   해당 값을 참고하여 상태값 304를 반환하거나 original content를 반환

<br></br>

### DNS - Domain name system

-   이름을 중심으로 대응되는 다양한 정보를 제공해주는 체계

-   사람은 이름을 더 잘 기억하기 때문에 이름을 중심으로 컴퓨터가 사용하는 IP 주소를
    매핑해주기 위해 사용
-   서버에 요청하기 위해서는 서버를 식별할 수 있는 IP 주소가 필요

-   DNS 서비스

    -   Hostname to IP address translation (A, AAAA) - Host name에 대응되는 IP 주소 변환
    -   Host aliasing (CNAME)
    -   Mail server aliasing (MX)
    -   Load distribution - 여러개의 IP 주소를 하나의 이름으로 대응

-   DNS 구조

    -   많은 서버의 이름이 계층적인 구조로 분산된 데이터베이스에 구현되어 있다

    -   중앙화된 DNS를 사용하지 않는 이유
        -   중앙 서버가 다운될 경우 전체 서비스가 마비
        -   트래픽 분산
        -   거리를 줄이기 위해

-   DNS의 계층적인 구조

    -   Root

    -   TLD - Top Level Domain
        -   ccTLD (country code TLD): kr, jp, cn, …
        -   gTLD (generic TLD): org, net, com, …
        -   Com DNS sever, org DNS server 등이 있고 이 서버들은 amazon.com, yahoo.com 등의 자신의 하위 계층의 정보를 알고 있다
    -   Authoritative DNS server
        -   기관의 DNS server
        -   기관 안에 어떤 컴퓨터가 존재하는지, 실제 컴퓨터들의 IP 주소에 대한 정보를 알고 있다
        -   기관의 hostname과 이에 대응되는 IP 주소를 유지, 관리
    -   Local DNS name server
        -   Name-to-address translation pair의 캐시 정보를 갖고 있다
        -   프록시 서버의 역할

-   DNS name resolution

    -   Domain에 대한 IP 주소를 가져오는 과정
    -   Iterative query
        -   ![Iterative query](https://user-images.githubusercontent.com/35136024/159916483-14cf9105-07d5-43a0-8c28-1e5c04c0e0b2.png)
    -   Recursive query
        -   상위 계층에 부담
        -   ![Recursive query](https://user-images.githubusercontent.com/35136024/159916576-5d9fa556-9721-4316-ad87-28638d48ff63.png)

-   Cache
    -   Name server의 매핑 정보를 알게되면 해당 정보를 캐싱
    -   일정 TTL (유효 시간 - time to live)을 지닌다
    -   IP 주소가 바뀌거나 했을때 update 됐다고 알려주는 프로토콜이 존재
