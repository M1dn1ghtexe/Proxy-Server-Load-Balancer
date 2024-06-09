const http=require('http')
const roundRobin = require('./roundRobin')
const leastConnections=require('./leastConnections')
const priorityQ=require('./priorityQueue')
const pq=require('./MinHeap')
const serverConfig=require('./config.json').servers


const priorityQueue=new pq()

const servers=serverConfig.map(server=>({
	...server,
	priority:0
}))

const loadBalancingAlgorithm='priorityQueue'

if(loadBalancingAlgorithm==='priorityQueue'){
	let i=0;
	while (i<servers.length) {
		
		priorityQueue.enqueue(servers[i])
		i++
		
	}
}

const proxy=http.createServer((req,res)=>{

	switch (loadBalancingAlgorithm) {
		case 'roundRobin': roundRobin(servers,req,res)
			
			break;
	
		case 'leastConnectionsSimple': leastConnections(servers,req,res)
			break;
		
	    case 'priorityQueue':  priorityQ(req,res,priorityQueue)

		default:
			break;
	}

})


proxy.listen(3000,()=>{
	console.log('proxy activated');
})
