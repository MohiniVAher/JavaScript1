require(stack);

function Node(value)
{
    this.value = value;
    this.nextNode = null;
}

//const firstNode = new Node(5);
//const secondNode = new Node(6);

//console.log(firstNode);

function LinkedList()
{
    this.start = null;
    this.add = function(value){
        const currentNode = new Node(value);
        currentNode.nextNode = this.start;
        this.start = currentNode;
    }
}

const LinkedList = new LinkedList();
LinkedList.add(5);
LinkedList.add(6);