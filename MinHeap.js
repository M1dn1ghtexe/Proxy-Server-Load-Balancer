class MinHeap{
	constructor(){

		this.heap=[]
	}

	enqueue(val){
		this.heap.push(val)
		this.heapifyUp()
	}

	dequeue(){

	}
	heapifyUp(){
		var index=this.heap.length-1 

		
		while (Math.floor((index-1)/2)>=0 && this.heap[index].priority<this.heap[Math.floor((index-1)/2)].priority) {
			
			var temp=this.heap[Math.floor((index-1)/2)]
			this.heap[Math.floor((index-1)/2)]=this.heap[index]
			this.heap[index]=temp
			index=Math.floor((index-1)/2)
			
		}
		

	}

	heapifyDown(){

		var toReturn=this.heap[0]
		var changeRoot=this.heap[this.heap.length-1]
		this.heap[0]=changeRoot
		var index=0
		this.heap.pop()	
		

		while (this.heap[index*2+1]) {
			

			var smaller=index*2+1
			
			if(this.heap[index*2+1].priority>this.heap[index*2+2]?.priority){

				smaller=index*2+2
			}

			if(this.heap[index].priority>this.heap[smaller].priority){

				var temp=this.heap[index]
				 this.heap[index]=this.heap[smaller]
				 this.heap[smaller]=temp


			}
			else break
			index=smaller
		}
		return toReturn

	}

	peak(){
		return this.heap[0]
	}

	updateHighestPriority(){


		var highest=this.heap[0]
		highest.priority++

		this.heapifyDownAfterUpdate(0)

	}

	heapifyDownAfterUpdate(index){

		console.log('before heapifyDownAfterUpdate');
		console.log(this.heap);
		console.log('------------------');
		
		while (this.heap[index*2+1]) {
			

			var smaller=index*2+1
			
			if(this.heap[index*2+1].priority>this.heap[index*2+2]?.priority){

				smaller=index*2+2
			}

			if(this.heap[index].priority>this.heap[smaller].priority){

				var temp=this.heap[index]
				 this.heap[index]=this.heap[smaller]
				 this.heap[smaller]=temp


			}
			else break
			index=smaller
		}

		console.log('after heeapifyDownAFterUpdate');
		console.log(this.heap);
		console.log('------------------');

		
		

	}

	updateAfterRequestDone(server){

		// provisoriu 
		let i=0;
		while (i<this.heap.length) {
			
			if(this.heap[i].port===server.port){
				this.heap[i].priority--

				this.heapifyUpAfterUpdate(i)
				break

			}
			i++
		}

		


	}

	heapifyUpAfterUpdate(idx){

		console.log('before heapifyUpAFterUpdte');
		console.log(this.heap);
		console.log('------------------');

		let index=idx
		while (Math.floor((index-1)/2)>=0 && this.heap[index].priority<this.heap[Math.floor((index-1)/2)].priority) {
			
			var temp=this.heap[Math.floor((index-1)/2)]
			this.heap[Math.floor((index-1)/2)]=this.heap[index]
			this.heap[index]=temp
			index=Math.floor((index-1)/2)
			
		}

		console.log('after heapifyUpAFterUpdte');
		console.log(this.heap);
		console.log('------------------');
	
	}





}

module.exports=MinHeap