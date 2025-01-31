"use client"

import { motion } from "motion/react";
import styled from "styled-components";

export const LoadingContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

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
  background-color: var(--primary);
  box-sizing: border-box;
`

export const FaviconWrapper = styled(motion.div)`
  width: 100px;
  height: 100px;
  fill: var(--primary);
  border: 12px solid #fff;
  display: flex;
  flex-direction: row;
  border: 10px solid white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`
