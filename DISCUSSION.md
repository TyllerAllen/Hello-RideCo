# Discussion Document

Where can we go from here?

## Why this stack?

- **React Native** : 
  - Works across mobile + web.
  - Users may want to add to their list on a PC, but check items off at the store using their phone.

- **Express** :
  - Lightweight and easy to setup for simple apps.

- **Prisma** :
  - Offers full type-safety via generated types.
  - Abstracts away raw SQL queries.

- **SQLite** :
  - Simple, file-based database with zero configuration.

- **Turborepo** :
  - Wanted type-safety across front and back end.
  - UI package provides reusable components if I want to add more apps in the future (e.g Storybook)
  - Keeps everything in one place for users to inspect easily.

## Future Improvements

Developer Tools:

- **Testing** : Implement Jest testing across all apps to ensure reliability.
- **Storybook** : Create a Storybook app to view components and test their robustness.
- **Theme & Components** : Use [React Native Unistyles](https://www.unistyl.es/) to improve DX.
- **EAS** : Use [Expo Application Services](https://expo.dev/eas) for CI/CD, building, updating, publishing, and hosting.

Features:

- **Users** : Allow users to create an account.
- **Lists** : Users may want to have more than one list at a time (Black Friday, Christmas, groceries, etc.).
- **Flyers** : Display and/or link users to local grocery/shopping flyers.
- **AI** :
  - Implement autocomplete suggestions for users (ga -> garlic).
  - Allow users to paste a recipe and have the app extract ingredients into their grocery list.
- **Animations** : Brighten the feel of the app by adding small animations.
  - Could have a confetti splash (or money flying away) animation when a user completes a list.

## Tradeoffs & Scaling

Given the timeline, I chose to use a relatively simple stack given my (mostly frontend) experience. Let's suppose we want to scale this app to millions of users. What might we change about it?

- **SQLite → PostgreSQL** :
  - Scales well with many concurrent users.
  - Works well with Prisma.
- **Express → NestJS** :
  - Feature rich, scalable framework for Node.js.

### Final Thoughts
This project was a great way for me to learn Express, Prisma, and Turborepo, while also showcasing my react native skills. I plan to continue working on this after the RideCo team has reviewed it to continue expanding my knowledge of the full-stack environment.

Thank you for reading :)