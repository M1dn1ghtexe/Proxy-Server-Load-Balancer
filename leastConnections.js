const httpProxy=require('http-proxy')
const proxy=httpProxy.createProxyServer({})

const leastConnections=(servers,req,res)=>{

	servers.sort((a,b)=>a.connections-b.connections)
	var highestPriority=servers[0]
	highestPriority.connections++ 
	proxy.web(req,res,{target:`http://${highestPriority.host}:${highestPriority.port}`})

	res.on('finish',()=>{
		highestPriority.connections--
		
		
	})

}

module.exports=leastConnections