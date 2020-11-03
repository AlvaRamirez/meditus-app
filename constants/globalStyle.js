import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  padding: 0;

}

#actividades{
  width: 100%;
    height: 71vh;
    color: white !important;
    margin: 0 auto;
    min-height: calc(81vh - 100px);
    text-align: center;
    padding-top: 18%;
    background-image: url(./assets/actividades.jpg);
    background-size: cover;
    background-attachment: fixed;
    height: auto;
}


#videos {
    width: 100%;
    /* height: 71vh; */
    color: white !important;
    margin: 0 auto;
    min-height: calc(87vh - 100px);
    text-align: center;
    padding-top: 16%;
    background-image: url(./assets/videos.jpg);
    background-size: cover;
    background-attachment: fixed;
    height: auto;
    overflow: hidden;
}

#nosotros{
  width: 100%;
    height: 71vh;
    color: white !important;
    margin: 0 auto;
    min-height: calc(115vh - 100px);
    text-align: center;
    padding-top: 18%;
    background-image: url(./assets/new.jpg);
    background-size: cover;
    background-attachment: fixed;
    height: auto;
}


#contacto{
  width: 100%;
    height: 71vh;
    color: white !important;
    margin: 0 auto;
    min-height: calc(81vh - 100px);
    text-align: center;
    padding-top: 18%;
    background-image: url(./assets/fondo.jpg);
    background-size: auto;
    background-attachment: fixed;
    height: auto;
}

body{
  margin: 0 auto;
  padding: 0%;
  font-family: 'Nunito Sans', sans-serif;
}

a{
  cursor: pointer !important;
  text-decoration:none !important;
  margin: 0 auto !important;
}

#fondocompleto {
  position: absolute;
  width: 100%;
  z-index: -10;
  opacity: 0.7;
  top: 620px;
}

.Ul-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-text-decoration: none;
    text-decoration: none;
    list-style: none;
    justify-content: space-around;
    -webkit-align-content: space-around;
    -ms-flex-line-pack: space-around;
    /* align-content: space-around; */
    font-size: 12.5px;
    margin: 0 auto;
    font-weight: 600;
    padding: 0;
    width: 33%;
    text-align: center;
}

.contpag{
  width: 100%;
  margin: 0 auto;
}

.context{
  width: 50%;
    margin: 0 auto;
    padding-top: 10%;
}


.sub1 {
  font-family: "Volkhov",serif;
  font-style: oblique;
  font-size: 16px;
}

.Li-header {

  text-align: center;
  margin: 0 auto;
  justify-content: center;
  transition: 0.7s all;
}

.ajust{
  margin: 0 auto;
    text-align: center;
    padding: 0px;
    cursor: auto;
}


.Li-header a{
  transition: 0.7s all;
}

.Li-header a:hover {
  opacity: 0.6;
  transition: 0.7s all;
}

.Li-header > .active {
color: rgb(80, 248, 234);

}

.Li-header a:focus {
  transition: 0.7s all;
  opacity: 0.8;

}
.Li-header a:active {
  transition: 0.7s all;
  opacity: 0.8;

}
.cont {
  display: block;
  width: 100%;
  padding-top: 15em;
  padding-bottom: 15em;
}
.contfo {
  display: flex;
  width: 100%;

}

.divcont{
  display:flex;
}
#botondona{
  margin: 20px !important;
    padding: 10px 10px 10px 10px!important;
    border-radius: 10px;
    background: #a472c7;
    color: white;
    font-weight: bolder;
    font-size: 15.4px;
    margin-top: 52px !important;
}
#contdona{
  text-align: center;
    margin-bottom: 6em;
    margin-top: 4.5em;
    border-top: 2px solid #b7b7b7;
    padding: 2em 1em 3em 1em;
    border-bottom: 2px solid #b7b7b7;
}
  

#donar{
  text-align: center;
    font-size: 14px;
    color: #424242;
    font-style: oblique;
    padding-bottom: 1.5em;
}
.contparra{
  margin-bottom: 5%;
}

.Ul-footer {
  display: flex;
  text-decoration: none;
  list-style: none;
  align-content: space-around;
  font-size: 11px;
  margin-top: 5px !important;
  margin: 0 auto;
  font-weight: 600;
  padding-top: 13px;
}

.Li-footer {
    padding: 0px 25px 0 25px;
    font-size: 12px;
    text-align: center;
    margin: 0 auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: 0.4s;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}


.Li-footer img {
    padding: 0px 20px 0 20px;
    font-size: 10px;
    text-align: center;
    margin: 0 auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: 0.4s;
    -webkit-transition: 0.4;
    transition: 0.4;
    width: 22px;
}

.Li-footer img:hover{
  transform: scale(1.1);
  transition: 0.4s;
}

#copy{
  color: gray;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.smooth-scroll-wrapper {
  position: fixed;
  z-index: 2;
  top: 0; 
  left: 0;
  overflow: hidden;
}

#meditu {
  outline: none;
  width: 33%;
}

#logo {
    width: 22%;
    margin: 0 auto;
}

textarea{
  width: 90%;
  height: 12vh;
  border-radius: 1em;
  border: none;
  background: #d4d4d4;
  outline: none;
  resize: none;
  padding: 10px;
  margin: 10px 0px 20px 10px;
}

.texto {
  font-size: 20px;
}
input{
  padding: 8px;
  border-radius: 0.88em;
  margin: 7px;
  border: none;
  background: #d4d4d4;
  outline: none;

}

#enviar{
  margin: 0 auto;
    padding: 8px 22px 8px 22px; 
}

#enviar:hover{
  background-color: rgb(24, 114, 156);
    transition: 1s all;
}

#mail{
  float: left !important;
  outline: none;
  width: 92%;
}



form {
  width: 100%;
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;
  outline: none;
}

.parra {
  font-size: 14.5px;
  font-family: 'Nunito Sans', sans-serif;
}

.imgpa{
  text-align: center;
    margin: 0 auto;
    width: 90%;
    border-radius: 3em;
    padding: 30px;
  
}


.titu{
  margin-bottom: 0%;
    font-size: 35px;
}

.contitu{
  margin-bottom: 4.5%;
}

.seccion {
  color: #0ff;
    font-family: Volkhov;
    font-size: 30px;
    text-align: center;
    opacity: 0.4;
    margin: 1em;
    font-weight: 100;
}

.sub2 {
  color: gray;
  font-family: Volkhov;
  font-size: 14px;
  border-left: 3px solid gray;
  padding-left: 5px;
  margin: 0 auto;

}

strong{
  font-weight: 600;
}

span {
  font-weight: bold;
  font-style: oblique;
}

video{
  width: 100%;
  z-index:-1000;
  background-size: cover;
  background-attachment: fixed;
  height: auto;
}


.App-header {
  background-color: #080F34;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: fixed;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: white;
    /* padding: 13px; */
    border-radius: 0em 0em 40em 40em;
    margin: 0 auto;
    margin: 20px;
    text-align: center;
    margin: 0 auto;
    text-align: center;
    height: 8.5vh !important;
    font-family: 'Nunito Sans',sans-serif;
    z-index: 99;
    width: 100%;
}


.btn {
  background-color: #4d8f88;
  border: none;
  color: white;
  padding: 7px 18px;
  font-size: 12px;
  border-radius: 1em;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  margin-right: 4.5em;
  cursor: pointer;
}



#ingresar {
  background-color: #4d8f8800 !important;
  transition: 0.7s all;
  text-decoration: none;
  display: contents;
  background-color: #4d8f8800;
  border: none;
  color: white;
  padding: 7px 18px;
  font-size: 12px;
  /* width: 6%; */
  border-radius: 1em;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  margin-right: 4.5em;
  cursor: pointer;
}

#ingresar:hover{
  opacity: 0.6;
  transition: 0.7s all;
}

footer {
    height: 60px;
    background-color: #040613;
    color: #fff;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    display: block;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    font-family: 'Segoe UI',sans-serif;
    margin: 0 auto;
}

header{height: 30px;}

section{
 background-color:#01dcff;
}

.inicio {
  min-height: calc(115vh - 100px); 
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: absolute;
    -webkit-align-items: center;
    -webkit-box-align: center;
    width: 100%;
    font-style: oblique;
    padding-top: 23em;
    -ms-flex-align: center;
    text-align: center;
    align-items: center;
    -webkit-box-pack: center;
    z-index: 1;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: white;
}


.textoini {
  width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top: 23%;
    font-style: oblique;
}

.subtit{
  font-weight: 400;
    font-size: 17px;
    padding-top: 10px;
    color: #ffffff;
}

.titulo {
  font-family: "Volkhov",serif;
    font-size: 60px;
    color: #01dcff;
    margin: 0 auto;
}

#unirme {
  background-color: #4d8f88;
  top: 373px;
  width: 90px;
  padding: 8px;
  transition: 1s all;
}

#unirme:hover {
  background-color: rgb(24, 114, 156);
  transition: 1s all;
}



.sub {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16.3px;
  margin: 0 auto;
  font-style: oblique;
  width: 40%;
  padding: 30px 0px 0px 10px;
  line-height: 2;
  float: left;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

header span.animated {
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  bottom: 50px;
  height: 4px;
  width: 4px;
  border-radius: 2px;
  background: #fff;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
}

.iz {
  width: 50%;
    margin: 0 auto;
    padding-top: 13.5em;
    text-align: left;
}

#iz {
  width: 50%;
}

.der {
  width: 40%;
}

#layout-modal{
  top:50px
}

#nosotrosi {
  width: 43%;
}

a{outline: none;}
button{
  outline: none;
}

#contactoi {
  width: 40%;
  border-radius: 1.5em;
  margin-left: 7em;
}

.conder {
  width: 50%;
}

header span::before,
header span::after {
  position: absolute;
  top: -23px;
  content: "";
  height: 30px;
  width: 4px;
  border-radius: 2px;
  background: #fff;
}

header span::before {
  left: -10px;
  -webkit-transform: rotate(-45deg);
  -moz-transform:    rotate(-45deg);
  -ms-transform:     rotate(-45deg);
  -o-transform:      rotate(-45deg);
  transform:         rotate(-45deg);
}

header span::after {
  right: -10px;
  -webkit-transform: rotate(45deg);
  -moz-transform:    rotate(45deg);
  -ms-transform:     rotate(45deg);
  -o-transform:      rotate(45deg);
  transform:         rotate(45deg);
}


/* Float Shadow */
.hvr-float-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  cursor: pointer !important;
  



}

.hvr-float-shadow:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: '';
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  /* W3C */
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform, opacity;
  transition-property: transform, opacity;
}
.hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  /* move the element up by 5px */
}
.hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}

/* Grow */
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.8s;
  transition-duration: 0.8s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

html body [data-ca3_iconfont="ETmodules"]::before {
  font-family: "ETmodules";
}
[data-ca3_icon]::before {
  font-weight: normal;
  content: attr(data-ca3_icon);
}

.ca3-scroll-down-arrow {
background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
background-size: contain;
background-repeat: no-repeat;
}

.ca3-scroll-down-link {
  height: 50px;
    width: 50px;
    cursor: auto !important;
    margin: 0 AUTO;
    line-height: 0px;
    position: absolute;
    left: 50%;
    bottom: 70px;
    color: #FFF;
    text-align: center;
    font-size: 70px;
    z-index: 90;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-shadow: 0px 0px 4px rgba(0,0,0,0.4);
    -webkit-animation: ca3_fade_move_down 2.5s ease-in-out infinite !important;
    animation: ca3_fade_move_down 2.5s ease-in-out infinite !important;
    -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
    -moz-animation: ca3_fade_move_down 2s ease-in-out infinite;
    -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
    animation: ca3_fade_move_down 2s ease-in-out infinite;
}


/*animated scroll arrow animation*/
@-webkit-keyframes ca3_fade_move_down {
0%   { -webkit-transform:translate(0,-20px); opacity: 0;  }
50%  { opacity: 1;  }
100% { -webkit-transform:translate(0,20px); opacity: 0; }
}
@-moz-keyframes ca3_fade_move_down {
0%   { -moz-transform:translate(0,-20px); opacity: 0;  }
50%  { opacity: 1;  }
100% { -moz-transform:translate(0,20px); opacity: 0; }
}
@keyframes ca3_fade_move_down {
0%   { transform:translate(0,-20px); opacity: 0;  }
50%  { opacity: 1;  }
100% { transform:translate(0,20px); opacity: 0; }
}

.contno{
  display: flex;
    width: 100%;
    margin: 30px 0px 0px 0px;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-top: 20px;
}

.ml{
  width: 33%;
}

#contnoo {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  padding-top: 25px;
}

  #salas {
    background-image: url('./assets/salas.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding: 35px;
    color: white;
    font-size: 13.5px;
    font-weight: 300;
    overflow: hidden;
    border-radius: 2em;
    cursor: pointer;
    transition: 1s all;
}

#cursos {
  background-image:  url('./assets/cursos.png') ;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 35px;
  color: white;
  font-size: 13.5px;
  font-weight: 300;
  border-radius: 2em;
  cursor: pointer;
  overflow: hidden;
  transition: 1s all;
}


.contents{
  display: contents;
  text-decoration: none;
}



  #mercado {
    width: 8%;

    transition: 0.6s;
  
    text-align: center;

}

#mercado:hover{
  opacity: 0.8;
  transition: 0.6s;
}

h2{
  font-family: "Volkhov",serif;
  font-style: oblique;
  margin-top: 10px;
}

/* Float */
.hvr-float {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.6s;
  transition-duration: 0.6s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  cursor: pointer !important;
}
.hvr-float:hover, .hvr-float:focus, .hvr-float:active {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
}

.slick-slider {
    text-align: center;
    border: none;
    outline: none;
    margin: 0 auto;
    position: relative;
    display: block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: pan-y;
    height: auto;
    overflow: hidden;
    padding-right: 0em;
    /* width: 95%; */
    /* padding: 20px; */
    margin: 0 auto;
}
.slick-list{

text-align: center; 
    border: none;
    outline: none;
    margin: 0 auto;
    position: relative;
    display: block;
    /* user-select: none; */
    /* touch-action: pan-y; */
    padding: 0;
}

.slick-slide .slick-active .slick-current{
  outline: none;
    
}

.slick-slider :focus{
  border: none;
  outline: none;
}

#arriba{

  float: right;
    -webkit-transition: 1.5s;
    transition: 1.5s;
    cursor: pointer;
    border: none;
    z-index: 1000;
    z-index: -1;
    opacity: 10;
    visibility: visible;

}

#arriba:active {
  visibility: visible;
  opacity: 1;
  transition: 1.5s;
  margin: 0 auto;
}

#arriba:hover{
  transform: scale(1.1);
  transition: 0.8s;
  cursor: pointer;
}

#contarri{
  float: right;
    width: 100%;
    position: fixed;
    /* z-index: 0; */
    top: 730px;
    display: block;
    /* z-index: -1; */
    z-index: 1000;
    -webkit-transition: 0.8s;
    transition: 0.8s;
    left: -100px;

}


.fondo {
  background-image: url('./assets/fondocompleto.png');
  background-size: auto;
  background-repeat: round;
  height: auto;
}

input {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 13px;
}

.ytp-embed:not(.ad-showing) .ytp-title-text{
  display: none !important;
}
.ytp-chrome-top{
  display: none !important;
  z-index: -10 !important;
}
.ytp-show-cards-title{
  display: none !important;
  z-index: -10 !important;
}
.ytp-cued-thumbnail-overlay-image{
  background-size: auto !important;
  -webkit-background-size: auto !important;
}
.ytp-title-text{
  display: none !important;
}


iframe {
    margin: 0 auto;
    border-radius: 1.2em;
    text-align: center;
    border: none;
    padding: 0;
    outline: none;
    width: 65%;
    padding: 0;
    margin: 0 auto;
    height: 55vh;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    -webkit-transition: 1s !important;
    -webkit-transition: 1s !important;
    -webkit-transition: 1s !important;
    transition: 1s !important;
}




iframe:active{

transform:scale(1.1);
transition:1s !important;

}

.ytp-title-text{
  display: none !important;
}

.slick-arrow{
  display: none !important;
}


.slick-track{
  z-index: 1000 !important;
    opacity: 1!important;
    display: flex;

}


.iframe-container iframe{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: auto !important;
  -webkit-background-size: auto !important;
}

.iframe-container{
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
  background-size: auto !important;
  -webkit-background-size: auto !important;
}

    
@media (min-width: 481px) and (max-width: 900px) {
  
  .App-header{
    background-color:red;
  }

  #contnoo{
    width: 100% !important;
    text-align: center !important;
    display:block
  }
  
  .iz{
    width: 50%;
    margin: 0 auto;
    padding-top: 14em;
    text-align: left;
  }

  .textoini {
    position: absolute;
    margin-top: 0 auto;
    margin-top: 22em;
    margin-left: 3em;
}

.sub {
  font-family: 'Nunito Sans',sans-serif;
    font-size: 16.3px;
    margin: 0 auto;
    font-style: oblique;
    width: 90%;
    padding: 30px 0px 0px 10px;
    line-height: 2;
    float: left;
}

.titulo {
    font-family: "Volkhov",serif;
    font-size: 45px;
    margin: 0 auto;
}

}



`;

export default GlobalStyle;
