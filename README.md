# Not bad test task
Solution was built using next.js and mui, no additional libraries was used.

As the data is static it made the most sense to use next.js getStaticProps, so whole website will be ready on build time, which helps a lot with first load. But in real life case data would come from api and it will not be a good choice to use getStaticProps, as we want up to date data on every request, because the game stats may change pretty fast.

Currently Game blocks are very responsive, will work for different screen sizes, when images are loaded, data is not jumping around as skeletons are built for it beforehand, so everything looks smooth. For search we also use debounce, as it is considered a good practise in real life case, here it would be okay without it as well, but just decided to add it. For images we use next image, as it does it's own optimization for faster load time.

Components are mostly done as "dumb" components for easy testing and better readibility.
Added some basic tests as well, unfortunately didn't have time to write in-depth tests.

Also there are small differences with figma in some cases, used my own judgment in that case, but overall followed strictly figma designs.

What can still be improved:
* If the data will be fetched through api, it would be nice to use observables to fetch additional data based on components visibility on user screen, which helps with improving load time and overall user experience. 
* Definitely covering all components with tests and add E2E tests with cypress for example

To run simply write:
```
yarn dev
```
And to run tests
```
yarn test
```