import { Router } from 'express';

import { createMessage, deleteMessageById, readMessageById, readMessages, updateMessageById } from '../controllers/message.controller';

const routerMessage = Router();

routerMessage.post('/messages', createMessage);
routerMessage.get('/messages', readMessages);
routerMessage.get('/messages/:id', readMessageById);
routerMessage.put('/messages/:id', updateMessageById);
routerMessage.delete('/messages/:id', deleteMessageById);

export default routerMessage;