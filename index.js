import LinkedList from "./linked_list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("dragon");

// Should log the node at the head (dragon)
console.log(list.head());

// Should log the node at the tail (turtle)
console.log(list.tail());

// Should log the node at index 3 (parrot)
console.log(list.at(3));

// Should log
console.log(`turtle is currently in the list: ${list.contains("turtle")}`);
list.pop();
console.log(`turtle is currently in the list: ${list.contains("turtle")}`);

console.log(`cat is at index: ${list.find("cat")}\n`);

list.insertAt("bison", 3);
console.log("List after inserting bison: ");
console.log(list.toString() + "\n");

list.removeAt(3);
console.log("List after remove node at index 3 (bison)");
console.log(list.toString() + "\n");

list.append("turtle");
list.removeAt(0);
console.log('List after removing node at 0 (dragon) and appending "turtle"');
console.log(list.toString() + "\n");
