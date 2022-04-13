import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { defaultEventRooms, wsEventNames } from 'events/events.configs';
import { Socket, Server } from 'socket.io';

import { CommentSentDTO, UserJoinedRoomDTO } from './request-comment.dto';
import { RequestCommentService } from './request-comment.service';

@WebSocketGateway({ namespace: 'comments' })
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
    this.requestCommentsService.createFromDTO(data);
    client.to(data.request).emit(wsEventNames.comments, data);
  }
}
