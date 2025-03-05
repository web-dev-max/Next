import jwt from "jsonwebtoken";

const generateToken = (newUser: { id: number | string }) => {
    return jwt.sign(
        { userId: newUser.id },
        process.env.JWT_SECRET!,
        { expiresIn: "7d" }
    );
}

export default generateToken ;