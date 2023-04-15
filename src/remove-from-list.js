const { NotImplementedError } = require('../extensions/index.js');

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	delete(value) {
		if (!this.head) {
			return null;
		}
		
		let deletedNode = null;

		while (this.head && this.head.value === value) {
			deletedNode = this.head;
			this.head = this.head.next;
		}

		let currentNode = this.head;
		
		if (currentNode != null) {
			while (currentNode.next) {
				if (currentNode.next.value === value) {
					deletedNode = currentNode.next;
					currentNode.next = currentNode.next.next;
				} else {
					currentNode = currentNode.next;
				}
			}
		}

		if (this.tail?.value === value) {
			this.tail = currentNode;
		}

		return deletedNode;
	}
}

function removeKFromList(l, k) {
	let linkedList = new LinkedList();
	linkedList.head = l;
	linkedList.delete(k);
	return linkedList.head;
}

module.exports = {
  removeKFromList
};
