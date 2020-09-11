const peopleInParty = ['😀', '😒', '😕', '😣', '🥺', '😭', '😭', '🤬', '😱', '🤪', '😘', '😢', '😪', '🤮','😵', '🥱', '😧', '😩'];

const noAceptedPeople = ['🥺', '😵'];

const aceptedPeople = peopleInParty.filter(e => !noAceptedPeople.includes(e));

console.log(aceptedPeople);
