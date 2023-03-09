db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('blogs');

db.blogs.insert({ author: 'random', title: 'testbloglist', url: '.com' });
db.blogs.insert({ author: 'random', title: 'testbloglist2', url: '.com' });