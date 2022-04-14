export const wsEventNames = {
  comments: 'comments',
  joinRoom: 'join-room',
};

export const defaultEventRooms = {
  general: 'general',
};

export const eventTemplate = (event: string, data) => ({ event, data });
