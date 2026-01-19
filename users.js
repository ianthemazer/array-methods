const users = [
    { firstName: "Alice", lastName: "Johnson", points: 120 },
    { firstName: "Bob", lastName: "Smith", points: 99 },
    { firstName: "Charlie", lastName: "Brown", points: 180 }
];

const userStatus = users.map(user => {
    const membershipStatus = user.points >= 100 ? "Premium" : "Standard";
    const fullName = `${user.firstName} ${user.lastName}`;
    return { fullName, membershipStatus };
});

console.log(userStatus);