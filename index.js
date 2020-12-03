const inOrder = (currentNode) => {
    if (currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if (currentNode.right) {
        inOrder(currentNode.right)
    }
}

const findOrAdd = (root, newNode) => {
    if(root.data == newNode.data){
        return true
      }
      if(newNode.data < root.data){
        if(root.left){
          return findOrAdd(root.left, newNode)
        } else {
          return root.left = newNode
        }
      }
    
      if(newNode.data > root.data){
        if(root.right){
          return findOrAdd(root.right, newNode)
        } else {
          return root.right = newNode
        }
      }
}

const max = (current) => {
    if (current.right) {
        return max(current.right) 
    } else {
        return current
    }
}

const min = (current) => {
    if (current.left) {
        return min(current.left) 
    } else {
        return current
    }
}