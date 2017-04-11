var axios = require('axios');
var id = "ccruz2886";
var sec = "YOUR_SECRET_ID";
var param = `?client_id="${id}"&client_secret=${sec}`;

var GITHUB_API_USERS = 'https://api.github.com/users/';

function getUserInfo(username) {
  return axios.get(`${GITHUB_API_USERS}${username}${param}`);
}

function getRepos(username) {
  return axios.get(`${GITHUB_API_USERS}${username}/repos${param}`);
}

function getTotalStarts(repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count;
  }, 0);
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStarts)
    .then(function (totalStarts) {
      return {
        followers: player.followers,
        totalStarts: totalStarts
      }
    })
}

function getScore(player) {
  return player.followers * 3 + player.totalStarts;
}

function calculateScores(players) {
  return [
    getScore(players[0]),
    getScore(players[1]),
  ];
}


var helpers = {
  battle: function (players) {
    var playerOne = getPlayersData(players[0]);
    var playerTwo = getPlayersData(players[1]);

    return axios.all([playerOne, playerTwo])
      .then(calculateScores)
      .catch(function(err) {
        console.warn('Something bad happen :: ', err);
      })

  },
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo: ', err)
    });
  }
};
module.exports = helpers;