import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


const GlobalStyle = createGlobalStyle`


 @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap'); 

*{
  padding: 0;

}

#actividades{
  width: 100%;
    height: 71vh;
    color: white !important;
    margin: 0 auto;
    min-height: calc(112vh - 100px);
    display: flex;
    text-align: center;
    /* padding-top: 18%; */
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
    min-height: calc(113vh  - 100px);
    text-align: center;
  
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
    background-image: url(./assets/new.jpg);
    background-size: cover;
    background-attachment: fixed;
    height: auto;
    display:flex;
}

.contact{
  margin: 0 auto;
    display: flex;
}

#contacto {
    width: 100%;
    color: white !important;
    margin: 0 auto;
    min-height: calc(107vh - 100px);
    text-align: center;
    background-image: url(./assets/fondo.jpg);
    background-size: cover;
    background-attachment: fixed;
    height: auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
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
    font-size: 14px;
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
cursor: pointer;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  transition: 0.7s all;
  margin: 30px;
}

.ajust{
  margin: 0 auto;
    text-align: center;
    padding: 0px;
    cursor: auto;
}

#logs{
  padding: 10px 15px 10px 15px;
    background: #3d9898;
    border-radius: 3em;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 15px;
    -webkit-transition: 0.7s all;
    transition: 0.7s all;
    font-family: 'Nunito Sans',sans-serif;
}

#logs:hover{
  transform:scale(1.1);
  transition:0.7s all;
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
transition: 1s all;
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
  display: flex;
    justify-content: center;
    align-items: center;
    
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
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    list-style: none;
    -webkit-align-content: space-around;
    -ms-flex-line-pack: space-around;
    -webkit-align-content: space-around;
    margin: 0 auto;
    -ms-flex-line-pack: space-around;
    -webkit-align-content: space-around;
    -ms-flex-line-pack: space-around;
    align-content: space-around;
    font-size: 11px;
    margin: 0 auto;
    font-weight: 600;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.Li-footer {
    padding: 0px 35px 0 35px;
    font-size: 12px;
    text-align: center;
    margin: 0 auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: 0.4s;
    -webkit-transition: 0.4s;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.Li-footer img {
    /* padding: 0px 20px 0 20px; */
    font-size: 10px;
    text-align: center;
    margin: 0 auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: 0.4s;
    -webkit-transition: 0.4;
    -webkit-transition: 0.4;
    transition: 0.4;
    width: 50px;
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
    margin-top: 0;
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
    text-decoration: none;
    color: white;
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
    height: 9.5vh !important;
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
 // margin-right: 4.5em;
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
  height: 40px;
    background-color: #040613;
    color: #fff;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    display: block;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    display: flex;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    font-family: 'Segoe UI',sans-serif;
    align-items: center;
    margin: 0 auto;
}

header{height: 30px;}

section{
  border: none;
    outline: none;
    display: flex;
}

.inicio {
  min-height: calc(120vh - 100px);
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: absolute;
    -webkit-align-items: center;
    -webkit-box-align: center;
    width: 100%;
    display:flex;
    font-style: oblique;
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

.subti{
  font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    font-style: oblique;
    padding-top: 20px;
    }

.titulo {
  font-family: "Volkhov",serif;
    font-size: 75px;
    color: #01dcff;
    font-weight:bold;
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
  
    text-align: left;
}

#izq{
  padding-right:5%;
}

#der{
  padding-left: 5%;
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
#contvi{
  padding-top: 15%;
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

#btn-menu{
  display:none;
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
    padding: 0;
    width: 80%;

}

#contents{
    display:contents;
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
  background-size: cover;
    background-repeat: inherit;
    height: auto;
    min-width: 100%;
    min-height: 95.7vh;
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

.card{
  width: 18rem !important;
    margin: 0 auto !important;
    margin-bottom: 3em !important;
    border-radius: 1em !important;
}

.titact{
  padding-top: 4em;
    text-align: center;
    font-size: 2.5em;
    font-family: "Volkhov",serif;
    font-style: oblique;
    font-weight: bold;
    color: #ccbcd7;

}

.contacti{
  width: 75%;
    margin: 0 auto;
    display:block;
}

.cardcontent{
  width: 75%;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: -ms-flexbox;
    display: grid;
    margin: 0 auto;
    padding-top: 5em;
    display: grid;
    /* grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 100px repeat(2, 50px) 200px;
    grid-template-rows: repeat(2, 50px 100px); */
    grid-template-columns: [x0] 1fr [x1] 1fr [x2] 1fr [x3];
   //grid-template-rows: [y0] 1fr [y1] 1fr [y2] 1fr [y3];
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

#displaynone{
    display:none;
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

.menu{
  display:none;
}

@media only screen and (max-width: 1200px) {

.cardcontent {
    width: 75%;
    display: -ms-flexbox;
    /* display: grid; */
    margin: 0 auto;
    padding-top: 5em;
    display: grid;
    grid-template-columns: [x0] 1fr [x1] 1fr [x2] 1fr [x3];
    display: block;
}
.card {
    width: 33rem !important;
    margin: 0 auto !important;
    margin-bottom: 3em !important;
    border-radius: 1em !important;
}


}
@media only screen and (max-width: 1300px) {
  
  .Ul-header {
    display: inline-grid;
    background-color: #080f34ed;
    width: 100%;
    position: absolute;
    left: 540px;
    height: 100vh;
    opacity: 0;
    z-index: 0;
    top: 0px;
    position: fixed;
    font-size: 20px;
    padding: 0px;
    transition: 1s all;
    border-radius: 0em 0em 0em 0em;
    margin: 0 auto;

}

  #btn-menu:checked ~ .Ul-header{
    display: inline-grid;
    background-color: #080f34ed;
    width: 100%;
    position: absolute;
    left: 0px;
    height: 100vh;
    opacity: 1;
    z-index: 0;
    top: 0px;
    position: fixed;
    font-size: 20px;
    padding: 0px;
    transition: 1s all;
    border-radius: 0em 0em 0em 0em;
    margin: 0 auto;
}

  .App-header{
    padding-left: 3em;
  }

  #contnoo{
    width: 100% !important;
    text-align: center !important;
    display:grid;
  }
  .inicio{
    display: block;
    min-height: calc(50vh - 100px);
    margin-top: 16em;

  }
  .ca3-scroll-down-link{
    display:none;
  }

#logs {
    padding: 12px 25px 12px 25px;
    background: #3d9898;
    border-radius: 3em;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    margin-top: 0.3em !important;
    font-size: 16px;
    -webkit-transition: 0.7s all;
    -webkit-transition: 0.7s all;
    -webkit-transition: 0.7s all;
    -webkit-transition: 0.7s all;
    transition: 0.7s all;
    font-family: 'Nunito Sans',sans-serif;
}
  
  .Li-footer img{
    width:50px;
  }
  #izq{
    padding:0;
  }

  iframe {
    margin: 0 auto;
    border-radius: 1.2em;
    text-align: center;
    border: none;
    padding: 0;
    outline: none;
    width: 85%;
    padding: 0;
    margin: 0 auto;
    height: 50vh;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    -webkit-transition: 1s !important;
    -webkit-transition: 1s !important;
    -webkit-transition: 1s !important;
    -webkit-transition: 1s !important;
    transition: 1s !important;
}

label{
  display: contents !important;
}

.contents{
  position:absolute;
  display: block;
}

.cardcontent {
    width: 100%;
    display: -ms-flexbox;
    margin: 0 auto;
    padding-top: 5em;
    grid-template-columns: [x0] 1fr [x1] 1fr [x2] 1fr [x3];
    display: block;
}

.card {
    width: 33rem !important;
    margin: 0 auto !important;
    margin-bottom: 3em !important;
    border-radius: 1em !important;
}

.slick-list {
    text-align: center;
    border: none;
    outline: none;
    margin: 0 auto;
    position: relative;
    display: block;
    padding: 0;
    width: 80%;
}


  #der{
    padding:0;
  }
  .hvr-float{
    width: 85%;
  }
  .iz{
    width: 50%;
    margin: 0 auto;
    text-align: left;
  }

  .textoini {
    position: absolute;
    margin-top: 0 auto;
    margin-top: 22em;
    margin-left: 3em;
}

.Li-header {
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: 0.7s all;
    transition: 0.7s all;
    margin-top: 30px;
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
    font-size: 65px;
    margin: 0 auto;
    font-weight:bold;
}



#menu{
  z-index:1000;
  cursor:pointer;
}

.menu {
  display: block;
    z-index: 1000;
    padding-top: 0.9em;
    width: 35px;
    margin-right: 5em;
    cursor:pointer;
}

#displaynone{
    display:grid;
  }

  #contents{
    display:none;
  }
  
 

}

@media only screen and (max-width: 1000px) {

.inicio{
display: block;
min-height: calc(50vh - 100px);
margin-top: 13em;

}}

`;

export default GlobalStyle;
