class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     *
    /**
     * ["A","B","C","D"]
     * ["S","A","A","T"]
     * ["A","C","A","E"]
     */

    isLetterExist(letter: string, word: string) {
        for (let index = 0; index < word.length; index++) {
            if (word[index] === letter) return true;
        }
        return false;
    }
    exist(board: string[][], word: string): boolean {
        const visited = new Set<string>();
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (this.isLetterExist(board[row][col], word) === true) {
                    const backtrack = (index: number, row: number, col: number) => {
                        const cord = `${row},${col}`;
                        visited.add(cord);

                        if (index === word.length - 1) return true;
                        if (board[row][col] !== word[index]) {
                            visited.delete(cord);
                            return false;
                        }

                        if (row - 1 >= 0 && row - 1 < board.length) {
                            if (board[row - 1][col] === word[index + 1] && !visited.has(`${row - 1},${col}`)) {
                                const isTrue = backtrack(index + 1, row - 1, col);
                                if (isTrue === true) return true;

                            }
                        }

                        if (row + 1 >= 0 && row + 1 < board.length) {
                            if (board[row + 1][col] === word[index + 1] && !visited.has(`${row + 1},${col}`)) {
                                const isTrue = backtrack(index + 1, row + 1, col);
                                if (isTrue === true) return true;
                            }
                        }

                        if (col - 1 >= 0 && col - 1 < board[row].length) {
                            if (board[row][col - 1] === word[index + 1] && !visited.has(`${row},${col - 1}`)) {
                                const isTrue = backtrack(index + 1, row, col - 1);
                                if (isTrue === true) return true;
                            }
                        }

                        if (col + 1 >= 0 && col + 1 < board[row].length) {
                            if (board[row][col + 1] === word[index + 1] && !visited.has(`${row},${col + 1}`)) {
                                const isTrue = backtrack(index + 1, row, col + 1);
                                if (isTrue === true) return true;
                            }
                        }

                        visited.delete(cord);
                    }
                    const isTrue = backtrack(0, row, col);
                    if (isTrue === true) return true;
                }
            }
        }

        return false;
    }
}
