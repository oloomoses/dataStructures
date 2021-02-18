class Node
  attr_accessor :value, :next_node
  
  def initialize(value, next_node = nil)
	  @value = value
    @next_node = next_node
  end
end

class LinkedList
  #setup head and tail
  def initialize
    @head = nil
    @tail = @head
  end

  def add(number)
    # your code here
    new_node = Node.new(number, nil)
    if @head.nil?
      @head = new_node      
      return
    end
    @tail = @head
    @tail.next_node = Node.new(number, nil)
    @tail = Node.new(number, nil)
  end

  def get(index)
    # your code here
    currentNode = @head
    if @head.next_node == nil
      return @head.value
    end
    counter = 0
    while counter != index 
      currentNode = currentNode.next_node
      counter += 1
    end
    return currentNode.value
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
puts list.get(1)
# => 5
