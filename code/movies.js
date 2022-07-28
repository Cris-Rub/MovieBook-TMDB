class Movies{
    constructor() {
      this.queue = []
    }
  
    enqueue (element) {
      this.queue.push(element)
      return this.queue
    }
  
    dequeue () {
      return this.queue.shift()
    }
  
    peek (){
      return this.queue[0]
    }
  
    front(){
      return this.queue[0]
    }
  
    back(){
      return this.queue[this.queue.length - 1]
    }
  
    size(){
      return this.queue.length
    }
  
    print(){
      console.log(this.queue)
    }
  
    isEmpty(){
      return this.queue.length === 0
    }
  
    clear(){
      this.queue = []
    }
  
  }
  
//   let queue = new Movies()
  
//   console.log(queue.isEmpty());
//   console.log(queue.enqueue('Azul'));
//   console.log(queue.addTo('Azul', 'hola'));
//   console.log(queue.enqueue('Esmeralda'));
//   console.log(queue.enqueue('Verde'));
//   console.log(queue.enqueue('Amarillo'));
//   console.log(queue.enqueue('Rojo'));
//   queue.print();
//   console.log(queue.size());
//   console.log(queue.dequeue());
//   console.log(queue.dequeue());
//   queue.print();
//   console.log(queue.peek());
//   console.log(queue.size());
//   console.log(queue.front());
//   console.log(queue.back());
//   console.log(queue.isEmpty());
//   queue.clear();
//   console.log(queue.isEmpty());
  