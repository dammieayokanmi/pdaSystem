import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import basicFont from "./assets/Myfont/Matteo.otf";
import secFont from "./assets/Myfont/FuturaPTBook.otf";
import hraFont from "./assets/Myfont/sofiapro-light.otf";

const theme = {
  color: {
    brand_01: "#1b203a",
    brand_02: "#252c48",

    ui_01: "#0073a1",
    ui_02: "#ea4c89",
    ui_03: "#000000",
    ui_04: "#000b0a",
    ui_05: "#F37920",
  
    ui_text_06: '#f0f0f0',

    text_01: "#ffffff",
    text_02: "#535356",
		text_06: '#737373',
   
    // ui_text_02: "#FFA393",
    // ui_text_03: "#FFBF69",
    
    scroll_01: "darkgrey",
    scroll_02: "slategrey",
    // hover_row: "#F3F0F0",
    // active_primary: "#2EC4B6",
    // support_info: "#000000",
    // support_success: "#000000",
    // support_error: "#000000",
    // support_warning: "#000000",
  },
  breakpoint: {
    xl: "1151px",
    lg: "1058px",
    md: "768px",
    sm: "480px",
  },
};

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Matteo;
    src: url(${basicFont}) ;
  }

@font-face {
    font-family: Futura;
    src: url(${secFont}) ;
  }
@font-face {
    font-family: Sofia;
    src: url(${hraFont}) ;
  }

	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
		outline: none;
    height: 100%;
    background-color: #fff;
    font-family: Matteo ;
  }
	div, span {
    margin: 0;
    padding: 0;
  }
	h1, h2, h3, h4, h5, p {
		margin: 0;
		padding: 0;
	}
	

	.flex {
  	display: flex;
  	justify-content: center;
  	align-items: center;
	}
	img {
  	vertical-align: middle;
  	max-width: 100%;
  	height: auto;
	}
	a {
		text-decoration: none;
	}
`;

const Theme = (props) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      {props.children}
    </div>
  </ThemeProvider>
);
Theme.propTypes = {
  children: PropTypes.any.isRequired,
};

export { theme };
export default Theme;
