import Player from "./Player";

function PlayerList({ playerData }) {
  const renderedPlayers = playerData.map((player) => (
    <Player
      key={player.gamerTag}
      wins={player.wins}
      tag={player.gamerTag}
      firstName={player.firstName}
      lastName={player.lastName}
    />
  ));

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {renderedPlayers}
    </section>
  );
}

export default PlayerList;
