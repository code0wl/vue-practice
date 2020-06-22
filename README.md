# CodeChallenge project

Time spent ~ 4.5 hours (Monday: 19:30 - 00:10)

What I did differently than normal. Vue is my least used framework compared to React and Angular. I have never used it outside of some personal projects. So I had the docs in hand while writing. One thing I am NOT fully familiar with yet are the best practices within Vue. So I tried to stick as close to the linters as possible.

## BE Stack

- NoSQL json-server from Typicode (github.com/typicode/json-server)
- NodeJS
- Faker for random instance data
- Jest

## FE Stack

- VueJS
- Veux
- Veu Router
- TypeScript
- Sass
- Jest

Normally I would split these projects into two repos. There are pros and cons for doing this, but I personaly think the pros outweigh the cons.
The stack choices I have made coincide with the ones from the company, that is why I picked them.

### Pros

1. **Independent job/release** releasing and maintaining is less made complicated
2. **Less code** means easier to learn and set dedicated developers on it
3. **Smaller scope** Allows for a more focused type of development. Leads to much better collaboration and code reviews as the scope is narrower.
4. **Any frontend** Since the frontend is now decoupled. Any frontend can talk to this backend.

### Cons

1. **Duplicate dependencies** Having to maintain seperate dependencies in both project (a common project would need to be created so both projects could consume)

## Methodologies

- TDD
- PDD (performance driven development)
- Functional mixed with OOP
- Build first (pipeline was done first for rapid development)
- Mock/Stub everything
- Usage of container components
- Avoid testing dumb components as they should not have logic

### How to run

There are two project that have to run. The client and the server.
While in root of the project run the following command:

```bash
npm start
```

### Apps will start at

client: http://localhost:8080
server: http://localhost:4200

### Extras

When I bought dvd in the past, it was awesome to learn they had extra content being delivered with the movies.
As inspiration from this. I decided to include some product extras.

- Threw in Redux for side effects management

### Tools used

- VueJS Chrome dev-tool (performance monitor, veux validation)
- VSCode
- VSCode Vetur plugin

### Todo

Of course time is limited, if I had more time I would have added more mixins. But it's a nice to have since this is a one-off container/feature.

- Debounce on search to avoid premature rerender
- Lazyloading table rows / pagination for large datasets
- Refactor wizard dialog into two components that takes an array of steps
- Made the app a bit nicer with some good ol' styling
- Used html search field that has clear search functionality, but doesn't work on all browsers
- CurrencyFormatting
- Remove all any types
- Of course add more coverage
