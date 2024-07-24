import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./styles.css";

export default function PaginationComp({ page, handlePageChange }) {
  return (
    <div spacing={2} className="pagination-div">
      <Pagination
        sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={10}
        page={page}
        onChange={(ev, val) => handlePageChange(ev, val)}
      />
    </div>
  );
}
