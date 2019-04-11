// import { Component } from '@angular/core';
// import * as Stomp from "stompjs";
// import * as SockJS from "sockjs-client";


// @Component({
//   selector: 'app-chat2',
//   templateUrl: './chat2.component.html',
//   styleUrls: ['./chat2.component.css']
// })
// export class Chat2Component {
//   private serverUrl = 'http://utm-t2s.herokuapp.com/websocket'
//   private title = 'WebSockets chat';
//   private stompClient;

//   constructor(){
//     this.initializeWebSocketConnection();
//   }

//   initializeWebSocketConnection(){
//     let ws = new SockJS(this.serverUrl);
//     this.stompClient = Stomp.over(ws);
//     let that = this;
//     this.stompClient.connect({}, function(frame) {
//       that.stompClient.subscribe("/topic/tatiana.scorohod", (message) => {
//         if(message.body) {  
//             var d = JSON.parse(message.body)
//             var context = {
//               'data': d.data,
//               'label': d.label,
//             };
//          // $(".chat").append("<div class='message'>"+message.body+"</div>")
//           console.log(message.body);
//         }
//       });
//       that.stompClient.send("/app/lecture/tatiana.scorohod" , {}, '');
//     });
//   }

//   // sendMessage(message){
//   //   this.stompClient.send("/app/send/message" , {}, message);
//   //   $('#input').val('');
//   // }
// }