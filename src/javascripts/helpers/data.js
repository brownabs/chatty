const messages = [
  {
    id: 'message1',
    content: 'Marvel, Star Wars or Lord of the Rings?',
    timeStamp: '07/12/20, 5:17 am',
    userId: 'user1'
  },
  {
    id: 'message2',
    content: 'I love Lord of the Rings.',
    timeStamp: '09/12/20, 2:17 pm',
    userId: 'user2'
  },
  {
    id: 'message3',
    content: 'How is it going?',
    timeStamp: '09/12/20, 2:17 pm',
    userId: 'user2'
  },
  {
    id: 'message4',
    content: '?',
    timeStamp: '09/12/20, 2:17 pm',
    userId: 'user2'
  },
  {
    id: 'message5',
    content: 'Hello, is it me youre looking for?',
    timeStamp: '09/1/20, 3:17 pm',
    userId: 'user3'
  },
  {
    id: 'message2',
    content: 'I am an internet troll',
    timeStamp: '09/12/20, 2:17 pm',
    userId: 'user4'
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
