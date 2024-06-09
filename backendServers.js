const http=require('http')
const serverConfig=require('./config.json').servers

const createServer=(host,port,timeout)=>{
	http.createServer((req,res)=>{
		const timeoutId = setTimeout(() => {
			res.writeHead(200);
			res.end(`server response from port ${port} `);
		}, timeout);
	
		res.on('finish', () => {
		  clearTimeout(timeoutId);
		});
		
	}).listen(port,host,()=>{
		console.log('server listening at' +port );
	})
}

serverConfig.forEach(server=>createServer(server.host,server.port))
