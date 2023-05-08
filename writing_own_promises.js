function waitThreeSeconds() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
    });
}

waitThreeSeconds()
    .then(() => console.log("ALL DONE!"))
    .catch(() => console.log("ERROR!"))

console.log("STILL WAITING!");