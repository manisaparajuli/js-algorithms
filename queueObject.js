class Queue{
  constructor(){
    this.items = {}
    this.rare = 0
    this.front = 0
  }

  enqueue(element){
    this.items[this.rare] = element
    this.rare++
  }

  dequeue(){
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }

  isEmpty(){
    return this.rare - this.front === 0
  }

  peek(){
    return this.items[this.front]
  }

  size(){
    return this.rare - this.front
  }

  print(){
    console.log(this.items)
  }
}

const items = new Queue()
console.log(items.isEmpty())
items.enqueue(1)
items.enqueue(2)
items.enqueue(3)
console.log(items.size())
console.log(items.dequeue())
items.print()