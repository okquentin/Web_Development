#### HTTP And Client-Server Model

- HTML Files are hosted on a server
- A client can request these files through the HTTP (HyperText Transfer Protocol)

#### Request/Response Model
- Method
- Uniform Resource Identifier (URI)
  - / is a file path
  - // is a protocol
  - /// is a protocol and a file path
- Header
- Body of response

#### HTTP Methods
- GET: Obtaining the HTML File
- POST: Sending a request to the Web server (e.g., clicking a button)
- PUT: Idempotent update resource on server
- DELETE

Item Potency: When you repeat an action, nothing changes after the first request

#### HTTP Security
- Protocol uses plaintext communication, inherently insecure
- HTTP packets can be easily intercepted
- HTTP servers can be impersonated by "spoofing servers"
- Solution? HTTPS

#### HTTPS
- Encrypted form of HTTP protocol
  - (Ex) Usernames and passwords entered into a website can not be viewed by packet sniffing on the client's network
- Servers trying to impersonate another server will be flagged

#### Uniform Resource Identifier
- (Ex)  `https://www.amazon.com/How-Write-One-Song-Loving/dp/B08DL33RQ1/ref=sr_1_1?crid=3RPQQ9UVBWP9Y&keywords=how+write+one+song+loving&qid=1695993863&s=books&sprefix=how+write+one+song+loving%2C`
  - Protocol: (Ex) https://
  - Domain name: (Ex) `www.amazon.com`
  - Path: (Ex) /How-Write-One-Song-Loving/dp/B08DL33RQ1
  - Query Parameters

#### Telnet
- Runs in the background of web browser
- Requests download of HTTP to Port 80
- DNS resolves domain request to an IP address
- Once connected to the IP, a GET request is issued for the specific page
  - Client Request
  - Server Response Header
  - Server Response

#### Cookies and Cache
- A cookie is a state information that a server sends to a browser
- The browser uses this information to:
  - Determine if a given browser is logged in
  - Personalize the website for a given user
  - Track individuals on the website
- HTTP cache stores a response associated with a request and reuses the stored response for subsequent requests

#### Port Numbers
- HTTP servers use port 80 by default
- HTTPS defaults to port 4432
- Localhost:XXXX
  - Arbitrary, just cant repeat for different processes/apps
  - Can be anywhere from 1000 to 65355