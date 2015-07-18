.nav-main {
  width: 100%;
  height: 50px;
  background: navy;
  position: relative;
}
.nav-main .logo {
  position: absolute;
  left: 12.5px;
  top: 12.5px;
  width: 100px;
  height: 25px;
}
.nav-main .links {
  width: 100%;
  text-align: center;
}
.nav-main .links .link {
  margin-top: 12px;
  display: inline-block;
  border-right: 1px solid white;
  padding: 4px 10px;
}
.nav-main .links .link a {
  text-decoration: none;
  color: white;
}
.nav-main .links .link:last-child {
  border-right: none;
}

.carousel {
  width: 100%;
  height: 300px;
  background: white;
  position: relative;
  overflow: hidden;
}

.carousel #slide-wrapper {
  width: 500%;
  height: 100%;
  transition: all 400ms;
}

.carousel .slide {
  float: left;
  width: 20%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.carousel .slide.red {
  background: red;
}

.carousel .slide.green {
  background: green;
}

.carousel .slide.blue {
  background: blue;
}

.carousel .slide.orange {
  background: orange;
}

.carousel .slide.yellow {
  background: yellow;
}

.carousel .slide.yellow {
  background: yellow;
}

.carousel .arrow.left {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 1;
  width: 100px;
}

.carousel .arrow-icon {
  cursor: pointer;
  width: 100%;
  color: white;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -29.5px;
}
