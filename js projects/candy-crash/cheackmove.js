
import { board } from "./index.js";

const cheackMoveThree = () => {

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 7; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    }

    for (let c = 0; c < 9; c++) {
        for (let r = 0; r < 7; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];
            let candy3 = board[r + 2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    }
    return false;
}

const cheackMoveFour = () => {

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 6; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];
            let candy4 = board[r][c + 3];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    }

    for (let c = 0; c < 9; c++) {
        for (let r = 0; r < 6; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];
            let candy3 = board[r + 2][c];
            let candy4 = board[r + 3][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    }
    return false;
}


const cheackMoveFive = () => {

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 5; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];
            let candy4 = board[r][c + 3];
            let candy5 = board[r][c + 4];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    }

    for (let c = 0; c < 9; c++) {
        for (let r = 0; r < 5; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];
            let candy3 = board[r + 2][c];
            let candy4 = board[r + 3][c];
            let candy5 = board[r + 4][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    }
    return false;
}

export { cheackMoveFive, cheackMoveFour, cheackMoveThree };