import { createGlobalStyle } from 'styled-components'
import RobotoExtraBold from './assets/fonts/Roboto/Roboto-Black.ttf';
import RobotoBold from './assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoMedium from './assets/fonts/Roboto/Roboto-Medium.ttf';
import RobotoRegular from './assets/fonts/Roboto/Roboto-Regular.ttf';
import InterMedium from './assets/fonts/Inter/Inter-Medium.ttf';
import InterLight from './assets/fonts/Inter/Inter-Light.ttf';
import InterBold from './assets/fonts/Inter/Inter-Bold.ttf';
import Secular from './assets/fonts/SecularOne/SecularOne-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face{
      font-family: "RobotoBold";
      src: url(${RobotoBold});
    }
    @font-face{
      font-family: "RobotoRegular";
      src: url(${RobotoRegular});
    }
    @font-face{
      font-family: "RobotoExtraBold";
      src: url(${RobotoExtraBold});
    }
    @font-face{
      font-family: "RobotoMedium";
      src: url(${RobotoMedium});
    }
    @font-face{
      font-family: "InterMedium";
      src: url(${InterMedium});
    }
    @font-face{
      font-family: "InterLight";
      src: url(${InterLight});
    }
    @font-face{
      font-family: "InterBold";
      src: url(${InterBold});
    }
    @font-face{
      font-family: "Secular";
      src: url(${Secular});
    }
  `

export default GlobalStyle

export const theme = {
    colors: {
        //white
        white: "#ffffff",
        //black
        black: "#000000",
        //grey
        greyMenu: "#C8BFBF",
        lightGrey: "#C4C4C4",
        darkGreyTxt: "#4D4D4D",
        darkGreyBorder: "#414141",
        //red
        red: "#C90000",
        //yellow
        lightYellow: "#FAAB34",
        darkYellow: "#D88200",
        gold: "#D88200",
        //green
        green: "#017E0D",
        //purple
        purple: "#3506BD"
    },
    font: {
        Title: "RobotoBold",
        SubTitle: "RobotoRegular",
        HiperTitle:"RobotoExtraBold",
        Text:"RobotoMedium",
        SecondText:"InterMedium",
        SecondLightText:"InterLight",
        SecondTitle:"InterBold"

    }
}