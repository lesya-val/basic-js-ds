const { NotImplementedError } = require('../extensions/index.js');

class Node {
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}

class BinarySearchTree {
  constructor() {
	this.head = null;
  }

  root() {
    return this.head
  }

  add(data) {
    const newNode = new Node(data);
	if (!this.head) {
		this.head = newNode;
		return;
	}

	let currentNode = this.head;

	while (currentNode) {
		if (newNode.data < currentNode.data) {
			if (!currentNode.left) {
				currentNode.left = newNode;
				return;
			}
			currentNode = currentNode.left;
		} else {
			if (!currentNode.right) {
				currentNode.right = newNode;
				return;
			}
			currentNode = currentNode.right;
		}
	}
  }

  searchNode(node, data) {
	if (!node) {
		return null;
	} else if (data < node.data) {
		return this.searchNode(node.left, data);
	} else if (data > node.data) {
		return this.searchNode(node.right, data);
	} else {
		return node;
	}
  }

  has(data) {
    return this.searchNode(this.head, data) != null
  }

  find(data) {
    return this.searchNode(this.head, data)
  }

  remove(data) {
	if (!this.has(data)) {
		return;
	}
    this.head =  this.removeNode(this.head, data);
  }

  removeNode(node, data) {
	if (node === null) {
		return null;
	} else if (data < node.data) {
		node.left = this.removeNode(node.left, data);
		return node;
	} else if (data > node.data) {
		node.right = this.removeNode(node.right, data);
		return node;
	} else {
		if (node.left === null && node.right === null) {
			node = null;
			return node;
		}

		if (node.left === null) {
			node = node.right;
			return node;
		} else if (node.right === null) {
			node = node.left;
			return node;
		}
	
		let maxNode = this.findMaxNode(node.left);
		node.left = this.removeNode(node.left, maxNode.data);
		return node;
	}
  }

  findMaxNode(node) {
	while(node.right != null) {
		node = node.right
	}
	return node;
  }

  min() {
    if (this.head === null) {
		return null;
	}

	let node = this.head;
	while (node.left != null) {
		node = node.left;
	}
	return node.data;
  }

  max() {
    if (this.head === null) {
		return null;
	}

	let node = this.head;
	while (node.right != null) {
		node = node.right;
	}
	return node.data;
  }
}

module.exports = {
  BinarySearchTree
};