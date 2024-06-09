*This project is currently in progress and is still ongoing.

A proxy server is a powerful tool that acts as an intermediary between a client and a destination server, allowing for enhanced security and improved performance. This proxy server specifically utilizes three load balancing algorithms/methods to efficiently distribute incoming traffic among servers listed in the config.json file :

- priority queue method ( using Min Heap Data Structure ) ( O log n)  based on the priority of the server ( lower priority == lower connections so we should choose the server with the lower priority ) 
- the round robin algorithm
- least connections method (O n log n with the best sorting algorithm ) 

The priority queue method allows administrators to assign priority levels to servers in the config.json file, ensuring that requests are first directed to servers with higher priority before moving on to lower-priority servers. This can be especially useful for ensuring that critical servers receive traffic before less critical ones.

The round robin algorithm is a simple method that evenly distributes requests to each server in turn, preventing any single server from becoming overloaded. 

The least connections method, on the other hand, analyzes the number of active connections on each server and directs new requests to the server with the fewest connections, helping to distribute the load more evenly. (O n log n with the best sorting algorithm ).


