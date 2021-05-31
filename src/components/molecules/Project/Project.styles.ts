import styled from '@emotion/styled';

export const ProjectDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;

    cursor: pointer;
    transition: all 400ms ease;

    -webkit-box-shadow: 1px 4px 7px 0px rgba(214, 214, 214, 1);
    -moz-box-shadow: 1px 4px 7px 0px rgba(214, 214, 214, 1);
    box-shadow: 1px 4px 7px 0px rgba(214, 214, 214, 1);

    &:hover {
      transform: translateY(-40px);
      -webkit-box-shadow: 1px 5px 9px 0px rgba(201, 201, 201, 1);
      -moz-box-shadow: 1px 5px 9px 0px rgba(201, 201, 201, 1);
      box-shadow: 1px 5px 9px 0px rgba(201, 201, 201, 1);
    }

    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
      padding: 20px;
      object {
        width: 100%;
        cursor: pointer;
      }

      h3 {
        margin: 20px;
        color: var(--black);
        font-family: 'Montserrat', sans-serif;
        font-size: 30px;
        text-align: center;
      }

      p {
        color: var(--grey);
        font-size: 15px;
      }
    }
  }
`;
