export default function() {
  let rentals = {
      type: 'tests',
      id: 1,
      attributes: {
        test: 'Grand Old Mansion',
      }
    };
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/tests')
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.post('/tests');
  this.get('/tests/:id', function(db, request) {
    return {data:rentals};
  });
   this.put('/tests/:id',function(db, request) {
    console.info('requestrequest', request)
    return request.requestBody;
  });
   this.patch('/tests/:id',function(db, request) {
    console.info('reqequest', request)
    return request.requestBody;
  });
}
