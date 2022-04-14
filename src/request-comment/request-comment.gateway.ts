import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { defaultEventRooms, eventTemplate, wsEventNames } from 'events/events.configs';
import { Socket, Server } from 'socket.io';

import { CommentSentDTO, UserJoinedRoomDTO } from './request-comment.dto';
import { RequestCommentService } from './request-comment.service';

@WebSocketGateway({ namespace: 'comments', cors: true })
export class CommentsGateway implements OnGatewayConnection {
  constructor(private readonly requestCommentsService: RequestCommentService) {}

  @WebSocketServer()
  server: Server;

  public handleConnection = (client: Socket) => {
    client.join(defaultEventRooms.general);
  };

  @SubscribeMessage(wsEventNames.joinRoom)
  public joinRoom(@MessageBody() data: UserJoinedRoomDTO, @ConnectedSocket() client: Socket) {
    client.join(data.request);
  }

  @SubscribeMessage(wsEventNames.comments)
  public handleCommentSent(@MessageBody() data: CommentSentDTO, @ConnectedSocket() client: Socket) {
    return this.requestCommentsService.createFromDTO(data).then((comment) => {
      client.to(data.request).emit(wsEventNames.comments, comment.toJSON());
      return eventTemplate(wsEventNames.comments, comment.toJSON());
    });
  }
}
