import bcrypt from 'bcrypt'

export const hashPassword = async(plainPassword: string) => {
    const hashedPass = await bcrypt.hash(plainPassword, 10)
    return hashedPass
}