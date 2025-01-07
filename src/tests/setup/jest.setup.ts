import { execSync } from 'child_process'
import { testPrisma } from "@configs/db";

beforeAll(async () => {
    console.log("Starting the testing and migrating database")
    execSync('npx prisma migrate deploy', {stdio:'inherit'})
    await testPrisma.$connect()
})

afterAll(async() => {
    console.log("Done with testing and reseting database")
    await testPrisma.$disconnect()
})

beforeEach(async() => {
    execSync('npx prisma migrate reset --force', {stdio: 'inherit'})
})