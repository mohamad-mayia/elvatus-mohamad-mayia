export const calculateNumberPages = (totalNumberItems, numberItemsInPage) => {
    var numberPages = Math.floor(totalNumberItems / numberItemsInPage);
    if (totalNumberItems % numberItemsInPage !== 0) {
        numberPages += 1;
    }
    return numberPages;
};
export const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export const analyser = (obj) => {
    const temp = Object.entries(obj);
    return `${temp[0][0]} Level ${temp[0][1]}`
}
export const summaryHelper = {
    first: ["salary", "industry", "years_of_experience"],
    second: ["major", "career_level", "gpa"]
}

