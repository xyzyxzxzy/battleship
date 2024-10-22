class BattleshipManager {
    constructor(n, m) {
        this.n = n;
        this.m = m;
        this.matrix = this.generateEmptyMatrix(n, m); // Generate empty matrix
    }

    // Method to generate an empty matrix
    generateEmptyMatrix(n, m) {
        let matrix = [];
        for (let i = 0; i < n; i++) {
            matrix.push(new Array(m).fill(0));
        }

        return matrix;
    }

    // Check that the ship does not go out of bounds of the matrix
    isWithinBounds(x, y, shipLength, horizontal) {
        return horizontal ? (y + shipLength <= this.m) : (x + shipLength <= this.n);
    }

    // Check that there is at least one free cell around the ship
    isSurroundingAreaFree(x, y, shipLength, horizontal) {
        for (let i = -1; i <= (horizontal ? 1 : shipLength); i++) {
            for (let j = -1; j <= (horizontal ? shipLength : 1); j++) {
                let checkX = x + i; // Current x value for checking
                let checkY = y + j; // Current y value for checking

                // Check that the cell is within the bounds of the matrix
                if (this.isWithinMatrix(checkX, checkY)) {
                    if (this.matrix[checkX][checkY] !== 0) return false; // If the cell is occupied
                }
            }
        }

        return true; // All surrounding cells are free
    }

    // Check if the cell is within the bounds of the matrix
    isWithinMatrix(x, y) {
        return x >= 0 && x < this.n && y >= 0 && y < this.m;
    }

    // Check that the space for the ship is free and does not go out of bounds
    isSpaceAvailable(x, y, shipLength, horizontal) {
        return this.isWithinBounds(x, y, shipLength, horizontal) &&
            this.isSurroundingAreaFree(x, y, shipLength, horizontal);
    }

    // Place a ship on the board
    placeShip(shipLength) {
        let placed = false;

        while (!placed) {
            let x = Math.floor(Math.random() * this.n);
            let y = Math.floor(Math.random() * this.m);
            let horizontal = Math.random() < 0.5;

            if (this.isSpaceAvailable(x, y, shipLength, horizontal)) {
                this.setShip(x, y, shipLength, horizontal); // Actual placement
                placed = true; // Successful placement
            }
        }
    }

    // Method for the actual placement of the ship on the matrix
    setShip(x, y, shipLength, horizontal) {
        if (horizontal) {
            for (let i = 0; i < shipLength; i++) {
                this.matrix[x][y + i] = 1; // Place horizontally
            }
        } else {
            for (let i = 0; i < shipLength; i++) {
                this.matrix[x + i][y] = 1; // Place vertically
            }
        }
    }

    // Method to place all ships
    placeShips() {
        // 3 ships of size 1x1
        for (let i = 0; i < 3; i++) {
            this.placeShip(1);
        }

        // 2 ships of size 3x1
        for (let i = 0; i < 2; i++) {
            this.placeShip(3);
        }

        // 1 ship of size 6x1
        this.placeShip(6);

        return this.matrix;
    }
}

export { BattleshipManager };
