const messages = [
  {
    id: 'message1',
    content: 'I love Lord of the Rings. Whoops, wrong chatroom.',
    timeStamp: 'August 11th',
    userId: 'user1'
  },
  {
    id: 'message2',
    content: 'How is it going?',
    timeStamp: 'August 11th',
    userId: 'user2'
  },
];

const users = [
  { id: 'user1', name: 'Xavier' },
  { id: 'user2', name: 'Joanna' },
  { id: 'user3', name: 'Gunter' },
  { id: 'user4', name: 'Sven' },
  { id: 'user5', name: 'Mackenzie' }
];

const getMessages = () => messages;

const getUsers = () => users;

export { getMessages, getUsers };
