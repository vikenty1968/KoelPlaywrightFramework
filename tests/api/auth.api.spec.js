import { test, expect } from "../../fixtures/fixtures.js";

test("Authenticate user via API", async ({ request }) => {
const response = await request.post('/api/me',{data:{
    email:process.env.KOEL_EMAIL,
    password:process.env.KOEL_PASSWORD,
}

})
expect(response.status()).toBe(200)
const body = await response.json()
 //console.log(Object.keys(body))
 const token = body.token
 expect(token).toBeTruthy()
 expect(typeof token).toBe('string')
})