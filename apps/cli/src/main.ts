import { greet } from '@ts-monorepo/core';

const main = (): void => {
    const greeting = greet('Chintu');
    console.log(greeting);
};

main();
