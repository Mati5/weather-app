export const checkValidity = (value, rules) => {
    let validationMessage = {
        isValid: true,
        message: ''
    }

    if(rules.required) {
        validationMessage.isValid = value.trim() !== '' && validationMessage.isValid;

        if(value.trim() === '' && value.length>0) {
            validationMessage.message += 'Podano puste znaki.';
        }
    }

    if(rules.isNotNumber) {
        const pattern = /^[\s\p{L}]+$/u;

        if(!pattern.test(value) && value.length>0) {
            validationMessage.message += 'Nazwa miasta może zawierać tylko litery.';
        }

        validationMessage.isValid = pattern.test(value) && validationMessage.isValid;
    }

    if(value.length === 0) {
        validationMessage.message = '';
    }

    return validationMessage;
}

export const countAverageTemp = (weatherList) => {
    let sum = 0;
    let average = 0;
    let quantity = 0;

    for(let partTemp of weatherList.list) {
        sum += partTemp.main.temp;
        quantity++; 
    }

    average = (sum/quantity).toFixed(1);
    weatherList.averageTemp = average;

    return weatherList;
}

export const convertCelsiusToFahrenheit = (tempC) => {
    return ((tempC * 1.8) + 32).toFixed(1);
}

export const convertFahrenheitToCelsius = (tempF) => {
    return ((tempF - 32) / 1.8).toFixed(1);
}