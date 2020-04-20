
/**
 * @fun
 * @param a 
 * @param b 
 */
const sum = function (a: number, b: number): number {
    return a + b;
};

class Butterfly {
    name: string = "yueqi"

    test(): number {
        return sum(1, 2)
    }
}

console.log(111);

// export{ sum }
export default Butterfly
