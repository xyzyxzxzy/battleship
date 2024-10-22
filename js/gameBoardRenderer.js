class GameBoardRenderer {
    #letters;

    constructor(containerId, board) {
        this.#letters = [
            'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М',
            'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ',
            'Ы', 'Ь', 'Э', 'Ю', 'Я'
        ];
        this.container = document.getElementById(containerId);
        this.board = board;
    }

    // Main method to render the game board
    render() {
        this.container.innerHTML = '';
        this.renderHeaderRow();
        this.renderBoard();
    }

    // Method to render the header for the horizontal axis
    renderHeaderRow() {
        const headerRow = this.createRow();

        for (let j = -1; j < this.board[0].length; j++) {
            const cell = this.createCell('header', j >= 0 ? this.#letters[j] : '');
            headerRow.appendChild(cell);
        }

        this.container.appendChild(headerRow); // Add the header row to the container
    }

    // Method to render the main board
    renderBoard() {
        for (let i = 0; i < this.board.length; i++) {
            const row = this.createRow();
            const rowHeader = this.createCell('header', i + 1);
            row.appendChild(rowHeader);

            for (let j = 0; j < this.board[i].length; j++) {
                const cell = this.createCell('', '', this.board[i][j] !== 0);
                row.appendChild(cell);
            }
            this.container.appendChild(row);
        }
    }

    createRow() {
        const row = document.createElement('div');
        row.className = 'row';

        return row;
    }

    createCell(className, textContent = '', isOccupied = false) {
        const cell = document.createElement('div');
        cell.className = `cell ${className}`;
        cell.textContent = textContent;
        if (isOccupied) {
            cell.classList.add('occupied');
        }

        return cell;
    }
}

export { GameBoardRenderer };
