import { Link } from "react-router-dom";
import { BlogData } from "../../../component/allDatas";
import "./style.scss";
import TablePagination from '@mui/material/TablePagination';
import { useEffect, useState } from "react";

export default function BlogA() {
  const [dataPage] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);

  useEffect(() => {
    setPage(0);
  }, [dataPage]);

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="section BlogA">
      <div className="container inBlogA">
        <div className="BlogACont">
        {BlogData.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        ).map((item, i) => {
            return (
              <div className="BlogAContBox" key={i}>
                <div className="imgBox">
                  <Link to={item.url}>
                    <img src={item.img} alt="" />
                  </Link>
                </div>
                <div className="boxContent">
                  <Link to={item.url}>
                    <h3>{item.title}</h3>
                  </Link>
                  <div className="HeUnN">
                    <Link to={item.authorUrl}>
                      <span>{item.author}</span>
                    </Link>
                    <span>{item.date}</span>
                  </div>
                  <p>{item.desc}</p>
                  <div className="MuijLi">
                    <Link className="siteBtn" to={item.url}>
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <TablePagination
        count={BlogData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    </div>
  );
}
