import { Request, Response } from "express";
import { validatePassword } from "../services/userService";
import { signJWT } from "../utils/jwt";
import { createSession } from "../services/sessionService";

export async function createUserSessionHandler(req: Request, res: Response){

    // i. Validate the user's password
    const user = await validatePassword(req.body);
    if(!user){
        return res.status(401).send('Invalid username or password');
    }
    // ii. Create a session
    const session = createSession(user._id, req.get('user-agent') || '');

    // iii. Create access token
    const accessToken = signJWT(
        {...user, session: (await session)._id},
        {expiresIn: process.env.ACCESS_TOKEN_TTL} // Access token time to live (TTL) is 15 minutes.
    );

    // iv. Create refresh token
    const refreshToken = signJWT(
        {...user, session: (await session)._id},
        {expiresIn: process.env.REFRESH_TOKEN_TTL} // Access token time to live (TTL) is 15 minutes.
    );


    // v. Send refresh & access token back
    return res.send({accessToken, refreshToken}); 
}