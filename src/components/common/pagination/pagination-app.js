import React from "react";
import { Pagination } from "semantic-ui-react";
import useFilter from "../../../hooks/use-filter";
// import "../../../../src/assets/style/pagination-app.css";

const PaginationApp = ({ totalPages, perPage, myRef, myRef1 }) => {
  const [page, setPage] = useFilter("page", "1");
  const [perpage, setPerPage] = useFilter("perPage", "10");
  return (
    <Pagination
      className="Edit_Pagination_App"
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      secondary
      totalPages={totalPages}
      onPageChange={(e, data) => {
        setPage(data?.activePage);
        setPerPage(10);
      }}
    />
  );
};

export default PaginationApp;
