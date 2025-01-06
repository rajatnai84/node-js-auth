import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'
import * as dotenv from 'dotenv'

dotenv.config({path: '.env.test'})

const prisma = new PrismaClient()

beforeAll(async () => {
    console.log("Starting the testing and migrating database")
    execSync('npx prisma migrate deploy', {stdio:'inherit'})
    await prisma.$connect()
})

afterAll(async() => {
    console.log("Done with testing and reseting database")
    await prisma.$disconnect()
})

beforeEach(async() => {
    execSync('npx prisma migrate reset --force', {stdio: 'inherit'})
})