import { NextRequest, NextResponse } from "next/server"
import { registerSchema } from "@/validation/registerSchema"
import vine, { errors } from '@vinejs/vine'
import { CustomErrorReporter } from "@/validation/customErrorReporter"
import bcrypt from "bcrypt"
import prisma from "@/DB/db.config"
export async function POST(req: NextRequest) {
  const data = await req.json()
  vine.errorReporter = () => new CustomErrorReporter()
  try {
    const validator = vine.compile(registerSchema)
    const payload = await validator.validate(data)
    // * check email
    const isEmailExist = await prisma.user.findUnique({
      where: {
        email: payload.email
      }
    })
    if (isEmailExist) {
      return NextResponse.json({
        errors: {
          email: "Email already exists"
        }
      })
    }
    const isUsernameExist = await prisma.user.findUnique({
      where: {
        username: payload.username
      }
    })

    if (isUsernameExist) {
      return NextResponse.json({
        errors: {
          username: "username already taken. please use another"
        }
      })
    }
    payload.password = await bcrypt.hash(payload.password, 10)
    // * insert record in Db
    await prisma.user.create({
      data: payload
    })
    return NextResponse.json({ message: "Account created successfully !!" })
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json({ status: 400, errors: error.messages })
    }
  }
}