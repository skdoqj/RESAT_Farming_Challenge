import { styled } from "styled-components";
const themeColor = "rgb(23, 161, 255)";
const grayColor = "#cccccc";

export const Calender = styled.div`
  margin-top: 40px;
  .calender_head {
    padding: 20px 0;
    display: flex;
    width: 500px;
    margin: 0 auto;
    justify-content: space-between;

    .year_month {
      font-size: 28px;
      font-weight: 500;
    }
    .move_month_btn {
      margin: auto 0;
      button {
        font-size: 14px;
        background-color: white;
        margin-left: 10px;
        padding: 3px 5px;
        border: 1px solid ${grayColor};
        border-radius: 5px;
      }
    }
  }

  .date_container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0;
    font-weight: 400;
    /* height: 300px; */
    width: 500px;
    margin: 0 auto;

    align-content: center;
    align-items: center;
    justify-items: center;

    .date_box {
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 1px solid ${grayColor}; */

      .date {
      }
      //선택 날짜
      .slected_date {
        /* width: 30px; */
        /* height: 30px; */
        color: white;
        background-color: ${themeColor};
        border-radius: 30px;
        padding: 8px 11px;
      }

      .last_month_date {
        color: ${grayColor};
      }
    }
    .week_box {
      width: 100%;
      border-bottom: 1px solid ${grayColor};
      .week {
      }
    }
  }
`;

export const Modal = styled.div`
  .modal,
  .overlay {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .overlay {
    background-color: #0000004e;
  }
  .madal_content {
    border: 2px solid orange;
    width: 500px;
    position: absolute;
    background-color: white;
    input {
      border: 1px solid black;
    }
  }
`;
