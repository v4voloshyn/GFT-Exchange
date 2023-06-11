const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
const dateNow = new Date(Date.now());
const currentDate = dateNow.toLocaleDateString('en-US', options);

export { currentDate };
