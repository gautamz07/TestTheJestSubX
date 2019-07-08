import html from './html.js';
import Glide from '../dist/glide.esm.js';


describe('check autoplay option' , () => {
    // console.log( document );

    beforeEach( () => {
        document.body.innerHTML = html;
    });

    test( 'Check index to be 1 for autoplay' , (done) => {

           let glide = new Glide('#glide' , {
                type : 'slider',
                gap : 0,
                autoplay: 500,
                rewind: false
           }).mount();

           setTimeout( () => {
                console.log( `The glide index is ${glide.index}` );
                expect( glide.index ).toBe(1);
                done();
           }, 510 );

        //    setTimeout( () => {
        //      console.log( `The glide index is ${glide.index}` );
        //      expect( document.querySelectorAll('.glide__slide')[2].classList.contains('glide__slide--active') )
        //         .toBe(true);
        //      done();
        //    }, 1010 );

    });

    /*
    test( 'Check index to be 2 for autoplay' , (done) => {

            let glide = new Glide('#glide' , {
                type : 'slider',
                gap : 0,
                autoplay: 500,
                rewind: false
            }).mount();

            setTimeout( () => {
                console.log( `The glide index is ${glide.index}` );
                expect( glide.index ).toBe(2);
                done();
            }, 1010 );

    });
    */

});


