import { Request, Response } from "express";
import { validatePassword } from "../services/userService";
import { signJWT } from "../utils/jwt";
import { createSession, getAllUserSessions, getSessionById, updateSession, deleteSession } from "../services/sessionService";

export async function createUserSessionHandler(req: Request, res: Response) {
  try {
    // i. Validate the user's password
    const user = await validatePassword(req.body);
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    // ii. Create a session
    const session = await createSession(user._id, req.get('user-agent') || '');

    // iii. Create access token
    const accessToken = signJWT(
      { ...user, session: session._id },
      { expiresIn: process.env.ACCESS_TOKEN_TTL || '15m' }
    );

    // iv. Create refresh token
    const refreshToken = signJWT(
      { ...user, session: session._id },
      { expiresIn: process.env.REFRESH_TOKEN_TTL || '7d' }
    );

    // v. Send refresh & access token back
    return res.send({ accessToken, refreshToken });
  } catch (error) {
    console.error('Error creating user session:', error);
    return res.status(500).send('Internal Server Error');
  }
}

export async function getAllUserSessionsHandler(req: Request, res: Response) {
  try {
    // Retrieve all user sessions from the database
    const sessions = await getAllUserSessions();

    return res.send(sessions);
  } catch (error) {
    console.error('Error retrieving user sessions:', error);
    return res.status(500).send('Internal Server Error');
  }
}

export async function getUserSessionHandler(req: Request, res: Response) {
  try {
    const sessionId = req.params.sessionId;

    // Retrieve the user session by ID from the database
    const session = await getSessionById(sessionId);
    if (!session) {
      return res.status(404).send('Session not found');
    }

    return res.send(session);
  } catch (error) {
    console.error('Error retrieving user session:', error);
    return res.status(500).send('Internal Server Error');
  }
}

export async function updateUserSessionHandler(req: Request, res: Response) {
  try {
    const sessionId = req.params.sessionId;
    const updates = req.body;

    // Update the user session with the specified ID
    const updatedSession = await updateSession(sessionId, updates);
    if (!updatedSession) {
      return res.status(404).send('Session not found');
    }

    return res.send(updatedSession);
  } catch (error) {
    console.error('Error updating user session:', error);
    return res.status(500).send('Internal Server Error');
  }
}

export async function deleteUserSessionHandler(req: Request, res: Response) {
  try {
    const sessionId = req.params.sessionId;

    // Delete the user session with the specified ID
    const deletedSession = await deleteSession(sessionId);
    if (!deletedSession) {
      return res.status(404).send('Session not found');
    }

    return res.send('Session deleted successfully');
  } catch (error) {
    console.error('Error deleting user session:', error);
    return res.status(500).send('Internal Server Error');
  }
}
