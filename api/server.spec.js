const request=require('supertest')

const server=require('./server.js')

describe('server', () => {
    it('sets the env to testing',() =>{
        expect(process.env.DB_ENV).toBe('testing');
    })

    //open client, make a request and expect a response
describe('Get /',() =>{
    it('should return 200 ok ',() =>{
    return request(server).get('/').expect(200)
    })

    it('using the squad(async/await)', async () =>{
        const res= await request(server).get('/')
        expect(res.status).toBe(200)
    })

    it('uses done and then', done =>{
        request(server).get('/').then(res => {
            expect(res.type).toBe('application/json')
            done()
        }) 
    })

    it('should return { api: "up" }', ()=>{
        return request(server).get('/').then(res =>{
            const {body} =res;
            expect(body.api).toBe('up')
        })
    })
  })
})