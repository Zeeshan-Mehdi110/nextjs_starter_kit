import { NextRequest, NextResponse } from "next/server"
import { registerSchema } from "@/validation/registerSchema"
import vine, { errors } from '@vinejs/vine'

export async function POST(req: NextRequest) {
  const data = await req.json()
  try {
    const validator = vine.compile(registerSchema)
    const payload = await validator.validate(data)
    return NextResponse.json({ payload })
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error.messages)
      return NextResponse.json({ status: 400, errors: error.messages })
    }
  }
}