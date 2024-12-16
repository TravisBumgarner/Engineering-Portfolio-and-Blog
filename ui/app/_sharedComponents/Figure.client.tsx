"use client"

import styled from "styled-components";

export const FigureWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    width: max-content;
  }

  figcaption {
    text-align: center;
  }
`
