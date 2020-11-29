import "./App.css";

function App() {
  return (
    <div>
      {/* wpf loader Two */}
      <div id="wpf-loader-two">
        <div className="wpf-loader-two-inner">
          <span>Loading</span>
        </div>
      </div>
      {/* / wpf loader Two */}
      {/* SCROLL TOP BUTTON */}
      <a className="scrollToTop" href="#">
        <i className="fa fa-chevron-up" />
      </a>
      {/* END SCROLL TOP BUTTON */}
      {/* Start header section */}
      <header id="aa-header">
        {/* start header top  */}
        <div className="aa-header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-header-top-area">
                  {/* start header top left */}
                  <div className="aa-header-top-left">
                    {/* start language */}
                    <div className="aa-language">
                      <div className="dropdown">
                        <a
                          className="btn dropdown-toggle"
                          href="#"
                          type="button"
                          id="dropdownMenu1"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          <img src="img/flag/english.jpg" alt="english flag" />
                          ENGLISH
                          <span className="caret" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenu1"
                        >
                          <li>
                            <a href="#">
                              <img src="img/flag/french.jpg" alt />
                              FRENCH
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="img/flag/english.jpg" alt />
                              ENGLISH
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* / language */}
                    {/* start currency */}
                    <div className="aa-currency">
                      <div className="dropdown">
                        <a
                          className="btn dropdown-toggle"
                          href="#"
                          type="button"
                          id="dropdownMenu1"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          <i className="fa fa-usd" />
                          USD
                          <span className="caret" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenu1"
                        >
                          <li>
                            <a href="#">
                              <i className="fa fa-euro" />
                              EURO
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-jpy" />
                              YEN
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* / currency */}
                    {/* start cellphone */}
                    <div className="cellphone hidden-xs">
                      <p>
                        <span className="fa fa-phone" />
                        00-62-658-658
                      </p>
                    </div>
                    {/* / cellphone */}
                  </div>
                  {/* / header top left */}
                  <div className="aa-header-top-right">
                    <ul className="aa-head-top-nav-right">
                      <li>
                        <a href="account.html">My Account</a>
                      </li>
                      <li className="hidden-xs">
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li className="hidden-xs">
                        <a href="cart.html">My Cart</a>
                      </li>
                      <li className="hidden-xs">
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href data-toggle="modal" data-target="#login-modal">
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / header top  */}
        {/* start header bottom  */}
        <div className="aa-header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-header-bottom-area">
                  {/* logo  */}
                  <div className="aa-logo">
                    {/* Text based logo */}
                    <a href="index.html">
                      <span className="fa fa-shopping-cart" />
                      <p>
                        daily<strong>Shop</strong>{" "}
                        <span>Your Shopping Partner</span>
                      </p>
                    </a>
                    {/* img based logo */}
                    {/* <a href="index.html"><img src="img/logo.jpg" alt="logo img"></a> */}
                  </div>
                  {/* / logo  */}
                  {/* cart box */}
                  <div className="aa-cartbox">
                    <a className="aa-cart-link" href="#">
                      <span className="fa fa-shopping-basket" />
                      <span className="aa-cart-title">SHOPPING CART</span>
                      <span className="aa-cart-notify">2</span>
                    </a>
                    <div className="aa-cartbox-summary">
                      <ul>
                        <li>
                          <a className="aa-cartbox-img" href="#">
                            <img src="img/woman-small-2.jpg" alt="img" />
                          </a>
                          <div className="aa-cartbox-info">
                            <h4>
                              <a href="#">Product Name</a>
                            </h4>
                            <p>1 x $250</p>
                          </div>
                          <a className="aa-remove-product" href="#">
                            <span className="fa fa-times" />
                          </a>
                        </li>
                        <li>
                          <a className="aa-cartbox-img" href="#">
                            <img src="img/woman-small-1.jpg" alt="img" />
                          </a>
                          <div className="aa-cartbox-info">
                            <h4>
                              <a href="#">Product Name</a>
                            </h4>
                            <p>1 x $250</p>
                          </div>
                          <a className="aa-remove-product" href="#">
                            <span className="fa fa-times" />
                          </a>
                        </li>
                        <li>
                          <span className="aa-cartbox-total-title">Total</span>
                          <span className="aa-cartbox-total-price">$500</span>
                        </li>
                      </ul>
                      <a
                        className="aa-cartbox-checkout aa-primary-btn"
                        href="checkout.html"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                  {/* / cart box */}
                  {/* search box */}
                  <div className="aa-search-box">
                    <form action>
                      <input
                        type="text"
                        name
                        id
                        placeholder="Search here ex. 'man' "
                      />
                      <button type="submit">
                        <span className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                  {/* / search box */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / header bottom  */}
      </header>
      {/* / header section */}
      {/* menu */}
      <section id="menu">
        <div className="container">
          <div className="menu-area">
            {/* Navbar */}
            <div className="navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="navbar-collapse collapse">
                {/* Left nav */}
                <ul className="nav navbar-nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">
                      Men <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Casual</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Formal</a>
                      </li>
                      <li>
                        <a href="#">Standard</a>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">
                          And more.. <span className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Sleep Wear</a>
                          </li>
                          <li>
                            <a href="#">Sandals</a>
                          </li>
                          <li>
                            <a href="#">Loafers</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Women <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Kurta &amp; Kurti</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">Casual</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Formal</a>
                      </li>
                      <li>
                        <a href="#">Sarees</a>
                      </li>
                      <li>
                        <a href="#">Shoes</a>
                      </li>
                      <li>
                        <a href="#">
                          And more.. <span className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Sleep Wear</a>
                          </li>
                          <li>
                            <a href="#">Sandals</a>
                          </li>
                          <li>
                            <a href="#">Loafers</a>
                          </li>
                          <li>
                            <a href="#">
                              And more.. <span className="caret" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="#">Rings</a>
                              </li>
                              <li>
                                <a href="#">Earrings</a>
                              </li>
                              <li>
                                <a href="#">Jewellery Sets</a>
                              </li>
                              <li>
                                <a href="#">Lockets</a>
                              </li>
                              <li className="disabled">
                                <a className="disabled" href="#">
                                  Disabled item
                                </a>
                              </li>
                              <li>
                                <a href="#">Jeans</a>
                              </li>
                              <li>
                                <a href="#">Polo T-Shirts</a>
                              </li>
                              <li>
                                <a href="#">SKirts</a>
                              </li>
                              <li>
                                <a href="#">Jackets</a>
                              </li>
                              <li>
                                <a href="#">Tops</a>
                              </li>
                              <li>
                                <a href="#">Make Up</a>
                              </li>
                              <li>
                                <a href="#">Hair Care</a>
                              </li>
                              <li>
                                <a href="#">Perfumes</a>
                              </li>
                              <li>
                                <a href="#">Skin Care</a>
                              </li>
                              <li>
                                <a href="#">Hand Bags</a>
                              </li>
                              <li>
                                <a href="#">Single Bags</a>
                              </li>
                              <li>
                                <a href="#">Travel Bags</a>
                              </li>
                              <li>
                                <a href="#">Wallets &amp; Belts</a>
                              </li>
                              <li>
                                <a href="#">Sunglases</a>
                              </li>
                              <li>
                                <a href="#">Nail</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Kids <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Casual</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Formal</a>
                      </li>
                      <li>
                        <a href="#">Standard</a>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">
                          And more.. <span className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Sleep Wear</a>
                          </li>
                          <li>
                            <a href="#">Sandals</a>
                          </li>
                          <li>
                            <a href="#">Loafers</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                  <li>
                    <a href="#">
                      Digital <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Camera</a>
                      </li>
                      <li>
                        <a href="#">Mobile</a>
                      </li>
                      <li>
                        <a href="#">Tablet</a>
                      </li>
                      <li>
                        <a href="#">Laptop</a>
                      </li>
                      <li>
                        <a href="#">Accesories</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Furniture</a>
                  </li>
                  <li>
                    <a href="blog-archive.html">
                      Blog <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog-archive.html">Blog Style 1</a>
                      </li>
                      <li>
                        <a href="blog-archive-2.html">Blog Style 2</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="#">
                      Pages <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="product.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="product-detail.html">Shop Single</a>
                      </li>
                      <li>
                        <a href="404.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*/.nav-collapse */}
            </div>
          </div>
        </div>
      </section>
      {/* / menu */}
      {/* Start slider */}
      <section id="aa-slider">
        <div className="aa-slider-area">
          <div id="sequence" className="seq">
            <div className="seq-screen">
              <ul className="seq-canvas">
                {/* single slide item */}
                <li>
                  <div className="seq-model">
                    <img data-seq src="/img/slider/1.jpg" alt="Men slide img" />
                  </div>
                  <div className="seq-title">
                    <span data-seq>Save Up to 75% Off</span>
                    <h2 data-seq>Men Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      className="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>
                {/* single slide item */}
                <li>
                  <div className="seq-model">
                    <img
                      data-seq
                      src="img/slider/2.jpg"
                      alt="Wristwatch slide img"
                    />
                  </div>
                  <div className="seq-title">
                    <span data-seq>Save Up to 40% Off</span>
                    <h2 data-seq>Wristwatch Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      className="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>
                {/* single slide item */}
                <li>
                  <div className="seq-model">
                    <img
                      data-seq
                      src="img/slider/3.jpg"
                      alt="Women Jeans slide img"
                    />
                  </div>
                  <div className="seq-title">
                    <span data-seq>Save Up to 75% Off</span>
                    <h2 data-seq>Jeans Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      className="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>
                {/* single slide item */}
                <li>
                  <div className="seq-model">
                    <img
                      data-seq
                      src="img/slider/4.jpg"
                      alt="Shoes slide img"
                    />
                  </div>
                  <div className="seq-title">
                    <span data-seq>Save Up to 75% Off</span>
                    <h2 data-seq>Exclusive Shoes</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      className="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>
                {/* single slide item */}
                <li>
                  <div className="seq-model">
                    <img
                      data-seq
                      src="img/slider/5.jpg"
                      alt="Male Female slide img"
                    />
                  </div>
                  <div className="seq-title">
                    <span data-seq>Save Up to 50% Off</span>
                    <h2 data-seq>Best Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      className="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* slider navigation btn */}
            <fieldset
              className="seq-nav"
              aria-controls="sequence"
              aria-label="Slider buttons"
            >
              <a type="button" className="seq-prev" aria-label="Previous">
                <span className="fa fa-angle-left" />
              </a>
              <a type="button" className="seq-next" aria-label="Next">
                <span className="fa fa-angle-right" />
              </a>
            </fieldset>
          </div>
        </div>
      </section>
      {/* / slider */}
      {/* Start Promo section */}
      <section id="aa-promo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-promo-area">
                <div className="row">
                  {/* promo left */}
                  <div className="col-md-5 no-padding">
                    <div className="aa-promo-left">
                      <div className="aa-promo-banner">
                        <img src="img/promo-banner-1.jpg" alt="img" />
                        <div className="aa-prom-content">
                          <span>75% Off</span>
                          <h4>
                            <a href="#">For Women</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* promo right */}
                  <div className="col-md-7 no-padding">
                    <div className="aa-promo-right">
                      <div className="aa-single-promo-right">
                        <div className="aa-promo-banner">
                          <img src="img/promo-banner-3.jpg" alt="img" />
                          <div className="aa-prom-content">
                            <span>Exclusive Item</span>
                            <h4>
                              <a href="#">For Men</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="aa-single-promo-right">
                        <div className="aa-promo-banner">
                          <img src="img/promo-banner-2.jpg" alt="img" />
                          <div className="aa-prom-content">
                            <span>Sale Off</span>
                            <h4>
                              <a href="#">On Shoes</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="aa-single-promo-right">
                        <div className="aa-promo-banner">
                          <img src="img/promo-banner-4.jpg" alt="img" />
                          <div className="aa-prom-content">
                            <span>New Arrivals</span>
                            <h4>
                              <a href="#">For Kids</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="aa-single-promo-right">
                        <div className="aa-promo-banner">
                          <img src="img/promo-banner-5.jpg" alt="img" />
                          <div className="aa-prom-content">
                            <span>25% Off</span>
                            <h4>
                              <a href="#">For Bags</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Promo section */}
      {/* Products section */}
      <section id="aa-product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-product-area">
                  <div className="aa-product-inner">
                    {/* start prduct navigation */}
                    <ul className="nav nav-tabs aa-products-tab">
                      <li className="active">
                        <a href="#men" data-toggle="tab">
                          Men
                        </a>
                      </li>
                      <li>
                        <a href="#women" data-toggle="tab">
                          Women
                        </a>
                      </li>
                      <li>
                        <a href="#sports" data-toggle="tab">
                          Sports
                        </a>
                      </li>
                      <li>
                        <a href="#electronics" data-toggle="tab">
                          Electronics
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      {/* Start men product category */}
                      <div className="tab-pane fade in active" id="men">
                        <ul className="aa-product-catg">
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-2.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Polo T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/t-shirt-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Polo T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-4.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Polo T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-hot" href="#">
                              HOT!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-5.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-6.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Polo T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-2.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Polo T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/t-shirt-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">
                          Browse all Product{" "}
                          <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                      {/* / men product category */}
                      {/* start women product category */}
                      <div className="tab-pane fade" id="women">
                        <ul className="aa-product-catg">
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">This is Title</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-2.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-hot" href="#">
                              HOT!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-3.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-4.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-5.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-6.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-7.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">
                          Browse all Product{" "}
                          <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                      {/* / women product category */}
                      {/* start sports product category */}
                      <div className="tab-pane fade" id="sports">
                        <ul className="aa-product-catg">
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">This is Title</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-2.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-3.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-4.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-hot" href="#">
                              HOT!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-5.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-6.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-7.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-8.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                      </div>
                      {/* / sports product category */}
                      {/* start electronic product category */}
                      <div className="tab-pane fade" id="electronics">
                        <ul className="aa-product-catg">
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">This is Title</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-2.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-3.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-4.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-hot" href="#">
                              HOT!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-5.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-6.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-7.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-8.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o" />
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">
                          Browse all Product{" "}
                          <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                      {/* / electronic product category */}
                    </div>
                    {/* quick view modal */}
                    <div
                      className="modal fade"
                      id="quick-view-modal"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="myModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-body">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              ×
                            </button>
                            <div className="row">
                              {/* Modal view slider */}
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="aa-product-view-slider">
                                  <div
                                    className="simpleLens-gallery-container"
                                    id="demo-1"
                                  >
                                    <div className="simpleLens-container">
                                      <div className="simpleLens-big-image-container">
                                        <a
                                          className="simpleLens-lens-image"
                                          data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                        >
                                          <img
                                            src="img/view-slider/medium/polo-shirt-1.png"
                                            className="simpleLens-big-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="simpleLens-thumbnails-container">
                                      <a
                                        href="#"
                                        className="simpleLens-thumbnail-wrapper"
                                        data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                        data-big-image="img/view-slider/medium/polo-shirt-1.png"
                                      >
                                        <img src="img/view-slider/thumbnail/polo-shirt-1.png" />
                                      </a>
                                      <a
                                        href="#"
                                        className="simpleLens-thumbnail-wrapper"
                                        data-lens-image="img/view-slider/large/polo-shirt-3.png"
                                        data-big-image="img/view-slider/medium/polo-shirt-3.png"
                                      >
                                        <img src="img/view-slider/thumbnail/polo-shirt-3.png" />
                                      </a>
                                      <a
                                        href="#"
                                        className="simpleLens-thumbnail-wrapper"
                                        data-lens-image="img/view-slider/large/polo-shirt-4.png"
                                        data-big-image="img/view-slider/medium/polo-shirt-4.png"
                                      >
                                        <img src="img/view-slider/thumbnail/polo-shirt-4.png" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Modal view content */}
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="aa-product-view-content">
                                  <h3>T-Shirt</h3>
                                  <div className="aa-price-block">
                                    <span className="aa-product-view-price">
                                      $34.99
                                    </span>
                                    <p className="aa-product-avilability">
                                      Avilability: <span>In stock</span>
                                    </p>
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Officiis animi, veritatis
                                    quae repudiandae quod nulla porro quidem,
                                    itaque quis quaerat!
                                  </p>
                                  <h4>Size</h4>
                                  <div className="aa-prod-view-size">
                                    <a href="#">S</a>
                                    <a href="#">M</a>
                                    <a href="#">L</a>
                                    <a href="#">XL</a>
                                  </div>
                                  <div className="aa-prod-quantity">
                                    <form action>
                                      <select name id>
                                        <option value={0} selected={1}>
                                          1
                                        </option>
                                        <option value={1}>2</option>
                                        <option value={2}>3</option>
                                        <option value={3}>4</option>
                                        <option value={4}>5</option>
                                        <option value={5}>6</option>
                                      </select>
                                    </form>
                                    <p className="aa-prod-category">
                                      Category: <a href="#">Polo T-Shirt</a>
                                    </p>
                                  </div>
                                  <div className="aa-prod-view-bottom">
                                    <a href="#" className="aa-add-to-cart-btn">
                                      <span className="fa fa-shopping-cart" />
                                      Add To Cart
                                    </a>
                                    <a href="#" className="aa-add-to-cart-btn">
                                      View Details
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.modal-content */}
                      </div>
                      {/* /.modal-dialog */}
                    </div>
                    {/* / quick view modal */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Products section */}
      {/* banner section */}
      <section id="aa-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-banner-area">
                  <a href="#">
                    <img
                      src="img/fashion-banner.jpg"
                      alt="fashion banner img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* popular section */}
      <section id="aa-popular-category">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-popular-category-area">
                  {/* start prduct navigation */}
                  <ul className="nav nav-tabs aa-products-tab">
                    <li className="active">
                      <a href="#popular" data-toggle="tab">
                        Popular
                      </a>
                    </li>
                    <li>
                      <a href="#featured" data-toggle="tab">
                        Featured
                      </a>
                    </li>
                    <li>
                      <a href="#latest" data-toggle="tab">
                        Latest
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    {/* Start men popular category */}
                    <div className="tab-pane fade in active" id="popular">
                      <ul className="aa-product-catg aa-popular-slider">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-2.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">
                            SALE!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-2.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out" href="#">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/t-shirt-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                          </figure>
                          <figcaption>
                            <h4 className="aa-product-title">
                              <a href="#">T-Shirt</a>
                            </h4>
                            <span className="aa-product-price">$45.50</span>
                          </figcaption>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out" href="#">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-3.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-4.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot" href="#">
                            HOT!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-4.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot" href="#">
                            HOT!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">This is Title</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">
                            SALE!
                          </span>
                        </li>
                      </ul>
                      <a className="aa-browse-btn" href="#">
                        Browse all Product{" "}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                    {/* / popular product category */}
                    {/* start featured product category */}
                    <div className="tab-pane fade" id="featured">
                      <ul className="aa-product-catg aa-featured-slider">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-2.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">
                            SALE!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-2.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out" href="#">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/t-shirt-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                          </figure>
                          <figcaption>
                            <h4 className="aa-product-title">
                              <a href="#">T-Shirt</a>
                            </h4>
                            <span className="aa-product-price">$45.50</span>
                          </figcaption>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out" href="#">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-3.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-4.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot" href="#">
                            HOT!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-4.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot" href="#">
                            HOT!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">This is Title</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">
                            SALE!
                          </span>
                        </li>
                      </ul>
                      <a className="aa-browse-btn" href="#">
                        Browse all Product{" "}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                    {/* / featured product category */}
                    {/* start latest product category */}
                    <div className="tab-pane fade" id="latest">
                      <ul className="aa-product-catg aa-latest-slider">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-2.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">
                            SALE!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-2.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out" href="#">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/t-shirt-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                          </figure>
                          <figcaption>
                            <h4 className="aa-product-title">
                              <a href="#">T-Shirt</a>
                            </h4>
                            <span className="aa-product-price">$45.50</span>
                          </figcaption>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out" href="#">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-3.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-4.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot" href="#">
                            HOT!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-4.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot" href="#">
                            HOT!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">This is Title</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
                            </figcaption>
                          </figure>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale" href="#">
                            SALE!
                          </span>
                        </li>
                      </ul>
                      <a className="aa-browse-btn" href="#">
                        Browse all Product{" "}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                    {/* / latest product category */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / popular section */}
      {/* Support section */}
      <section id="aa-support">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-support-area">
                {/* single support */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-truck" />
                    <h4>FREE SHIPPING</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam, nobis.
                    </p>
                  </div>
                </div>
                {/* single support */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-clock-o" />
                    <h4>30 DAYS MONEY BACK</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam, nobis.
                    </p>
                  </div>
                </div>
                {/* single support */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-phone" />
                    <h4>SUPPORT 24/7</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam, nobis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Support section */}
      {/* Testimonial */}
      <section id="aa-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-testimonial-area">
                <ul className="aa-testimonial-slider">
                  {/* single slide */}
                  <li>
                    <div className="aa-testimonial-single">
                      <img
                        className="aa-testimonial-img"
                        src="img/testimonial-img-2.jpg"
                        alt="testimonial img"
                      />
                      <span className="fa fa-quote-left aa-testimonial-quote" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt distinctio omnis possimus, facere, quidem
                        qui!consectetur adipisicing elit. Sunt distinctio omnis
                        possimus, facere, quidem qui.
                      </p>
                      <div className="aa-testimonial-info">
                        <p>Allison</p>
                        <span>Designer</span>
                        <a href="#">Dribble.com</a>
                      </div>
                    </div>
                  </li>
                  {/* single slide */}
                  <li>
                    <div className="aa-testimonial-single">
                      <img
                        className="aa-testimonial-img"
                        src="img/testimonial-img-1.jpg"
                        alt="testimonial img"
                      />
                      <span className="fa fa-quote-left aa-testimonial-quote" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt distinctio omnis possimus, facere, quidem
                        qui!consectetur adipisicing elit. Sunt distinctio omnis
                        possimus, facere, quidem qui.
                      </p>
                      <div className="aa-testimonial-info">
                        <p>KEVIN MEYER</p>
                        <span>CEO</span>
                        <a href="#">Alphabet</a>
                      </div>
                    </div>
                  </li>
                  {/* single slide */}
                  <li>
                    <div className="aa-testimonial-single">
                      <img
                        className="aa-testimonial-img"
                        src="img/testimonial-img-3.jpg"
                        alt="testimonial img"
                      />
                      <span className="fa fa-quote-left aa-testimonial-quote" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt distinctio omnis possimus, facere, quidem
                        qui!consectetur adipisicing elit. Sunt distinctio omnis
                        possimus, facere, quidem qui.
                      </p>
                      <div className="aa-testimonial-info">
                        <p>Luner</p>
                        <span>COO</span>
                        <a href="#">Kinatic Solution</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Testimonial */}
      {/* Latest Blog */}
      <section id="aa-latest-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-latest-blog-area">
                <h2>LATEST BLOG</h2>
                <div className="row">
                  {/* single latest blog */}
                  <div className="col-md-4 col-sm-4">
                    <div className="aa-latest-blog-single">
                      <figure className="aa-blog-img">
                        <a href="#">
                          <img src="img/promo-banner-1.jpg" alt="img" />
                        </a>
                        <figcaption className="aa-blog-img-caption">
                          <span href="#">
                            <i className="fa fa-eye" />
                            5K
                          </span>
                          <a href="#">
                            <i className="fa fa-thumbs-o-up" />
                            426
                          </a>
                          <a href="#">
                            <i className="fa fa-comment-o" />
                            20
                          </a>
                          <span href="#">
                            <i className="fa fa-clock-o" />
                            June 26, 2016
                          </span>
                        </figcaption>
                      </figure>
                      <div className="aa-blog-info">
                        <h3 className="aa-blog-title">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Assumenda, ad? Autem quos natus nisi aperiam,
                          beatae, fugiat odit vel impedit dicta enim repellendus
                          animi. Expedita quas reprehenderit incidunt,
                          voluptates corporis.
                        </p>
                        <a href="#" className="aa-read-mor-btn">
                          Read more <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* single latest blog */}
                  <div className="col-md-4 col-sm-4">
                    <div className="aa-latest-blog-single">
                      <figure className="aa-blog-img">
                        <a href="#">
                          <img src="img/promo-banner-3.jpg" alt="img" />
                        </a>
                        <figcaption className="aa-blog-img-caption">
                          <span href="#">
                            <i className="fa fa-eye" />
                            5K
                          </span>
                          <a href="#">
                            <i className="fa fa-thumbs-o-up" />
                            426
                          </a>
                          <a href="#">
                            <i className="fa fa-comment-o" />
                            20
                          </a>
                          <span href="#">
                            <i className="fa fa-clock-o" />
                            June 26, 2016
                          </span>
                        </figcaption>
                      </figure>
                      <div className="aa-blog-info">
                        <h3 className="aa-blog-title">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Assumenda, ad? Autem quos natus nisi aperiam,
                          beatae, fugiat odit vel impedit dicta enim repellendus
                          animi. Expedita quas reprehenderit incidunt,
                          voluptates corporis.
                        </p>
                        <a href="#" className="aa-read-mor-btn">
                          Read more <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* single latest blog */}
                  <div className="col-md-4 col-sm-4">
                    <div className="aa-latest-blog-single">
                      <figure className="aa-blog-img">
                        <a href="#">
                          <img src="img/promo-banner-1.jpg" alt="img" />
                        </a>
                        <figcaption className="aa-blog-img-caption">
                          <span href="#">
                            <i className="fa fa-eye" />
                            5K
                          </span>
                          <a href="#">
                            <i className="fa fa-thumbs-o-up" />
                            426
                          </a>
                          <a href="#">
                            <i className="fa fa-comment-o" />
                            20
                          </a>
                          <span href="#">
                            <i className="fa fa-clock-o" />
                            June 26, 2016
                          </span>
                        </figcaption>
                      </figure>
                      <div className="aa-blog-info">
                        <h3 className="aa-blog-title">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Assumenda, ad? Autem quos natus nisi aperiam,
                          beatae, fugiat odit vel impedit dicta enim repellendus
                          animi. Expedita quas reprehenderit incidunt,
                          voluptates corporis.
                        </p>
                        <a href="#" className="aa-read-mor-btn">
                          Read more <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Latest Blog */}
      {/* Client Brand */}
      <section id="aa-client-brand">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-client-brand-area">
                <ul className="aa-client-brand-slider">
                  <li>
                    <a href="#">
                      <img src="img/client-brand-java.png" alt="java img" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/client-brand-jquery.png" alt="jquery img" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/client-brand-html5.png" alt="html5 img" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/client-brand-css3.png" alt="css3 img" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="img/client-brand-wordpress.png"
                        alt="wordPress img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/client-brand-joomla.png" alt="joomla img" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/client-brand-java.png" alt="java img" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/client-brand-jquery.png" alt="jquery img" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/client-brand-html5.png" alt="html5 img" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/client-brand-css3.png" alt="css3 img" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="img/client-brand-wordpress.png"
                        alt="wordPress img"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Client Brand */}
      {/* Subscribe section */}
      <section id="aa-subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-subscribe-area">
                <h3>Subscribe our newsletter </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                  velit!
                </p>
                <form action className="aa-subscribe-form">
                  <input type="email" name id placeholder="Enter your Email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Subscribe section */}
      {/* footer */}
      <footer id="aa-footer">
        {/* footer bottom */}
        <div className="aa-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-footer-top-area">
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="aa-footer-widget">
                        <h3>Main Menu</h3>
                        <ul className="aa-footer-nav">
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">Our Services</a>
                          </li>
                          <li>
                            <a href="#">Our Products</a>
                          </li>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="aa-footer-widget">
                        <div className="aa-footer-widget">
                          <h3>Knowledge Base</h3>
                          <ul className="aa-footer-nav">
                            <li>
                              <a href="#">Delivery</a>
                            </li>
                            <li>
                              <a href="#">Returns</a>
                            </li>
                            <li>
                              <a href="#">Services</a>
                            </li>
                            <li>
                              <a href="#">Discount</a>
                            </li>
                            <li>
                              <a href="#">Special Offer</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="aa-footer-widget">
                        <div className="aa-footer-widget">
                          <h3>Useful Links</h3>
                          <ul className="aa-footer-nav">
                            <li>
                              <a href="#">Site Map</a>
                            </li>
                            <li>
                              <a href="#">Search</a>
                            </li>
                            <li>
                              <a href="#">Advanced Search</a>
                            </li>
                            <li>
                              <a href="#">Suppliers</a>
                            </li>
                            <li>
                              <a href="#">FAQ</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="aa-footer-widget">
                        <div className="aa-footer-widget">
                          <h3>Contact Us</h3>
                          <address>
                            <p> 25 Astor Pl, NY 10003, USA</p>
                            <p>
                              <span className="fa fa-phone" />
                              +1 212-982-4589
                            </p>
                            <p>
                              <span className="fa fa-envelope" />
                              dailyshop@gmail.com
                            </p>
                          </address>
                          <div className="aa-footer-social">
                            <a href="#">
                              <span className="fa fa-facebook" />
                            </a>
                            <a href="#">
                              <span className="fa fa-twitter" />
                            </a>
                            <a href="#">
                              <span className="fa fa-google-plus" />
                            </a>
                            <a href="#">
                              <span className="fa fa-youtube" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-bottom */}
        <div className="aa-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-footer-bottom-area">
                  <p>
                    Designed by <a href="http://www.markups.io/">MarkUps.io</a>
                  </p>
                  <div className="aa-footer-payment">
                    <span className="fa fa-cc-mastercard" />
                    <span className="fa fa-cc-visa" />
                    <span className="fa fa-paypal" />
                    <span className="fa fa-cc-discover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* / footer */}
      {/* Login Modal */}
      <div
        className="modal fade"
        id="login-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
              <h4>Login or Register</h4>
              <form className="aa-login-form" action>
                <label htmlFor>
                  Username or Email address<span>*</span>
                </label>
                <input type="text" placeholder="Username or email" />
                <label htmlFor>
                  Password<span>*</span>
                </label>
                <input type="password" placeholder="Password" />
                <button className="aa-browse-btn" type="submit">
                  Login
                </button>
                <label htmlFor="rememberme" className="rememberme">
                  <input type="checkbox" id="rememberme" /> Remember me{" "}
                </label>
                <p className="aa-lost-password">
                  <a href="#">Lost your password?</a>
                </p>
                <div className="aa-register-now">
                  Don't have an account?<a href="account.html">Register now!</a>
                </div>
              </form>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </div>
  );
}
export default App;
