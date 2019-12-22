const intenseCPUloader = require('../index')
const expect = require('chai').expect;

describe('Starting to run tests on index', function(){
    it('Should run for more then 30 ms', function() {
        const ms = 30;
        const startDate = Date.now();
        let res = intenseCPUloader(ms);
        console.log(res - startDate)
        

        expect(res - startDate).to.be.above(ms);
    });
});