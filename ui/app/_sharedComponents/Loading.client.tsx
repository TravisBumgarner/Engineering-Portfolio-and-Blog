"use client"

import { THEME } from "@/lib/theme";
import { motion } from "motion/react";
import styled from "styled-components";

export const LoadingContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`

export const FaviconLeft = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
`

export const FaviconRight = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${THEME.PRIMARY_COLOR};
  box-sizing: border-box;
`

export const FaviconWrapper = styled(motion.div)`
  width: 100px;
  height: 100px;
  fill: ${THEME.PRIMARY_COLOR};
  border: 12px solid #fff;
  display: flex;
  flex-direction: row;
  border: 10px solid white;
`
