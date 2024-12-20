class PriorityNode {
    constructor(name, email, preference, role, priorityLevel) {
      this.name = name;
      this.email = email;
      this.preference = preference;
      this.role = role;
      this.priorityLevel = priorityLevel;
      this.left = null;
      this.right = null;
    }
  }
  
  let root = null;
  
  // Helper function to insert into the priority tree
  function insertNode(root, node) {
    if (root === null) return node;
  
    if (node.priorityLevel < root.priorityLevel) {
      root.left = insertNode(root.left, node);
    } else {
      root.right = insertNode(root.right, node);
    }
  
    return root;
  }
  
  // Helper function to perform in-order traversal
  function inOrderTraversal(node, result) {
    if (node !== null) {
      inOrderTraversal(node.left, result);
      result.push({
        name: node.name,
        email: node.email,
        preference: node.preference,
        role: node.role,
        priorityLevel: node.priorityLevel
      });
      inOrderTraversal(node.right, result);
    }
  }
  
  // Get attendees sorted by priority
  exports.getPriorityAttendees = (req, res) => {
    const result = [];
    inOrderTraversal(root, result);
    res.status(200).json({ success: true, attendees: result });
  };
  
  // Add a priority attendee
  exports.addPriorityAttendee = (req, res) => {
    const { name, email, preference, role, priorityLevel } = req.body;
  
    if (!name || !email || !preference || !role || priorityLevel === undefined) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const newNode = new PriorityNode(name, email, preference, role, priorityLevel);
    root = insertNode(root, newNode);
  
    res.status(201).json({ success: true, message: 'Priority attendee added successfully' });
  };
  