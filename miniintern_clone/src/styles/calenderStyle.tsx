import { styled } from "styled-components";
const themeColor = "rgb(23, 161, 255)";
const grayColor = "#cccccc";

export const Calender = styled.div`
  margin-top: 40px;
  /* margin-bottom: 100px; */
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
      align-items: center;
      flex-direction: column;

      .date,
      .week {
        padding-top: 20px;
      }
      //선택 날짜
      .slected_date {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        position: relative;
        .selected_point {
          z-index: -1;
          position: absolute;
          top: 10px;
          /* left: -10px; */
          width: 37px;
          height: 37px;
          background-color: ${themeColor};
          border-radius: 30px;
        }
      }

      .last_month_date {
        color: ${grayColor};
      }

      .memo_point {
        height: 5px;
        width: 5px;
        background-color: ${themeColor};
        border-radius: 5px;
        margin: 0 auto;
        margin-top: 2px;
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
    z-index: 1;
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
    z-index: 2;
    width: 400px;
    padding: 20px;
    left: calc(50% - 220px);
    position: absolute;
    background-color: white;
    border-radius: 4px;

    min-height: 250px;
    .close_btn {
      position: absolute;
      right: 20px;
      width: 40px;
    }
    .date_info {
      font-size: 18px;
      font-weight: 400;
      padding-bottom: 10px;
    }
    label {
      margin-right: 10px;
    }

    .memo_wrapper {
      margin-top: 20px;
      li {
        display: flex;
        /* justify-content: space-between; */
        align-items: center;

        padding: 0 20px;
        .memo_point {
          height: 5px;
          width: 5px;
          background-color: ${themeColor};
          border-radius: 5px;
        }
        .memo_value {
          margin-left: 10px;
          font-weight: 400;
        }
        .btns {
          right: 10px;
          margin-left: auto;
        }
      }
    }
  }
`;
