console.log("ts works");
const arrowFunction = (hey, yo) => {
    console.log(hey);
};
arrowFunction("hey", 23);
const async = async () => {
    try {
        let result = await console.log("hey");
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
};
