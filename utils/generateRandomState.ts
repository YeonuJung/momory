
export function generateRandomState() {
    let state = '';

    for (let i = 0; i < 32; i++) { // 32번 반복
        const randomHex = Math.floor(Math.random() * 16).toString(16); // 16진수 변환
        state += randomHex;
    }

    return state;
}