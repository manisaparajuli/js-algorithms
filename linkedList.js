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

  prepend(value){    //adding elements at start of the list
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  append(value){  //adding elements at end of the list
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