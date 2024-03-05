//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


contract Game {
    //game status
    enum GameStatus {
        OPEN,
        LOST,
        WON
    }
    //game structure
    struct gameData {
        uint256 gameId;
        GameStatus status;
        address player;
        uint256 highestScore;
    }

    //mapping to store game data
    mapping(address => gameData) public games;
    uint256 public gameCount = 0;
    //event 
    event GameCreated(uint256 gameId, address player);
    event GameEnded(uint256 gameId, GameStatus status);

    function createGame(address _player) public {
        uint256 _highestScore = games[_player].highestScore;
        games[_player] = gameData(gameCount, GameStatus.OPEN, _player, _highestScore);
        emit GameCreated(gameCount, _player);
        gameCount++;
    }
    function endGame(address _player, GameStatus _status, uint256 _score) public {
     gameData storage game = games[_player];
        game.status = _status;
        game.highestScore = _score;
        emit GameEnded(game.gameId, _status);
    }


    function getGameData(address _player) public view returns (gameData memory) {
        return games[_player];
    }


//     enum GameStatus {
//         OPEN,
//         CLOSED
//     }
//     //game structure
//     struct gameData {
//         uint256 gameId;
//         GameStatus status;
//         uint256 prize;
//         uint256 startTime;
//         uint256 endTime;
//         uint256 duration;
//         address winner;
//         address[] players;
//     }

//     //mapping to store game data
//     mapping(uint256 => gameData) public games;


//     uint256 gameCount = 0;
//     //events
//     event GameCreated(uint256 gameId, uint256 prize, uint256 startTime, uint256 endTime, uint256 duration);
//     event GameJoined(uint256 gameId, address player);
//     event GameEnded(uint256 gameId, address winner);
//     event PrizeSent(uint256 gameId, address winner, uint256 prize);

//     //modifier to check if the game exists
//     modifier gameExists(uint256 _gameId) {
//         require(games[_gameId].gameId != 0, "Game does not exist");
//         _;
//     }
//     //modifier to check if the game is open
//     modifier gameOpen(uint256 _gameId) {
//         require(games[_gameId].status == GameStatus.OPEN, "Game is not open");
//         _;
//     }
//     //midiifer to check if the game has not ended
//     modifier gameNotEnded(uint256 _gameId) {
//         require(games[_gameId].endTime > block.timestamp, "Game has ended");
//         _;
//     }

//     //function to create a new game
//     function createGame(uint256 _prize, uint256 _duration) public {
//         games[gameCount] = gameData(gameCount, GameStatus.OPEN, _prize, block.timestamp, block.timestamp + _duration, _duration, address(0), new address[](0));
//         emit GameCreated(gameCount, _prize, block.timestamp, block.timestamp + _duration, _duration);
//         gameCount++;
//     }
//     //function to join a game
//     function joinGame(uint256 _gameId) public gameExists(_gameId) gameOpen(_gameId) gameNotEnded(_gameId) {
//         games[_gameId].players.push(msg.sender);
//         emit GameJoined(_gameId, msg.sender);
//     }
//     //function to end a game
//     function endGame(uint256 _gameId) public gameExists(_gameId) gameOpen(_gameId) gameNotEnded(_gameId) {
//         games[_gameId].status = GameStatus.CLOSED;
//         games[_gameId].winner = games[_gameId].players[block.timestamp % games[_gameId].players.length];
//         emit GameEnded(_gameId, games[_gameId].winner);
//     }
//     //function to get game data
//     function getGameData(uint256 _gameId) public view gameExists(_gameId) returns (gameData memory) {
//         return games[_gameId];
//     }
//     //function to get game players
//     function getGamePlayers(uint256 _gameId) public view gameExists(_gameId) returns (address[] memory) {
//         return games[_gameId].players;
//     }
//     //function to send prize to winner
//     function sendPrize(uint256 _gameId) public gameExists(_gameId) {
//         require(games[_gameId].winner == msg.sender, "You are not the winner");
//         payable(msg.sender).transfer(games[_gameId].prize);
//         emit PrizeSent(_gameId, msg.sender, games[_gameId].prize);
//     }


    
}