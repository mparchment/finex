import Session, { ISession } from '../models/sessionModel';

export async function createSession(userId: string, userAgent: string): Promise<ISession> {
  const session = await Session.create({ user: userId, userAgent });
  return session.toJSON();
}

export async function getAllUserSessions(): Promise<ISession[]> {
  const sessions = await Session.find();
  return sessions.map(session => session.toJSON());
}

export async function getSessionById(sessionId: string): Promise<ISession | null> {
  const session = await Session.findById(sessionId);
  return session?.toJSON();
}

export async function updateSession(sessionId: string, updates: Partial<ISession>): Promise<ISession | null> {
  const session = await Session.findByIdAndUpdate(sessionId, updates, { new: true });
  return session?.toJSON();
}

export async function deleteSession(sessionId: string): Promise<ISession | null> {
  const session = await Session.findByIdAndDelete(sessionId);
  return session?.toJSON();
}
