const instanceData = {
    pet: "Fluffy",
    number1: 4,
    number2: 3,
    sentence1: "this is a sentence.",
    sentence2: "Hello World!",
    sentence3: "how are you?"
};

const replacePlaceholders = () => {
    const replacements = [
        { placeholder: "BLANK1", value: instanceData.pet }, 
        { placeholder: "BLANK2", value: instanceData.number1 * instanceData.number2 }, 
        { placeholder: "BLANK3", value: instanceData.number1 / 2 }, 
        { placeholder: "BLANK4", value: Math.pow(instanceData.number2, 3) },
        { placeholder: "BLANK5", value: instanceData.sentence1.charAt(0).toUpperCase() + instanceData.sentence1.slice(1) }, 
        { placeholder: "BLANK6", value: instanceData.sentence2.split('').reverse().join('') }, 
        { placeholder: "BLANK7", value: instanceData.sentence3.toUpperCase().split('').reverse().join('') } 
    ];

    replacements.forEach(({ placeholder, value }) => {
        document.body.innerHTML = document.body.innerHTML.replace(placeholder, value);
    });
};

replacePlaceholders();

