class Queue{
  constructor(){
    this.items = [];
  }

  enqueue(element){
    this.items.push(element)
  }

  dequeue(){
    return this.items.shift()
  }

  peek(){
    if(!this.isEmpty()){
      return this.items[0]
    }else{
      return null
    }
  }

  isEmpty(){
    if(this.items.length === 0){
      return true
    }
    return false
  }

  size(){
    return this.items.length
  }

  print(){
    console.log(this.items.toString())
  }
}

const queue = new Queue();
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.print()

queue.dequeue()
queue.print()

queue.peek();


