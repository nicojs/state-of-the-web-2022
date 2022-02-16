## Unit and integration tests

- ![Karma](/img/icons/karma.png)<!-- .element: class="img-inline-text" --> test runner for _unit_ and _integration tests_
  - Use a _real_ browser
  - See karma-runner.github.io/
- ![Jasmine](/img/icons/jasmine.svg)<!-- .element: class="img-inline-text" --> or ![](/img/icons/mocha.svg) <!-- .element class="img-inline-text" --> as test framework
  - Behavior Driven Development (BDD)
    - Write specifications using `describe` and `it`
- ![StrykerJS](/img/icons/stryker.svg)<!-- .element: class="img-inline-text" --> StrykerJS is our mutation testing framework
  - Spot missing test cases in unit and integration tests with mutation testing.
  - See https://stryker-mutator.io

---

### Jest

You can use [![Jest](/img/icons/jest.svg)<!-- .element: class="img-inline-text" --> Jest](https://jestjs.io/) <!-- .element target="_blank" --> instead of karma/mocha/jasmine

- Runs tests in NodeJS instead of a browser
- Faster, no need for webpack
- Has a rich feature set, including mocking, snapshots and code coverage.
- Is opinionated.
- Uses [JSDOM](https://github.com/jsdom/jsdom) as a mock browser
  - Generally harder to debug, because you cannot see the application.
  - Impossible to test CSS and advanced UI
    - For example: page scroll, animations, button colors, etc

---

### Test our tests ![StrykerJS](/img/icons/stryker.svg)<!-- .element: class="img-inline-text" -->

Now to test our tests with mutation testing.

<div class="flex">
<div class="col">

Install and init with NPM

```shell
npm i -D @stryker-mutator/core
npx stryker init
```

Fill in the questions

```shell
npx stryker run
```

</div>
<div class="col">

Open the HTML file to see the surviving mutants

<!-- .element class="fragment" data-fragment-index="1" -->

![stryker-greeting.png](/img/stryker-greeting.png)

<!-- .element class="fragment" data-fragment-index="1" -->

</div>
</div>

Now we can improve by adding the missing test cases.

<!-- .element class="fragment" data-fragment-index="2" -->
