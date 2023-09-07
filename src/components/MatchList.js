import Match from "./Match";

function MatchList({ matchData }) {
  const rederedMatches = matchData.map((match) => (
    <Match
      key={match.matchNumber}
      players={match.players}
      winner={match.winner}
      scoreDifference={match.scoreDifference}
    />
  ));

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {rederedMatches}
    </section>
  );
}

export default MatchList;
