import { App } from './app';

// Enable Hot Module Replacement
if (module.hot) {
  module.hot.accept(() => {
    new App();
  });
}

new App();
