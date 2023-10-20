import { styled } from "styled-components";

export const Calender = styled.div`
  .date_container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-weight: 400;

    .last_month_dates {
      color: #a0a0a0;
    }
  }
`;
