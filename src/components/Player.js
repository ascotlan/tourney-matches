function Player({wins, tag, firstName, lastName}) {

  return (
    <article className="Player">
      <h1>
        {firstName} <span>{tag}</span> {lastName}
      </h1>
      {!wins && <h2 className="zero">Currently with no wins :(</h2>}
      {wins === 1 && <h2>Currently at 1 win</h2>}
      {wins > 1 && <h2>Currently at {wins} wins</h2>}
    </article>
  );
}

export default Player;
