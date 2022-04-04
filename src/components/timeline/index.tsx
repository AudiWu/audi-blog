import React, { useState, useEffect } from "react"
import { Chrono } from "react-chrono"
import data from "./data"
import {
  Wrapper,
  TimelineWrapper,
  CompanyName,
  JobTitle,
  Achievement,
} from "./styles"
import { Color } from "../../enums/color"
import { Title } from "../shared/title"

export const Timeline: React.FC<{}> = () => (
  <Wrapper id="experience">
    <Title value="Experience" />
    <TimelineWrapper>
      <Chrono
        items={data}
        mode="VERTICAL"
        theme={{
          primary: Color.MALACHITE,
          secondary: Color.WHITE,
          cardBgColor: Color.WHITE,
          cardForeColor: Color.DARK,
          titleColor: Color.WHITE,
          textColor: Color.DARK,
        }}
      >
        <div>
          <CompanyName>SparkAmplify</CompanyName>
          <JobTitle>Front-End Developer Intern</JobTitle>
          <Achievement>
            <li>
              Enhanced the drag and drop UI/UX to become smoother to use and
              make code readability simpler.
            </li>
            <li>
              Implement a pop-up form that can be designed by the user and can
              be auto- filled using the LinkedIn Autofill API.
            </li>
            <li>
              Implement a security function to make unauthorized users can’t use
              the feature that they don’t have access to.
            </li>
            <li>
              Helping backend engineers design or fix database models,
              controllers, and APIs.
            </li>
            <li>
              Reviewing and testing team’s code to provide additional
              perspective and catch errors.
            </li>
          </Achievement>
        </div>
      </Chrono>
    </TimelineWrapper>
  </Wrapper>
)
