## ractive-routes

Declarative Ractive routing for simplified component-based hierarchies, built upon [page](https://visionmedia.github.io/page.js). _Distantly_ inspired by [react-router](https://github.com/ReactTraining/react-router).

### installation
`npm i -SE ractive-routes`

### including
```es6
import {Router, Route} from 'ractive-routes';
```
```es5
var Routing = require( 'ractive'routes');
```

### Simple usage
```html
<main>
    <Router base="/">
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/about">
            <About></About>
            <!-- /about/contact -->
            <Route path="/contact">
                <ContactModal></ContactModal>
            </Route>
        </Route>
    </Router>
</main>
```
```es6
    import Ractive from 'ractive';
    import {Router, Route} from 'ractive-routes';
    import {Home, About, Modals.Contact as ContactModal} from './components';

    let app = Ractive({
        components: {Router, Route, Home, About, ContactModal}
    });
```

### Limitations
+ Component passing
  + Due to difficulties passing along components through as `data`, each `<Route/>` declaration should only contain **one** non-`Route` parent-level component with its own more complex component tree. This component, if desired, must be specified **first**. Other `Route` componenets can be nested.
+ Tests or Q/A
    + Pulled this out of a janky prototype project with the intention to support/use it separately. If the prototype makes it way out of the janky phase, I'll follow up here.

### Contrib
Please feel free to point out issues or PR a fix. I'm by no means a [Ractive](http://www.ractivejs.org/) wizard, but we have to keep this awesome technology going.
