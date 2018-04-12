import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Room } from '../models/room.model';


@Injectable()
export class RoomService {
  rooms: FirebaseListObservable<any[]>;
  roomList: Room[];

  constructor(private database: AngularFireDatabase) {
    this.rooms = database.list('main');
    this.scenes = database.list('scenes');
   }

   getRooms() {
     return this.rooms;
   }

   getScenes(){
     return this.scenes;
     console.log(scenes[0])
   }


}
