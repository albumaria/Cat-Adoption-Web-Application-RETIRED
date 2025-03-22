import { faker } from '@faker-js/faker';
import CatEntities from './CatEntities';

const existingNames = new Set(CatEntities.map(cat => cat.name));

const generateUniqueName = (usedNames) => {
    let name;
    do {
        name = faker.person.firstName();
    } while (usedNames.has(name));
    usedNames.add(name);
    return name;
};

const fetchCatImage = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://api.thecatapi.com/v1/images/search", false); // false makes it synchronous
    request.setRequestHeader("x-api-key", "live_vqheiDqxrBRmftyRK83qVlcbmM4fv8PfvvODBg7XLAQ8DQmcWdrVcutiUoMxkPss");
    request.send(null);

    if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        return response[0]?.url || "https://via.placeholder.com/300"; // Default placeholder if no image found
    }

    return "https://via.placeholder.com/300"; // Fallback image
};

const generateDescription = (name, gender, age) => {
    const personalityTraits = [
        "playful and full of energy",
        "calm and affectionate",
        "curious about everything",
        "a little mischievous but very loving",
        "shy at first, but warms up quickly",
        "always looking for a warm lap to sit on",
        "a big talker who loves attention",
        "an independent spirit with a gentle heart",
        "a little clumsy but incredibly sweet",
        "a brave explorer who loves adventure"
    ];

    const trait = faker.helpers.arrayElement(personalityTraits);

    let baseDescription = `${name} is a ${trait} cat. `;

    if (age <= 2) {
        baseDescription += `${gender === "M" ? "He" : "She"} is still very young and loves to play all day long.`;
    } else if (age <= 5) {
        baseDescription += `${gender === "M" ? "He" : "She"} enjoys both playtime and naps, making ${gender === "M" ? "him" : "her"} the perfect companion.`;
    } else if (age <= 10) {
        baseDescription += `${gender === "M" ? "He" : "She"} has a gentle personality and loves cuddles but also appreciates ${gender === "M" ? "his" : "her"} space.`;
    } else {
        baseDescription += `${gender === "M" ? "He" : "She"} is a wise and relaxed cat who enjoys quiet moments and cozy spots.`;
    }

    return baseDescription;
};

const generateRandomCat = (usedNames) => {
    const name = generateUniqueName(usedNames);
    const gender = faker.helpers.arrayElement(["M", "F"]);
    const age = faker.number.int({ min: 1, max: 15 });

    return {
        name,
        gender,
        age,
        weight: parseFloat(faker.number.float({ min: 2.5, max: 8, precision: 0.1 }).toFixed(1)),
        description: generateDescription(name, gender, age),
        image: fetchCatImage()
    };
};

const usedNames = new Set(existingNames);
const ThreadCats = Array.from({ length: 30 }, () => generateRandomCat(usedNames));

export default ThreadCats;
