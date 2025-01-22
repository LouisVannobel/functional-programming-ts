// Pattern matching

type User =
  | { type: 'admin'; name: string }
  | { type: 'guest'; name?: string };

const userMessage = (user: User): string => {
  if (user.type === 'admin') {
    return `Welcome back admin ${user.name}`;
  } else if (user.type === 'guest') {
    return 'Welcome guest';
  } else {
    return 'Unknown user';
  }
};

console.log(userMessage({ type: 'admin', name: 'Alice' })); // "Welcome back admin Alice"
console.log(userMessage({ type: 'guest' })); // "Welcome guest"
