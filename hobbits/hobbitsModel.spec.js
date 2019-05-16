const Hobbits= require('./hobbitsModel.js')
const db=require('../data/dbConfig.js');

describe('hobbits tester()',() =>{
    beforeEach(async () => {
        await db('hobbits').truncate()
    })
    describe('insert()',() =>{
        it('should insert the provided hobbit', async () =>{
           let hobbit= await Hobbits.insert({name:'gaffer'});
            expect(hobbit.name).toBe('gaffer')

            hobbit= await Hobbits.insert({name:'sam'});
            expect(hobbit.name).toBe('sam')
            
            const hobbits =await db('hobbits')

            expect(hobbits).toHaveLength(1)

        })
    })
})