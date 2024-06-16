class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  getSize(){
    return this.size
  }

  prepend(value){    //adding elements at start of the list => 0(1)
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  append(value){  //adding elements at end of the list => 0(n)
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  } 

  insert(value, index){
    if (index < 0 || index > this.size){
      return 
    }else if(index === 0){
      this.prepend(value)
    }else{
      const node = new Node()
      let prev = this.head
      for(let i =0; i< index-1; i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size ++
    }
  }

  removedFrom(index){
    if(index < 0 || index >= this.size){
      return null
    }
    let removedNode 
    if(index === 0){
      removedNode = this.head
      this.head = this.head.next
    }
    this.size--
    return removedNode.value
  }

  print(){
    if(this.isEmpty()){
      console.log("The list is empty")
    }else{
      let curr = this.head
      let listValues = ""
      while(curr){
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues)
    }
  }
}

const list = new LinkedList()
console.log("List is empty?", list.isEmpty())
console.log("List size?", list.getSize())
list.print()
list.prepend(10)
list.print()
list.prepend(20)
list.prepend(30)
list.print()
list.append(1)
list.append(2)
list.print()
list.insert(8, 0)
list.insert(7, 0)
list.print()