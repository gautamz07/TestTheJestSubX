import define from './utils/object.js';

class changeBG {

    constructor(elem) {
        this.elem = elem; 
    }

    define( changeBG , 'colorChange' , {
        value : function() {
            Object.assign( this.elem.style , {
                'backgroundColor' : 'red'
            });
        }
    });

}

export default changeBG