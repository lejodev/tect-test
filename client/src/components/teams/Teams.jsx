import React from "react";
import "./_Teams.scss";
import TeamPlayer from "./teamPlayer/TeamPlayer";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { GrNext, GrPrevious } from "react-icons/gr";

const Teams = () => {
  const { register, handleSubmit, errors } = useForm();
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const pageRef = useRef(page);
  const inputRef = useRef("");
  const url = "http://localhost:3080/api/v1/team";

  const getPage = (currentPage) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: inputRef.current, page: currentPage }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.length > 0) {
          setTeamPlayers(resp);
          setPage(currentPage);
          console.log("PAGE", pageRef.current);
        } else {
          alert("No more players");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data) => {
    inputRef.current = data.team;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: data.team, page: page }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setTeamPlayers(resp);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  let count = 0;

  return (
    <div className="teams">
      <div className="search">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Real Madrid"
              {...register("team", { required: true })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            SEARCH
          </Button>
        </Form>
      </div>
      <div className="display">
        {teamPlayers.map((teamPlayer) => {
          count++;
          return <TeamPlayer key={count} teamPlayer={teamPlayer} />;
        })}
      </div>

      {/* {() => {
        if (teamPlayers.length > 0) {
          alert("Display buttons");
        } else {
          alert("Hidden buttons");
        }
      }} */}
      <div
        className="pageButtons"
        style={{
          visibility: () => (teamPlayers.length > 0 ? "visible" : "hidden"),
        }}
      >
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
    </div>
  );
};

export default Teams;
