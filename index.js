new Vue({
    el: '#app',
    data: {
      articles: [],
      headline: ""
    },
    mounted(){
        let client = contentful.createClient({
          space: 'ipxahifya2kh',
          accessToken: '50b2f255af190a56508ce0b5787be26da904bc6cd285138af6e1a5852aac1602'
        })
  
        client.getEntry('alOyCsRoWWOIsGwYAGE40')
        .then((entry) => {
          console.log(entry.fields.body);
            this.headline = entry.fields.body;
        })
  
        client.getEntries({
            order: 'sys.createdAt',
            'content_type': 'article'
          })
        .then((entries) => {
            this.articles = entries.items;
            console.log(this.articles);
        })
    }
  })