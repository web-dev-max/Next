import jwt from "jsonwebtoken";

const generateToken = (newUser: { id: number | string }) => {
    return jwt.sign(
        newUser,
        process.env.JWT_SECRET!,
        { expiresIn: "7d" }
    );
}

export default generateToken ;