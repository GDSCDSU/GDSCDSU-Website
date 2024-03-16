
export const generateResponse = (data: any, message: String, code: number = 200) => {
    return Response.json({ message, data }, { status: code });
}

export const generateRandomOTP = () => {
    return Math.floor(10000 + Math.random() * 90000);
}