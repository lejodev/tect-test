import { useEffect, useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import React from "react";
import Player from "./player/Player";
import "./_Players.scss";
import Button from "react-bootstrap/Button";

const Players = () => {
  useEffect(() => {
    fetch(`/api/v1/players/?order=asc&page=${page}`)
      .then((resp) => {
        console.log("resp", page);
        return resp.json();
      })
      .then((resp) => {
        const pages = resp.totalPages;
        console.log("pages", resp);
        setPlayers(resp);
      });
  }, []);

  let getPage = (currentPage) => {
    fetch(`/api/v1/players/?order=asc&page=${currentPage}`)
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        // const pages = resp.totalPages;
        console.log("pages", resp);
        if (resp.length > 0) {
          setPlayers(resp);
          setPage(currentPage);
          console.log("PAGE", pageRef.current);
        } else {
          alert("No more players");
        }
      });
  };

  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");
  const pageRef = useRef(page);

  let count = 0;
  return (
    <main className="players">
      <div className="players-container">
        {players.map((player) => {
          count++;
          return <Player key={count} player={player} />;
        })}
      </div>
      <div className="pageButtons">
        <Button
          className="button"
          onClick={() => {
            if (page == 1) {
              alert("Invalid operation");
            } else {
              pageRef.current = page - 1;
              getPage(pageRef.current);
            }
          }}
        >
          <GrPrevious />
        </Button>
        <div className="divider"></div>
        <Button
          className="button"
          onClick={() => {
            pageRef.current = page + 1;
            getPage(pageRef.current);
          }}
        >
          <GrNext />
        </Button>
      </div>
    </main>
  );
};

export default Players;
