import html from './html.js';
import Glide from '../dist/glide.esm.js';


describe('check autoplay option' , () => {
    // console.log( document );

    beforeEach( () => {
        document.body.innerHTML = html;
    });

    test( 'change active slide' , (done) => {

           let glide = new Glide('.glide' , {
               autoplay: 500
           });

           setTimeout( () => {
                expect( Array.from( document.querySelectorAll('.glide__slide') )[1].contains('glide__slide') )
                    .toBe(true);
                done();

           }, 510 );

    });

});


