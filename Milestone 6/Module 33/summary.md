## Internet
- human access information online through domain name
- web browser interact though internet protocol addresses

<b>IP address:</b> a unique address that identifies a device and website on the internet or a local network

<b>DNS:</b> domain name system is the phone-book of internet. it translates domain names to ip addresses. so browsers can load internet resources.

<b>Small Flow of DNS Resolution:</b> 
![dns flow](../../images/dns_flow.png)

<b>HTTP:</b> hyper text transfer protocol. protocol for fetching resources. https - hyper text transfer protocol secure.

<b>flow-diagram</b> of user request -
1. user visits ```www.example.com```
2. dns resolves it to ```192.168.1.1```
3. the browser sends a request to ```192.168.1.1```
4. the server fetches data from the database
5. the response is sent back to the user

<br>

<b>API:</b> Application Programming Interface
- it's a set of rules and protocols.
- a bridge that allows two application to communicate
- api is the interface that handles requests (client) and responses (server)
- methods: ```GET, POST, PUT, and DELETE```
- data formats: JSON or XML
- authentication: some apis require authentication ```api keys```