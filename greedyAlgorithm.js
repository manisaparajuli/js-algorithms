function bulbs(A) {
    let cost = 0;

    for (let i = 0; i < A.length; i++) {
        // Consider the effect of prior toggles
        if (cost % 2 === 0) {
            A[i] = 1; // Toggle the current bulb
        }

        // If the bulb is off, we need to toggle it
        if (A[i] === 0) {
            cost += 1; // Increment the toggle count
        }
    }

    return cost;
}

console.log(bulbs([0, 1, 0, 1, 1, 0, 0])); // Expected output: 4