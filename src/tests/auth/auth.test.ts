import app from 'src/app'
import request from 'supertest'


describe('Auth API', () => {

    it('should create new user', async ()=> {
        const response = await request(app)
        .post('/auth/register')
        .send({
            email:"rajat13@gmail.com",
            name: "Hello",
            username: "raja12",
            password: "222222"
        })

        expect(response.status).toBe(201)
        expect(response.body.username).toBe("raja12")
    })
})
