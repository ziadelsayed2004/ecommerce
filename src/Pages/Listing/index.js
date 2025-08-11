import React from "react";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Sidebar from "../../Components/Sidebar";
import ProductItem from "../../Components/ProductItem";

import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { BsGrid } from "react-icons/bs";
import { TbGrid3X3, TbGrid4X4 } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";

const Listing = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("no-scroll", sidebarOpen);
  }, [sidebarOpen]);

  const [productView, setProductView] = React.useState(
    window.innerWidth > 778 ? "four" : "two"
  );
  const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth <= 778);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 778) {
        setProductView("four");
        setIsSmallScreen(false);
      } else {
        setProductView("two");
        setIsSmallScreen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // 🟢
  const products = Array.from({ length: 120 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const [itemsPerPage, setItemsPerPage] = React.useState(12);
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleSelectItems = (num) => {
    setItemsPerPage(num);
    setCurrentPage(1);
    handleClose();
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  // 🔴

  return (
    <section className="productListingPage">
      <div className="container">
        <div className="productList d-flex">
          <div className={`sidebarWrapper ${sidebarOpen ? "open" : ""}`}>
            <Button className="close_ circle" onClick={() => setSidebarOpen(false)}>
              <IoClose />
            </Button>
            <Sidebar />
          </div>
          {sidebarOpen && (
            <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
          )}

          <div className="rightContent pl-0 pr-0">
            <div className="ContentContainer d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between w-100">
                <h5 className="ListTitle mb-4">Check Our Products</h5>
                <Button
                  className="toggleSidebarBtn d-md-none mb-4"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="icon">
                    <IoIosMenu />
                  </span>
                  <span className="text">Filter</span>
                </Button>
              </div>
              <div className="showBy d-flex w-100 p-2">
                <div className="showByBtns d-flex">
                  <Button
                    onClick={() => setProductView("one")}
                    className={productView === "one" ? "act icon viewOne" : ""}
                  >
                    <IoIosMenu />
                  </Button>
                  <Button
                    onClick={() => setProductView("two")}
                    className={productView === "two" ? "act icon viewTwo" : ""}
                  >
                    <BsGrid />
                  </Button>

                  {!isSmallScreen && (
                    <>
                      <Button
                        onClick={() => setProductView("three")}
                        className={productView === "three" ? "act icon viewThree" : ""}
                      >
                        <TbGrid3X3 />
                      </Button>
                      <Button
                        onClick={() => setProductView("four")}
                        className={productView === "four" ? "act icon viewFour" : ""}
                      >
                        <TbGrid4X4 />
                      </Button>
                    </>
                  )}
                </div>

                <div className="ml-auto d-flex showByFiltring">
                  <Button onClick={handleClick}>
                    Show<span className="ml-1">{itemsPerPage}</span>{" "}
                    <FaAngleDown className="ml-2" />
                  </Button>
                  <Menu
                    className="mt-1 showPerPageDropDown"
                    anchorEl={anchorEl}
                    open={openDropDown}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleSelectItems(12)}>12</MenuItem>
                    <MenuItem onClick={() => handleSelectItems(24)}>24</MenuItem>
                    <MenuItem onClick={() => handleSelectItems(48)}>48</MenuItem>
                  </Menu>
                </div>
              </div>
            </div>

            <div className="listProduct d-flex">
              {currentProducts.map((product) => (
                <ProductItem key={product.id} itemView={productView} />
              ))}
            </div>

            <div className="paginationWrapper d-flex align-items-center justify-content-center mt-5">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(e, page) => setCurrentPage(page)}
                shape="rounded"
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
