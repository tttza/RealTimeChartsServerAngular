import * as signalR from '../assets/signalr.js';

const connection = new signalR.HubConnectionBuilder()
  .withUrl('https://example.com/signalr/chat')
  .build();

connection.on('send', data => {
  console.log(data);
});

connection.start()
  .then(() => connection.invoke('send', 'Hello'));

