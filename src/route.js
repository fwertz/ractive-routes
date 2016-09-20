import Ractive from 'ractive';

const Route = Ractive.extend({
    template: '{{>content}}',
    oninit() {
        this.set( '_component', this.findAllComponents()[0] );
    },
    onrender() {
        this.get( '_component' ).detach();
    },
    oncomplete() {
        let self = this;
        console.log( `${this.fullPath()}`);
        this.get( 'page' )( this.fullPath(), function ( ctx ) {
            self.get( '_component' ).insert( self.el );
        });

        this.get( 'page' ).exit( this.fullPath(), function ( ctx, next  ) {
            self.get( '_component' ).detach()
            next();
        });
    },

    fullPath( r = this ) {
        if ( r.parent && r.parent.component.name === r.component.name ) {
            return this.fullPath.call( r.parent, r.parent ) + this.get( 'path' );
        } else {
            return this.get( 'path' );
        }
    }
});

export default Route;