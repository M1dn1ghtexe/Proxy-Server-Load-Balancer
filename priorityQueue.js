const httpProxy=require('http-proxy')
const proxy=httpProxy.createProxyServer({})

const priorityQ=(req,res,priorityQueue)=>{


	let server=priorityQueue.peak()
	
	priorityQueue.updateHighestPriority()

	proxy.web(req,res,{target:`http://${server.host}:${server.port}`})

	res.on('finish',()=>{

		priorityQueue.updateAfterRequestDone(server)
	})

}

module.exports=priorityQ