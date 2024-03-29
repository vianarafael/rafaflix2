import styled from "styled-components";
import get from "lodash/get";

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  border-bottom: 2px solid #2a7ae4;
  ${({ variant, theme }) => {
    return `background-color: ${get(theme, `colors.${variant}.background`)};`;
  }}
  .Logo {
    max-width: 168px;
  }

  .logo-container {
    cursor: pointer;
  }

  .lang {
    @media (max-width: 480px) {
      margin-top: 1rem;
      display: flex;
      margin: 1rem auto 0 auto;
    }
  }

  /* .searchbox-mobile {
    display: none;
  } */

  /* .fa-user-circle {
    font-size: 3rem;
    color: #fff;
    margin-left: 1rem;
    cursor: pointer;
  } */
  /* 
  .disappear {
    visibility: hidden;
    cursor: none;
  } */

  /* .Menu {
    width: 100%;
    height: 94px;
    z-index: 100;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;

    background: var(--black);
    border-bottom: 2px solid var(--primary);
  } */
  /* body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  } */
  @media (max-width: 800px) {
    .Menu {
      height: 40px;
      justify-content: center;
    }
    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  }

  .ButtonLink {
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity 0.3s;
    background-color: black;
  }
  .ButtonLink:hover,
  .ButtonLink:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    a.ButtonLink {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }

  .searchbox button {
    background-color: black;
    color: white;
  }

  input:focus {
    outline: 0;
  }

  @media (max-width: 480px) {
    border-bottom: none;

    .Menu {
      height: 8rem;
      display: flex;
      flex-direction: column;
      border: none;
    }

    .logo-container {
      margin: 0 auto;
    }

    .Logo {
      margin-top: 2.5rem;
    }

    .searchbox {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .searchbox input {
      width: 100%;
    }

    .searchbox button {
      display: none;
    }

    .searchbox input {
      border-radius: 30px;
    }

    .fa-user-circle {
      display: none;
    }

    .log-dashboard {
      margin-left: -28px;
      position: fixed;
      bottom: 0;
      z-index: 100;
    }

    .log-dashboard * {
      border: none;
      background-color: #2a7ae4;
      width: 100vw;
    }
  }
`;
