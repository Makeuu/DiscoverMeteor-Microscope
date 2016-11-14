module.exports = {
  servers: {
    one: {
      host: '',
      username: 'root',
      // pem:
      password: ''
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'microscope',
    path: '.',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: 'http://mercierm.fr',
      PORT: 80,
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 30
  },

  ssl: {
    port: 443,
    crt: 'www.mercierm.fr_ssl_certificate.cer',
    key: 'mercierm.fr_private_key.key',
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
