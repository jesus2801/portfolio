import styled from '@emotion/styled';

export const MainCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #fafcff;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  will-change: opacity;
  transition: all 900ms ease;

  &.ocult {
    opacity: 0;
    visibility: hidden;
    button {
      display: none;
    }
  }

  .loader.active {
    opacity: 0;
  }

  .loader.ocult {
    display: none;
  }

  button {
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 6px 20px;
    color: var(--black);
    background-color: #fafcff;
    margin: 0;

    -webkit-box-shadow: 1px 3px 8px 1px rgba(219, 219, 219, 1);
    -moz-box-shadow: 1px 3px 8px 1px rgba(219, 219, 219, 1);
    box-shadow: 1px 3px 8px 1px rgba(219, 219, 219, 1);

    opacity: 0;
    visibility: hidden;
    will-change: opacity;
    transition: all 400ms ease;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;
