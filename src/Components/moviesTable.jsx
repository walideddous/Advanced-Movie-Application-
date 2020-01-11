import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/Like";
import auth from "../services/authService";


class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: el => <Link to={`/movies/${el._id}`}>{el.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: el => (
        <Like liked={el.liked} onClick={() => this.props.onLike(el)} />
      )
    }
  ];

  constructor() {
    super();
    const user = auth.getCurrentuser();
    if (user )
      this.columns.push({
        key: "delete",
        content: el => (
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(el)}
          >
            Delete
          </button>
        )
      });
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
