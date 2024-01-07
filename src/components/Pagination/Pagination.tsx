import Link from "next/link";
import React from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import style from "./pagination.module.scss";
export const Pagination = ({
  currentPage,
  totalPage,
}: {
  currentPage: number;
  totalPage: number;
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPage;

  return (
    <div className={style.paginationWrapper}>
      {isFirstPage ? (
        <CiCircleChevLeft
          fontSize={32}
          style={{ cursor: isFirstPage ? "not-allowed" : "pointer" }}
          color={isFirstPage ? "#ccc" : "#000"}
        />
      ) : (
        <Link
          passHref={isFirstPage}
          href={{
            pathname: "/",
            query: { page: currentPage - 1 },
          }}
        >
          <CiCircleChevLeft
            fontSize={32}
            style={{ cursor: isFirstPage ? "not-allowed" : "pointer" }}
            color={isFirstPage ? "#ccc" : "#000"}
          />
        </Link>
      )}

      {Array(totalPage)
        .fill(new Number())
        .map((_, index) => {
          const pageNumber = index + 1;

          return (
            <Link
              className={
                pageNumber === Number(currentPage)
                  ? "bg-gray-900 text-white rounded-md px-4 py-2"
                  : "text-black"
              }
              href={{
                pathname: "/",
                query: { page: pageNumber },
              }}
              key={pageNumber + "page"}
            >
              {pageNumber}
            </Link>
          );
        })}

      {isLastPage ? (
        <CiCircleChevRight
          fontSize={32}
          style={{ cursor: isLastPage ? "not-allowed" : "pointer" }}
          color={isLastPage ? "#ccc" : "#000"}
        />
      ) : (
        <Link
          href={{
            pathname: "",
            query: { page: currentPage + 1 },
          }}
          passHref={isLastPage}
        >
          <CiCircleChevRight
            fontSize={32}
            style={{ cursor: isLastPage ? "not-allowed" : "pointer" }}
            color={isLastPage ? "#ccc" : "#000"}
          />
        </Link>
      )}
    </div>
  );
};
