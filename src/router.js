import Ractive from 'ractive';
import page from 'page';

const Router = Ractive.extend({
    template: '{{>content}}',
    data() {
        return {
            base: '/',
            page: page
        }
    },

    oninit() {
        page.base( this.get( 'base' ) );
    },

    oncomplete() {
        page();
    }
});

export default Router;