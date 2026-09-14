import{test,expect} from '../../fixtures/fixtures.js'
test("Get data with API token",async({request,token})=>{
    const response = await request.get("/api/data",{
        headers:{
            Authorization:`Bearer ${token}`
        }   
    })
       expect(response.status()).toBe(200)
       const body = await response.json()
     // console.log(body)
     expect(Array.isArray(body.songs)).toBeTruthy()
     expect(body.songs.length).toBeGreaterThan(0)
     expect(body.currentUser).toBeTruthy()
     expect(body.currentUser.email).toBe(process.env.KOEL_EMAIL)
})