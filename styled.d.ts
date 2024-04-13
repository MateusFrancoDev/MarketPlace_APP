import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryText: string ,
      secondaryText: string,
      secondaryText: string,
      background: string,
      backgroundLight: string,
      borderColor: string,
      primaryButton: string,
      secondaryButton: string,
      denounceButton: string,
    }
  }
}