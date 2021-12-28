const getRandomPreflopHand =  () => {

    const cards = [
        '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ac',
        '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ad',
        '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'Ah',
    ];


    const firstRandomCard = cards[Math.floor(Math.random() * cards.length)];
    const secondRandomCard = cards[Math.floor(Math.random() * cards.length)];


    const table6SeatsPositions = ['btn', 'utg', 'hj', 'co'];

    const randomSeat = table6SeatsPositions[Math.floor(Math.random() * table6SeatsPositions.length)];

    const sameRank = firstRandomCard.slice(0, 1) === secondRandomCard.slice(0, 1);
    const sameSuit = firstRandomCard.slice(1, 2) === secondRandomCard.slice(1, 2);

    const ranks = firstRandomCard.slice(0, 1).concat(secondRandomCard.slice(0, 1));


    const hand = sameRank ? ranks : ranks.concat(sameSuit ? 's' : 'o');

    return `Hand: ${hand} Seat: ${randomSeat}`;
}

console.log(getRandomPreflopHand());

