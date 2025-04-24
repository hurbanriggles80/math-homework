function squareRoot(num) {
  if (!Number.isInteger(num)) {
    throw new Error("Input must be an integer.");
  }
  
  const sqrt = Math.sqrt(num);
  return { result: sqrt };
}

// Example usage:
const root = squareRoot(9);
console.log(root.result); // Should log "3.0"
